/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useRef, useEffect, useMemo, ChangeEvent } from 'react';
import { 
  FileText, 
  Search, 
  Settings, 
  Wand2, 
  Terminal, 
  PieChart, 
  Layers, 
  Download, 
  Save, 
  ChevronRight, 
  CheckCircle2, 
  AlertCircle,
  Activity,
  Zap,
  Globe,
  Trash2,
  Plus,
  PlayCircle,
  Database,
  Cpu,
  MessageSquare
} from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { ResponsiveContainer, PieChart as RPieChart, Pie, Cell } from 'recharts';
import { GoogleGenAI } from '@google/genai';
import yaml from 'js-yaml';
import { PDFDocument } from 'pdf-lib';

// --- Default Configurations ---

const DEFAULT_AGENTS_YAML = `
agents:
  - name: fda_search_agent
    role: Regulatory Researcher
    goal: Find relevant 510(k) precedents and guidance documents from official FDA sources.
    backstory: You are an expert RA consultant with 20 years of experience in medical device submissions.
  - name: coral_synthesis_agent
    role: Document Architect
    goal: Transform messy regulatory data into a structured report with Coral highlighting.
    backstory: You specialize in forensic document analysis and technical information design.
  - name: checklist_agent
    role: Compliance Auditor
    goal: Verify that all submission requirements are met against the selected guidance.
    backstory: Built to simulate the rigorous checking process of an FDA reviewer.
`;

const DEFAULT_SKILL_MD = `
# Skill: SmartMed Sentinel
**Description**: Expert medical device regulatory review logic for 510(k) submissions.

## Core Capabilities
1. **Substantial Equivalence Analysis**: Deep mapping of predicate device features.
2. **Standard Alignment**: Linking technical specs to ISO/IEC consensus standards.
3. **Risk Profile Assessment**: Identifying potential gaps in biocompatibility or software safety.

## Operational Flow
- Extract 20 key regulatory entities.
- Construct 5 density-rich technical tables.
- Generate a 3000-word authoritative summary.
`;

// --- Types ---

type AgentType = 'fda_search_agent' | 'coral_synthesis_agent' | 'checklist_agent' | 'skill_creator_agent';
type VisualEffectType = 'Data Bloom' | 'Matrix Rain' | 'Holographic Scan' | 'Neural Pulse' | 'Typing Ghost' | 'Blueprint Fade';
type LanguageType = 'Traditional Chinese' | 'English';
type PantonePalette = 'Living Coral (Default)' | 'Classic Navy' | 'Very Peri' | 'Cyber Turquoise';

interface LogEntry {
  id: string;
  timestamp: string;
  type: 'INFO' | 'PROCESS' | 'AGENT' | 'WORKING' | 'SUCCESS';
  message: string;
}

interface Entity {
  id: string;
  name: string;
  context: string;
}

interface TableData {
  headers: string[];
  rows: string[][];
}

// --- Components ---

const MatrixRain = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    const letters = "01ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const fontSize = 10;
    const columns = canvas.width / fontSize;
    const drops = new Array(Math.floor(columns)).fill(1);

    const draw = () => {
      ctx.fillStyle = "rgba(0, 0, 0, 0.05)";
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      ctx.fillStyle = "#0f0";
      ctx.font = fontSize + "px monospace";

      for (let i = 0; i < drops.length; i++) {
        const text = letters.charAt(Math.floor(Math.random() * letters.length));
        ctx.fillText(text, i * fontSize, drops[i] * fontSize);

        if (drops[i] * fontSize > canvas.height && Math.random() > 0.975) {
          drops[i] = 0;
        }
        drops[i]++;
      }
    };

    const interval = setInterval(draw, 33);
    return () => clearInterval(interval);
  }, []);

  return <canvas ref={canvasRef} className="fixed inset-0 pointer-events-none z-50 opacity-10" />;
};

const HolographicScan = () => (
  <motion.div 
    initial={{ top: '0%' }}
    animate={{ top: '100%' }}
    transition={{ duration: 3, repeat: Infinity, ease: 'linear' }}
    className="fixed left-0 right-0 h-1 bg-coral/50 shadow-[0_0_15px_rgba(255,127,80,0.8)] z-50 pointer-events-none"
  />
);

export default function App() {
  // --- State ---
  const [activeTab, setActiveTab ] = useState<'summary' | 'checklist' | 'skill' | 'notes' | 'logic'>('summary');
  const [selectedModel, setSelectedModel] = useState('gemini-3-flash-preview');
  const [language, setLanguage] = useState<LanguageType>('Traditional Chinese');
  const [palette, setPalette] = useState<PantonePalette>('Living Coral (Default)');
  const [visualEffect, setVisualEffect] = useState<VisualEffectType>('Data Bloom');
  const [isExecuting, setIsExecuting] = useState(false);
  const [logs, setLogs] = useState<LogEntry[]>([
    { id: '1', timestamp: '08:30:00', type: 'INFO', message: 'System Initialized. Awaiting document ingestion...' }
  ]);
  const [activeAgent, setActiveAgent] = useState<AgentType | null>(null);
  const [documentName, setDocumentName] = useState('HeartLink_V4_510k.pdf');
  const [trimmedPages, setTrimmedPages] = useState<number[]>([1, 2, 3, 4, 5]);
  const [promptOverride, setPromptOverride] = useState('Focus on Section 21 CFR 892.2050. Highlight potential predicate devices from the 2023 FDA guidance update.');
  const [summaryContent, setSummaryContent] = useState<string>('');
  const [entities, setEntities] = useState<Entity[]>([]);
  const [tables, setTables] = useState<TableData[]>([]);
  const [showEffect, setShowEffect] = useState(false);
  const [coverageData] = useState([
    { name: 'Met', value: 75, color: '#FF7F50' },
    { name: 'Remaining', value: 25, color: '#e2e8f0' }
  ]);

  // --- Real Document State ---
  const [sourceFile, setSourceFile] = useState<File | null>(null);
  const abortControllerRef = useRef<AbortController | null>(null);
  const [pdfPageCount, setPdfPageCount] = useState<number>(0);

  // --- New Feature State ---
  const [agentsYaml, setAgentsYaml] = useState(DEFAULT_AGENTS_YAML);
  const [skillMd, setSkillMd] = useState(DEFAULT_SKILL_MD);
  const [notes, setNotes] = useState('# AI Note Keeper\n- Initial research notes go here...\n- Metadata extracted from HeartLink V4...');
  const [logicSource, setLogicSource] = useState<'yaml' | 'skill'>('yaml');

  const ai = useMemo(() => new GoogleGenAI({ apiKey: (process.env.GEMINI_API_KEY as string) }), []);

  // --- Logic Helpers ---

  const standardizeYaml = async () => {
    if (isExecuting) return;
    setIsExecuting(true);
    addLog('PROCESS', 'Standardizing agents.yaml configuration...');
    try {
      const response = await ai.models.generateContent({
        model: selectedModel,
        contents: `Transform this potentially non-standard YAML into a standardized agents configuration with fields: name, role, goal, backstory. Data: ${agentsYaml}`,
        config: { responseMimeType: 'application/json' }
      });
      const result = JSON.parse(response.text || '{}');
      setAgentsYaml(yaml.dump(result));
      addLog('SUCCESS', 'agents.yaml standardized successfully.');
    } catch (err) {
      addLog('INFO', 'Failed to standardize YAML.');
    } finally {
      setIsExecuting(false);
    }
  };

  const enrichSkillMd = async () => {
    if (isExecuting) return;
    setIsExecuting(true);
    addLog('PROCESS', 'Enriching skill.md with 3 WOW AI features...');
    try {
      const response = await ai.models.generateContent({
        model: selectedModel,
        contents: `Enrich this skill.md with 3 additional high-impact "WOW" AI features specifically for regulatory review. Keep it in Markdown. Data: ${skillMd}`
      });
      setSkillMd(response.text || skillMd);
      addLog('SUCCESS', 'skill.md enriched with 3 new features.');
    } catch (err) {
      addLog('INFO', 'Failed to enrich skill.md.');
    } finally {
      setIsExecuting(false);
    }
  };

  const handlePdfUpload = async (e: ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file && file.type === 'application/pdf') {
       try {
         const arrayBuffer = await file.arrayBuffer();
         const pdfDoc = await PDFDocument.load(arrayBuffer);
         setPdfPageCount(pdfDoc.getPageCount());
         setSourceFile(file);
         setDocumentName(file.name);
         setTrimmedPages([]);
         addLog('SUCCESS', `Loaded ${file.name} with ${pdfDoc.getPageCount()} pages.`);
       } catch (err) {
         addLog('INFO', 'Failed to parse PDF document.');
       }
    }
  };

  const applyPageSlice = async () => {
    if (!sourceFile || trimmedPages.length === 0) return;
    setIsExecuting(true);
    addLog('PROCESS', `Trimming ${trimmedPages.length} selected pages...`);
    try {
      const arrayBuffer = await sourceFile.arrayBuffer();
      const pdfDoc = await PDFDocument.load(arrayBuffer);
      const newPdf = await PDFDocument.create();
      
      // Page indices are 0-based in pdf-lib
      const pagesToKeep = trimmedPages.map(p => p - 1).filter(p => p >= 0 && p < pdfPageCount);
      const copiedPages = await newPdf.copyPages(pdfDoc, pagesToKeep);
      copiedPages.forEach(p => newPdf.addPage(p));
      
      const pdfBytes = await newPdf.save();
      const blob = new Blob([pdfBytes], { type: 'application/pdf' });
      const url = URL.createObjectURL(blob);
      const a = document.createElement('a');
      a.href = url;
      a.download = `trimmed_${documentName}`;
      a.click();
      URL.revokeObjectURL(url);
      addLog('SUCCESS', 'Trimmed PDF downloaded.');
    } catch (err) {
      addLog('INFO', 'Failed to trim PDF.');
    } finally {
      setIsExecuting(false);
    }
  };

  const stopExecution = () => {
    if (abortControllerRef.current) {
      abortControllerRef.current.abort();
      addLog('INFO', 'Execution halted by user.');
      setIsExecuting(false);
      setActiveAgent(null);
    }
  };

  const downloadFile = (content: string, filename: string) => {
    const blob = new Blob([content], { type: 'text/plain' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = filename;
    a.click();
    URL.revokeObjectURL(url);
  };

  // --- Effects ---
  const addLog = (type: LogEntry['type'], message: string) => {
    setLogs(prev => [...prev, {
      id: Math.random().toString(36).substr(2, 9),
      timestamp: new Date().toLocaleTimeString(),
      type,
      message
    }].slice(-50)); // Keep last 50
  };

  const handleExecution = async () => {
    if (isExecuting) return;
    setIsExecuting(true);
    abortControllerRef.current = new AbortController();
    
    const logicToUse = logicSource === 'yaml' ? agentsYaml : skillMd;
    addLog('AGENT', `Activating Sentinel Flow using ${logicSource} logic...`);
    addLog('INFO', `Processing notes: ${notes.substring(0, 50)}...`);
    
    try {
      const response = await ai.models.generateContent({
        model: selectedModel,
        contents: `Excute the following regulatory review mission based on the provided logic.
        
        Logic (${logicSource}):
        ${logicToUse}
        
        Input Context (Notes/Files):
        ${notes}
        
        Global Overrides:
        ${promptOverride}
        
        Requirements:
        1. Language: ${language}
        2. Output: Comprehensive 3000-4000 word summary, 5 Tables, 20 entities with context.
        3. STRICT ENDING REQUIREMENT: You MUST end the document with EXACTLY 20 comprehensive follow-up questions (numbered 1-20) covering technical, clinical, and regulatory risks.
        4. Format: Markdown with <span style="color:#FF7F50; font-weight:bold">term</span> for keywords.`,
      });

      if (abortControllerRef.current.signal.aborted) return;

      setSummaryContent(response.text || 'Error generating summary.');
      addLog('SUCCESS', 'Execution complete. Summary generated with 20 follow-up questions.');
      setShowEffect(true);
      setTimeout(() => setShowEffect(false), 5000);
    } catch (err: any) {
      if (err.name === 'AbortError') return;
      addLog('INFO', `Execution failed: ${err instanceof Error ? err.message : 'Unknown error'}`);
    } finally {
      setIsExecuting(false);
      setActiveAgent(null);
      abortControllerRef.current = null;
    }
  };

  const paletteColors = {
    'Living Coral (Default)': '#FF7F50',
    'Classic Navy': '#1e293b',
    'Very Peri': '#6667AB',
    'Cyber Turquoise': '#00F5FF'
  };

  const getAgentColor = () => paletteColors[palette];

  return (
    <div className="flex h-screen w-screen overflow-hidden font-sans text-slate-800 bg-slate-50">
      {/* Wow Visual Effects Overlay */}
      <AnimatePresence>
        {showEffect && visualEffect === 'Matrix Rain' && <MatrixRain />}
        {showEffect && visualEffect === 'Holographic Scan' && <HolographicScan />}
        {showEffect && visualEffect === 'Neural Pulse' && (
          <motion.div 
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 4, opacity: 0 }}
            transition={{ duration: 1 }}
            className="fixed inset-0 pointer-events-none z-50 m-auto w-64 h-64 border-4 border-coral rounded-full"
          />
        )}
      </AnimatePresence>

      {/* Sidebar */}
      <aside className="w-64 bg-slate-900 text-slate-300 p-4 flex flex-col gap-4 border-r border-slate-700 z-10">
        <div className="flex items-center gap-3 mb-2">
          <div className="w-8 h-8 flex items-center justify-center text-white font-bold rounded" style={{ backgroundColor: getAgentColor() }}>SM</div>
          <h1 className="text-sm font-bold text-white uppercase tracking-wider">SmartMed 5.0</h1>
        </div>

        <div className="space-y-4 no-scroll overflow-y-auto flex-1">
          <section>
            <label className="text-[10px] uppercase font-semibold text-slate-500 mb-1 block">Model Config</label>
            <select 
              value={selectedModel}
              onChange={(e) => setSelectedModel(e.target.value)}
              className="w-full bg-slate-800 border border-slate-700 text-xs p-2 rounded focus:outline-none focus:ring-1 focus:ring-coral text-slate-200 transition-all"
            >
              <option value="gemini-3-flash-preview">Gemini-3-flash-preview</option>
              <option value="gemini-3.1-pro-preview">Gemini-3.1-pro-preview (Advanced)</option>
              <option value="gpt-4o">GPT-4o (Hybrid Routing)</option>
              <option value="claude-3-5-sonnet">Claude 3.5 Sonnet</option>
            </select>
          </section>

          <section>
            <label className="text-[10px] uppercase font-semibold text-slate-500 mb-1 block">Language Output</label>
            <div className="grid grid-cols-2 gap-1">
              <button 
                onClick={() => setLanguage('Traditional Chinese')}
                className={`text-[10px] p-1.5 rounded font-medium transition-colors ${language === 'Traditional Chinese' ? 'bg-coral text-white' : 'bg-slate-800 text-slate-400'}`}
              >繁體中文</button>
              <button 
                onClick={() => setLanguage('English')}
                className={`text-[10px] p-1.5 rounded transition-colors ${language === 'English' ? 'bg-coral text-white' : 'bg-slate-800 text-slate-400'}`}
              >English</button>
            </div>
          </section>

          <section>
            <label className="text-[10px] uppercase font-semibold text-slate-500 mb-1 block">Pantone Palette</label>
            <select 
              value={palette}
              onChange={(e) => setPalette(e.target.value as PantonePalette)}
              className="w-full bg-slate-800 border border-slate-700 text-xs p-2 rounded text-slate-200"
            >
              {Object.keys(paletteColors).map(p => <option key={p} value={p}>{p}</option>)}
            </select> section
          </section>

<section>
            <label className="text-[10px] uppercase font-semibold text-slate-500 mb-1 block">Logic Engine Source</label>
            <div className="grid grid-cols-2 gap-1">
              <button 
                onClick={() => setLogicSource('yaml')}
                className={`text-[10px] p-1.5 rounded font-medium transition-colors ${logicSource === 'yaml' ? 'bg-coral text-white' : 'bg-slate-800 text-slate-400'}`}
                style={{ backgroundColor: logicSource === 'yaml' ? getAgentColor() : undefined }}
              >Agents.yaml</button>
              <button 
                onClick={() => setLogicSource('skill')}
                className={`text-[10px] p-1.5 rounded transition-colors ${logicSource === 'skill' ? 'bg-coral text-white' : 'bg-slate-800 text-slate-400'}`}
                style={{ backgroundColor: logicSource === 'skill' ? getAgentColor() : undefined }}
              >Skill.md</button>
            </div>
          </section>

          <section>
            <label className="text-[10px] uppercase font-semibold text-slate-500 mb-1 block">AI Magics</label>
            <div className="grid grid-cols-2 gap-2">
              <MagicButton icon="🪄" label="Reorganize" />
              <MagicButton icon="🏷️" label="Keywords" />
              <MagicButton icon="⚠️" label="Deficiency" />
              <MagicButton icon="🤝" label="Matcher" />
              <MagicButton icon="📊" label="Risk Matrix" />
              <MagicButton icon="📜" label="Executive" />
            </div>
          </section>

          <section>
            <label className="text-[10px] uppercase font-semibold text-slate-500 mb-1 block">Visual Effect</label>
            <select 
              value={visualEffect}
              onChange={(e) => setVisualEffect(e.target.value as VisualEffectType)}
              className="w-full bg-slate-800 border border-slate-700 text-xs p-2 rounded text-slate-200"
            >
              <option>Data Bloom</option>
              <option>Matrix Rain</option>
              <option>Holographic Scan</option>
              <option>Neural Pulse</option>
              <option>Typing Ghost</option>
              <option>Blueprint Fade</option>
            </select>
          </section>
        </div>

        <div className="mt-auto pt-4 border-t border-slate-800">
          <div className="bg-slate-800/50 p-3 rounded-lg border border-slate-700/50">
            <p className="text-[10px] text-slate-500 mb-2">Agentic Pipeline Health</p>
            <div className="flex justify-between items-end">
              <div className="flex gap-1">
                {[12, 18, 9, 15, 6].map((h, i) => (
                  <motion.div 
                    key={i}
                    animate={{ height: [h, h * 1.5, h] }}
                    transition={{ duration: 1, repeat: Infinity, delay: i * 0.1 }}
                    className="w-1 bg-green-500 rounded-full"
                  />
                ))}
              </div>
              <span className="text-[10px] font-mono">82.4% Cov.</span>
            </div>
          </div>
        </div>
      </aside>

      {/* Main Content Area */}
      <main className="flex-1 flex flex-col bg-slate-50 relative">
        {/* Header */}
        <header className="h-14 bg-white border-b border-slate-200 flex items-center justify-between px-6 z-10">
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-2">
              <div className={`w-3 h-3 rounded-full ${activeAgent ? 'bg-green-500 agent-pulse' : 'bg-slate-300'}`}></div>
              <span className="text-xs font-semibold text-slate-600">
                {activeAgent ? `Agent Active: ${activeAgent}` : 'Agents Standing By'}
              </span>
            </div>
            <div className="h-4 w-[1px] bg-slate-300"></div>
            <div className="flex items-center gap-2">
              <FileText className="w-3.5 h-3.5 text-slate-400" />
              <span className="text-xs text-slate-500">Document: <span className="text-slate-800 font-medium">{documentName}</span></span>
            </div>
          </div>
          <div className="flex gap-2">
            <button className="text-xs font-medium px-4 py-1.5 border border-slate-300 rounded hover:bg-slate-50 transition-all flex items-center gap-2">
              <Save className="w-3 h-3" /> Save Draft
            </button>
            <button className="text-xs font-medium px-4 py-1.5 bg-coral text-white rounded shadow-sm hover:opacity-90 transition-all flex items-center gap-2" style={{ backgroundColor: getAgentColor() }}>
              <Download className="w-3 h-3" /> Export Markdown
            </button>
          </div>
        </header>

        {/* Content Grid */}
        <div className="flex-1 p-6 grid grid-cols-12 gap-6 overflow-hidden">
          {/* Left Column: Inputs */}
          <div className="col-span-4 flex flex-col gap-6 overflow-hidden">
            <div className="glass-card flex-1 rounded-xl p-4 flex flex-col overflow-hidden">
              <div className="flex justify-between items-center mb-3">
                <h2 className="text-xs font-bold uppercase tracking-wider text-slate-400 flex items-center gap-2">
                  <Layers className="w-3.5 h-3.5" /> Source Document
                </h2>
                <span className="text-[10px] bg-slate-100 px-2 py-0.5 rounded text-slate-500">48 Pages</span>
              </div>
              
              <div className="flex-1 border-2 border-dashed border-slate-200 rounded-lg flex flex-col bg-slate-50/50 p-4 transition-all hover:bg-white/80 overflow-hidden">
                <div className="flex-1 flex flex-col items-center justify-center text-center overflow-y-auto no-scroll">
                  <div className="w-10 h-10 bg-slate-100 rounded-full flex items-center justify-center mb-3">
                    <FileText className="w-6 h-6 text-slate-400" />
                  </div>
                  <p className="text-[11px] text-slate-500 font-medium mb-4">Upload source PDF & select pages to trim</p>
                  
                  <input 
                    type="file" 
                    id="pdf-upload" 
                    className="hidden" 
                    accept="application/pdf"
                    onChange={handlePdfUpload}
                  />
                  <button 
                    onClick={() => document.getElementById('pdf-upload')?.click()}
                    className="mb-4 px-4 py-2 border border-slate-300 rounded text-[10px] font-bold uppercase tracking-tight flex items-center gap-2 hover:bg-slate-50 transition-colors"
                  >
                    <Plus className="w-3 h-3" /> Upload Source PDF
                  </button>

                  <div className="grid grid-cols-5 gap-2 px-2">
                    {Array.from({ length: Math.max(15, pdfPageCount) }).slice(0, 25).map((_, i) => (
                      <button 
                        key={i} 
                        onClick={() => {
                          const page = i + 1;
                          setTrimmedPages(prev => prev.includes(page) ? prev.filter(p => p !== page) : [...prev, page]);
                        }}
                        className={`w-8 h-8 flex items-center justify-center text-[10px] rounded transition-all transform hover:scale-105 active:scale-95 ${trimmedPages.includes(i + 1) ? 'bg-coral text-white shadow-sm' : 'bg-white border border-slate-200 text-slate-400'}`}
                        style={{ backgroundColor: trimmedPages.includes(i + 1) ? getAgentColor() : undefined }}
                      >
                        {i + 1}
                      </button>
                    ))}
                    {pdfPageCount > 25 && <div className="w-8 h-8 flex items-center justify-center text-[10px] bg-slate-200 rounded text-slate-500">...</div>}
                  </div>
                </div>
                
                <div className="mt-4 pt-4 border-t border-slate-200 flex justify-between gap-2">
                  <button onClick={() => setTrimmedPages([])} className="flex-1 text-[10px] font-bold uppercase tracking-tight py-2 bg-slate-100 rounded hover:bg-slate-200 transition-colors">Clear All</button>
                  <button onClick={applyPageSlice} className="flex-2 text-[10px] font-bold uppercase tracking-tight py-2 bg-slate-800 text-white rounded hover:bg-slate-900 transition-colors">Apply Page Slice</button>
                </div>
              </div>
            </div>

            <div className="h-44 glass-card rounded-xl p-4 flex flex-col">
              <h2 className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-3 flex items-center gap-2">
                <Terminal className="w-3.5 h-3.5" /> Prompt & Context persistence
              </h2>
              <textarea 
                value={promptOverride}
                onChange={(e) => setPromptOverride(e.target.value)}
                className="flex-1 w-full bg-slate-50 border border-slate-200 rounded p-2 text-xs text-slate-600 focus:outline-none focus:ring-1 focus:ring-coral resize-none placeholder:italic"
                placeholder="Modify instruction for all LLM agents..."
              />
              <div className="mt-2 flex items-center gap-2">
                 <input type="checkbox" checked id="persistent" className="accent-coral" />
                 <label htmlFor="persistent" className="text-[10px] text-slate-500 cursor-pointer">Keep prompt on previous summary</label>
              </div>
            </div>
          </div>

          {/* Right Column: Results & Workspace */}
          <div className="col-span-8 flex flex-col gap-6 overflow-hidden">
            <div className="glass-card flex-1 rounded-xl flex flex-col overflow-hidden relative shadow-sm">
              <div className="flex border-b border-slate-200 bg-white/50 sticky top-0 z-10 backdrop-blur-sm">
                <TabButton 
                  active={activeTab === 'summary'} 
                  onClick={() => setActiveTab('summary')}
                  label={`Sentinel Report`}
                  badge={language === 'Traditional Chinese' ? '繁體' : 'EN'}
                />
                <TabButton 
                  active={activeTab === 'notes'} 
                  onClick={() => setActiveTab('notes')}
                  label="Note Keeper"
                  badge="AI"
                />
                <TabButton 
                  active={activeTab === 'logic'} 
                  onClick={() => setActiveTab('logic')}
                  label="Logic Workspace"
                  badge="YAML/MD"
                />
                <TabButton 
                  active={activeTab === 'checklist'} 
                  onClick={() => setActiveTab('checklist')}
                  label="Review Guidance"
                />
              </div>

              <div className="flex-1 p-6 overflow-y-auto no-scroll scroll-smooth bg-white/30">
                <AnimatePresence mode="wait">
                  {/* ... isExecuting as before ... */}
                  {isExecuting && (
                    <motion.div 
                      key="loader"
                      initial={{ opacity: 0 }} 
                      animate={{ opacity: 1 }} 
                      exit={{ opacity: 0 }}
                      className="absolute inset-0 z-20 flex flex-col items-center justify-center bg-white/60 backdrop-blur-md"
                    >
                      <div className="relative w-20 h-20 mb-4">
                        <motion.div 
                          animate={{ rotate: 360 }}
                          transition={{ duration: 4, repeat: Infinity, ease: 'linear' }}
                          className="absolute inset-0 border-4 border-slate-100 rounded-full"
                        />
                        <motion.div 
                          style={{ borderColor: getAgentColor() }}
                          animate={{ rotate: 360 }}
                          transition={{ duration: 2, repeat: Infinity, ease: 'linear' }}
                          className="absolute inset-0 border-4 border-t-transparent rounded-full"
                        />
                        <div className="absolute inset-0 flex items-center justify-center">
                          <Cpu className="w-8 h-8 text-slate-400" />
                        </div>
                      </div>
                      <p className="text-xs font-bold uppercase tracking-widest text-slate-500">Processing Agentic Flow</p>
                      <p className="text-[10px] text-slate-400 mt-1 italic animate-pulse">Consulting {logicSource === 'yaml' ? 'agents.yaml' : 'skill.md'}...</p>
                    </motion.div>
                  )}

                  {activeTab === 'notes' && (
                    <motion.div key="notes" initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="h-full flex flex-col">
                      <div className="flex justify-between items-center mb-4">
                        <h3 className="text-sm font-bold text-slate-700 uppercase tracking-widest flex items-center gap-2">
                           <MessageSquare className="w-4 h-4" /> AI Research Notes
                        </h3>
                        <div className="flex gap-2">
                          <button onClick={() => setNotes('')} className="text-[10px] font-bold p-1 text-slate-400 hover:text-red-500 transition-colors">CLEAR</button>
                        </div>
                      </div>
                      <textarea 
                        value={notes}
                        onChange={(e) => setNotes(e.target.value)}
                        className="flex-1 bg-slate-50 border border-slate-200 rounded-xl p-4 text-sm font-mono text-slate-700 focus:outline-none focus:ring-2 focus:ring-coral/20 resize-none shadow-inner"
                        placeholder="Paste your research notes here..."
                      />
                    </motion.div>
                  )}

                  {activeTab === 'logic' && (
                    <motion.div key="logic" initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="h-full grid grid-cols-2 gap-6">
                      {/* agents.yaml section */}
                      <div className="flex flex-col h-full border-r border-slate-100 pr-6">
                        <div className="flex justify-between items-center mb-4">
                          <h3 className="text-sm font-bold text-slate-700 uppercase tracking-widest flex items-center gap-2">
                             <Cpu className="w-4 h-4" /> agents.yaml
                          </h3>
                          <div className="flex gap-2">
                            <input 
                              type="file" 
                              id="yaml-upload" 
                              className="hidden" 
                              accept=".yaml,.yml" 
                              onChange={(e) => {
                                const file = e.target.files?.[0];
                                if (file) {
                                  const reader = new FileReader();
                                  reader.onload = (re) => setAgentsYaml(re.target?.result as string);
                                  reader.readAsText(file);
                                }
                              }} 
                            />
                            <button onClick={() => document.getElementById('yaml-upload')?.click()} className="text-[8px] font-bold px-2 py-1 bg-slate-100 text-slate-500 rounded hover:bg-slate-200 transition-all">UPLOAD</button>
                            <button onClick={standardizeYaml} className="text-[8px] font-bold px-2 py-1 bg-coral/10 text-coral rounded hover:bg-coral/20 transition-all">STANDARDIZE</button>
                            <button onClick={() => downloadFile(agentsYaml, 'agents.yaml')} className="text-[8px] font-bold px-2 py-1 bg-slate-100 text-slate-500 rounded hover:bg-slate-200 transition-all"><Download className="w-3 h-3" /></button>
                          </div>
                        </div>
                        <textarea 
                          value={agentsYaml}
                          onChange={(e) => setAgentsYaml(e.target.value)}
                          className="flex-1 bg-slate-900 border border-slate-800 rounded-xl p-4 text-[11px] font-mono text-green-400 focus:outline-none focus:ring-2 focus:ring-coral/20 resize-none shadow-2xl"
                        />
                         <div className="mt-2 text-[10px] text-slate-400 italic">Paste or upload your custom agent configuration.</div>
                      </div>

                      {/* skill.md section */}
                      <div className="flex flex-col h-full">
                        <div className="flex justify-between items-center mb-4">
                          <h3 className="text-sm font-bold text-slate-700 uppercase tracking-widest flex items-center gap-2">
                             <Wand2 className="w-4 h-4" /> skill.md
                          </h3>
                          <div className="flex gap-2">
                            <input 
                              type="file" 
                              id="skill-upload" 
                              className="hidden" 
                              accept=".md" 
                              onChange={(e) => {
                                const file = e.target.files?.[0];
                                if (file) {
                                  const reader = new FileReader();
                                  reader.onload = (re) => setSkillMd(re.target?.result as string);
                                  reader.readAsText(file);
                                }
                              }} 
                            />
                            <button onClick={() => document.getElementById('skill-upload')?.click()} className="text-[8px] font-bold px-2 py-1 bg-slate-100 text-slate-500 rounded hover:bg-slate-200 transition-all">UPLOAD</button>
                            <button onClick={enrichSkillMd} className="text-[8px] font-bold px-2 py-1 bg-coral/10 text-coral rounded hover:bg-coral/20 transition-all">ENRICH (WOW)</button>
                            <button onClick={() => downloadFile(skillMd, 'skill.md')} className="text-[8px] font-bold px-2 py-1 bg-slate-100 text-slate-500 rounded hover:bg-slate-200 transition-all"><Download className="w-3 h-3" /></button>
                          </div>
                        </div>
                        <textarea 
                          value={skillMd}
                          onChange={(e) => setSkillMd(e.target.value)}
                          className="flex-1 bg-white border border-slate-200 rounded-xl p-4 text-[11px] font-sans text-slate-700 focus:outline-none focus:ring-2 focus:ring-coral/20 resize-none shadow-sm"
                        />
                        <div className="mt-2 text-[10px] text-slate-400 italic">User-defined skills for specialized regulatory logic.</div>
                      </div>
                    </motion.div>
                  )}

                  {activeTab === 'summary' && !summaryContent && !isExecuting && (
                    <motion.div 
                      key="empty"
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="h-full flex flex-col items-center justify-center text-center opacity-40"
                    >
                      <Zap className="w-12 h-12 mb-4 text-slate-300" />
                      <p className="text-sm font-medium">Configure inputs and initiate Agentic Scan</p>
                      <div className="flex gap-4 items-center">
                        <button 
                           onClick={handleExecution}
                           className="mt-6 px-8 py-3 bg-slate-900 text-white rounded-full text-xs font-bold uppercase tracking-widest hover:scale-105 active:scale-95 transition-all shadow-xl"
                        >
                           Launch Sentinel Flow
                        </button>
                        {isExecuting && (
                          <button 
                            onClick={stopExecution}
                            className="mt-6 px-8 py-3 bg-red-500 text-white rounded-full text-xs font-bold uppercase tracking-widest hover:scale-105 active:scale-95 transition-all shadow-xl"
                          >
                             STOP SCAN
                          </button>
                        )}
                      </div>
                    </motion.div>
                  )}

                  {summaryContent && (
                    <motion.div 
                       key="content"
                       initial={{ opacity: 0 }}
                       animate={{ opacity: 1 }}
                       className="prose prose-slate"
                    >
                      <div dangerouslySetInnerHTML={{ __html: summaryContent.replace(/\n/g, '<br />') }} />
                      
                      {/* Dashboard Components within Flow */}
                      {entities.length > 0 && (
                        <div className="mt-8 pt-8 border-t border-slate-100">
                          <h3 className="text-sm font-bold uppercase tracking-widest text-slate-400 mb-4 flex items-center gap-2">
                             <Database className="w-4 h-4" /> Core Entity Intelligence (20 Units Extraction)
                          </h3>
                          <div className="grid grid-cols-2 gap-4">
                            {entities.map(e => (
                              <div key={e.id} className="p-3 bg-coral/5 border border-coral/10 rounded-lg group hover:border-coral/40 transition-all cursor-default">
                                <span className="text-[10px] font-bold uppercase text-coral" style={{ color: getAgentColor() }}>Entity {e.id}: {e.name}</span>
                                <p className="text-[11px] leading-relaxed text-slate-600 mt-1">{e.context}</p>
                              </div>
                            ))}
                          </div>
                        </div>
                      )}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </div>

            {/* Bottom Dashboard Area */}
            <div className="h-40 grid grid-cols-12 gap-4">
              <div className="col-span-8 bg-slate-900 rounded-xl p-3 terminal-font text-green-400 overflow-hidden flex flex-col shadow-inner relative group border border-slate-800">
                <div className="flex justify-between items-center mb-1 pb-1 border-b border-slate-800">
                  <div className="flex items-center gap-2 px-1">
                    <Activity className="w-3 h-3 text-slate-600" />
                    <span className="text-[9px] text-slate-500 uppercase font-sans tracking-widest">Agent Reasoning Stream (Live Log)</span>
                  </div>
                  <div className="flex gap-2">
                    <span className="text-[8px] bg-slate-800 px-1.5 py-0.5 rounded text-slate-500">32.4k Context</span>
                    <span className="text-[8px] text-slate-700">480ms Latency</span>
                  </div>
                </div>
                <div className="flex-1 overflow-y-auto no-scroll pt-2 space-y-1">
                  {logs.map((log, i) => (
                    <div key={log.id} className={`text-[10px] flex gap-2 ${i === logs.length - 1 ? 'animate-pulse' : 'opacity-70'}`}>
                      <span className="text-slate-600 shrink-0">[{log.timestamp}]</span>
                      <span className={`font-bold shrink-0 ${log.type === 'SUCCESS' ? 'text-blue-400' : log.type === 'AGENT' ? 'text-coral' : 'text-green-500'}`}>{log.type}</span>
                      <span className="text-slate-300 break-all">{log.message}</span>
                    </div>
                  ))}
                </div>
                <div className="absolute top-0 right-0 p-2 opacity-0 group-hover:opacity-100 transition-opacity">
                  <button onClick={() => setLogs([])} className="text-slate-600 hover:text-slate-400"><Trash2 className="w-3 h-3" /></button>
                </div>
              </div>

              <div className="col-span-4 glass-card rounded-xl p-4 flex flex-col justify-between shadow-sm border border-white/50">
                <div className="flex justify-between items-center">
                  <h3 className="text-[10px] font-bold text-slate-400 uppercase tracking-widest flex items-center gap-2">
                    <PieChart className="w-3 h-3" /> Coverage Metrics
                  </h3>
                  <div className="w-3 h-3 bg-green-500 rounded-full animate-ping"></div>
                </div>
                
                <div className="flex items-center gap-4 flex-1 mt-2">
                  <div className="relative w-20 h-20">
                    <ResponsiveContainer width="100%" height="100%">
                      <RPieChart>
                        <Pie
                          data={coverageData}
                          innerRadius={28}
                          outerRadius={36}
                          paddingAngle={0}
                          dataKey="value"
                          stroke="none"
                        >
                          {coverageData.map((entry, index) => (
                            <Cell key={`cell-${index}`} fill={index === 0 ? getAgentColor() : entry.color} />
                          ))}
                        </Pie>
                      </RPieChart>
                    </ResponsiveContainer>
                    <div className="absolute inset-0 flex flex-col items-center justify-center">
                       <span className="text-xs font-bold leading-none">75%</span>
                       <span className="text-[7px] text-slate-400 font-bold uppercase mt-0.5">Met</span>
                    </div>
                  </div>
                  
                  <div className="flex-1 space-y-1.5 flex flex-col justify-center">
                    <MetricRow label="Guidance Met" value="14/18" />
                    <MetricRow label="Risk Mitigation" value="92%" />
                    <MetricRow label="Token Usage" value="12k/32k" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>

      {/* Floating Action Buttons */}
      <div className="fixed bottom-6 right-6 flex flex-col gap-3 z-50">
        <motion.button 
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          className="w-12 h-12 bg-white border border-slate-200 rounded-full shadow-lg flex items-center justify-center text-slate-600 hover:bg-slate-50 transition-colors"
        >
          <MessageSquare className="w-5 h-5" />
        </motion.button>
        <motion.button 
          whileHover={{ scale: 1.1, rotate: 15 }}
          whileTap={{ scale: 0.9 }}
          onClick={handleExecution}
          className="w-14 h-14 bg-slate-900 text-white rounded-full shadow-2xl flex items-center justify-center text-xl hover:bg-slate-800 transition-all border-2"
          style={{ borderColor: getAgentColor() }}
        >
          <Wand2 className="w-6 h-6" />
        </motion.button>
      </div>

      {/* Visual Effect overlays */}
      <AnimatePresence>
        {showEffect && visualEffect === 'Data Bloom' && (
          <motion.div 
            initial={{ opacity: 0, backdropFilter: 'blur(0px)' }}
            animate={{ opacity: 1, backdropFilter: 'blur(20px)' }}
            exit={{ opacity: 0, backdropFilter: 'blur(0px)' }}
            transition={{ duration: 1.5 }}
            className="fixed inset-0 z-[100] pointer-events-none flex items-center justify-center"
          >
            <motion.h2 
              initial={{ scale: 0.5, opacity: 0 }}
              animate={{ scale: 1.2, opacity: 1 }}
              exit={{ scale: 0.5, opacity: 0 }}
              className="text-4xl font-black italic tracking-tighter text-white uppercase drop-shadow-[0_0_20px_rgba(255,255,255,0.8)]"
            >
              Synthesis Complete
            </motion.h2>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

// --- Sub-components ---

function MagicButton({ icon, label }: { icon: string, label: string }) {
  return (
    <button className="bg-slate-800 border border-slate-700 text-[9px] py-1.5 px-1 rounded flex flex-col items-center justify-center gap-1 hover:border-coral transition-colors hover:bg-slate-700 active:scale-95 group">
      <span className="text-sm group-hover:scale-110 transition-transform">{icon}</span>
      <span className="uppercase text-slate-400 font-semibold">{label}</span>
    </button>
  );
}

function TabButton({ active, onClick, label, badge }: { active: boolean, onClick: () => void, label: string, badge?: string }) {
  return (
    <button 
      onClick={onClick}
      className={`px-6 py-3 text-xs font-bold transition-all relative ${active ? 'text-coral' : 'text-slate-400 hover:text-slate-600'}`}
    >
      <div className="flex items-center gap-2">
        {label}
        {badge && <span className="text-[8px] bg-slate-100 px-1 rounded text-slate-500 font-normal">{badge}</span>}
      </div>
      {active && (
        <motion.div 
          layoutId="tabUnderline"
          className="absolute bottom-0 left-0 right-0 h-0.5 bg-coral"
        />
      )}
    </button>
  );
}

function MetricRow({ label, value }: { label: string, value: string }) {
  return (
    <div className="flex justify-between items-center gap-2">
      <span className="text-[9px] font-semibold text-slate-500 uppercase tracking-tight truncate">{label}</span>
      <span className="text-[10px] font-mono font-bold text-slate-700 whitespace-nowrap">{value}</span>
    </div>
  );
}
