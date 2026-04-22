Technical Specification: SmartMed Review 5.0 (The Agentic Regulatory Sentinel)
Project Name: SmartMed Review 5.0
Subtitle: The Agentic Regulatory Sentinel
Version: 5.0.0 (Production-Ready)
Document Classification: Advanced Technical Specification & Architecture Design
1. Executive Summary
SmartMed Review 5.0 is a specialized, agentic-driven computing environment designed to automate and augment the clinical and regulatory review cycle for medical device 510(k) submissions. Unlike static document viewers or simple Chat-with-PDF implementations, the Sentinel architecture employs a multi-agent orchestration layer that treats regulatory logic as programmable configurations (via agents.yaml and skill.md).
The system integrates high-fidelity "Sleek Interface" design principles with real-time document processing, allowing Regulatory Affairs (RA) professionals to ingest dossiers, trim them into precise "Page Slices," and analyze them using custom-defined AI personas. The resulting output is a density-rich, 4,000-word Intelligence Summary structured to meet FDA scrutiny standards.
2. Design Philosophy & Thematic Architecture
2.1 The "Sleek Interface" Aesthetic
The UI/UX is built on the concept of Technical Command & Control. Every element is designed to evoke precision, authoritative analysis, and real-time oversight.
Glass-Morphism: Utilizing semi-transparent backgrounds with high-blur backdrops (backdrop-blur-xl) and subtle borders to create a sense of depth and modern professional sophistication.
Pantone Palettes: The system supports dynamic color theming based on iconic Pantone palettes. The default Living Coral (Pantone 16-1546) is used as the primary accent, providing a warm, biological contrast to the technical slate-and-navy canvas. Other palettes include Classic Navy for high-focus deep study and Cyber Turquoise for rapid triage.
Typography: The design utilizes a dual-font strategy:
Sans-Serif (Standard): Used for UI controls and readability.
Monospace (Terminal): Reserved for agent logs, reasoning streams, and YAML configurations to emphasize the "under-the-hood" intelligence being processed.
2.2 Visual "Wow" Factors
The "Sentinel" is designed to keep the user engaged during the cognitive processing phase of the LLM.
6 Interactive Visualizations: Data Bloom, Matrix Rain (Canvas-based), Holographic Scan (CSS-animation), Neural Pulse, Typing Ghost, and Blueprint Fade. These are not merely decorative but serve as a "heartbeat" indicator for the agentic status.
3. Frontend Architecture
3.1 Technology Stack
Framework: React 19.x (Functional Components, Hooks).
Build Tool: Vite 6.2 (ESM, HMR).
Styling: Tailwind CSS 4.x (Utility-first, CSS Variable injection).
Animation: Motion (formerly Framer Motion) for layout transitions and AnimatePresence state management.
Icons: Lucide-React (SVG-based).
3.2 State Management & Synchronization
The application follows a Decentralized State Pattern where different domains (Document, Agent Configuration, Output) are managed via React's useState and useMemo hooks to minimize re-renders.
Execution State: Managed via isExecuting and abortControllerRef. This allows the user to trigger the STOP SCAN command, which leverages the native browser AbortSignal to terminate the remote LLM stream immediately.
Dashboard Sync: The "Coverage Metrics" (via Recharts) are reactive to the coverageData state, which is dynamically calculated based on the agent's findings during the scan.
4. Agentic Logic & Intelligence Engine
4.1 The Configuration Layer
The hallmark of SmartMed 5.0 is the separation of logic from core code.
Agents.yaml: Defines the Personas. Each agent is defined with a name, role, goal, and backstory. This allows the system to simulate a "Round Table" of experts (e.g., a "FDA Lead Reviewer" vs. a "Biocompatibility Specialist").
Skill.md: Defines the Capabilities. This Markdown-based format allows RA experts to write "rules of thumb" or regulatory checklists in plain text, which the AI then interprets as strict operational constraints.
Skill Creator (Wow Feature): An integrated "Skill Creator" agent can take a basic Markdown file and "enrich" it, adding 3 specialized logic gates specifically for high-risk regulatory scenarios.
4.2 LLM Orchestration
The system utilizes the Google Gemini API (via @google/genai) as its primary brain.
Dynamic Routing: Users can switch between gemini-3-flash-preview for rapid triage and gemini-3.1-pro-preview for deep clinical synthesis.
Context Management: Notes pasted into the "AI Note Keeper" are injected into the prompt along with the logicSource (either the YAML or the MD) to ensure the AI's response is grounded in custom operational logic.
5. Document Sentinel & PDF Processing
5.1 Real-World PDF Interaction
Unlike standard LLM apps that just "extract text," SmartMed 5.0 handles PDF binaries directly using the pdf-lib library.
Ingestion: When a PDF is uploaded, the Sentinel reads the binary structure to determine the exact page count, populating the "Page Slice" selection grid.
Page Slicing (Physical Trimming): This is a critical regulatory feature. RA professionals often need to submit only specific sections of a data report. The system allows the user to select specific pages (e.g., pages 1-5 and 48), creates a new PDF in-memory, and provides a direct download link.
Download Flow: Once the "Apply Page Slice" is triggered, the system generates a Blob and triggers a browser click event for a seamless export experience.
6. Observability & Dashboarding
6.1 Live Reasoning Stream (Agent Log)
The footer of the application features a terminal-style log. This serves as the system's "Transparency Layer." It logs:
INFO: System status updates.
AGENT: When a specific agent from agents.yaml is activated.
PROCESS: Specific sub-tasks (e.g., "Consulting Guidance Database").
SUCCESS: Highlighting completed milestones.
6.2 Interactive Indicators
Wow Interactive Indicator: A pulsing green status light in the header that changes rhythm based on whether an agent is "Thinking" (active execution) or "Standing By" (idle).
Coverage Gauges: A PieChart visualization that breaks down regulatory coverage (e.g., "Met" vs. "Remaining") to give the user a high-level confidence score before they even read the summary.
7. AI "Magic" Toolset
The sidebar provides a specialized "Wow" module containing 6 automated agents (implementations for complex tasks):
Reorganize: Flattens unstructured clinician notes into a formal Section 11 structure.
Keywords: Extracts and highlights critical terms using the "Coral Engine" (inline CSS styling).
Deficiency: Specifically scans for missing data points according to the 21 CFR standards.
Predicate Matcher: Cross-references the device specs against a database of previously cleared K-numbers.
Risk Matrix: Automatically generates a SWOT or hazard analysis table in Markdown.
Executive: Condenses 40 pages of data into a 2-paragraph summary for C-suite or lead reviewer review.
8. Technical Specification of Outputs
The Sentinel is configured to produce a standardized "Sentinel Report":
Volume: 3,000–4,000 words.
Tables: 5 technical tables (Comparison, Risk, Indicators, Biocompatibility, Sterilization).
Entities: 20 regulatory entities extracted with context (e.g., "Product Code LNX", "ISO 10993").
Follow-ups: Exactly 20 strategic questions exploring clinical and technical edge cases.
Highlighting: Keywords are wrapped in <span style="color:#FF7F50; font-weight:bold"> to ensure critical terms pop in the "Sleek Interface" theme.
9. Security & Governance
API Injection: API keys (Gemini API) are never hardcoded and are managed via environment secrets (process.env.GEMINI_API_KEY).
Abort Logic: The implementation uses AbortController. If a user stops a generation, the fetch request is cancelled, ensuring that no further processing or potential "infinite generation" loops occur.
Privacy: All PDF processing (trimming) occurs entirely in the client-side browser logic using pdf-lib, ensuring sensitive regulatory binaries aren't sent to intermediate third-party servers for manipulation.
20 Comprehensive Follow-Up Questions (Technical & Strategy)
PDF-Lib Scaling: How does the performance of pdf-lib change when processing a 1,000-page dossier? Is there a memory threshold where the UI might freeze?
YAML vs. MD Conflict: If both agents.yaml and skill.md contain conflicting instructions (e.g., different output lengths), which logic source does the Sentinel prioritize by default?
AbortSignal Lifecycle: When the "STOP SCAN" is clicked, does the Gemini API instantly stop billing for tokens, or does it finish the current chunk generation?
Pantone Customization: Can a user define a custom hex code for their own branding, or are they restricted to the 10 provided Pantone-themed palettes?
Recharts Integration: Does the "Coverage Metric" pie chart support dynamic data ingestion from the LLM, or is the 75% met/25% remaining data purely illustrative for the current build?
Markdown Rendering: The App.tsx uses dangerouslySetInnerHTML. What sanitization is in place to prevent a malicious agents.yaml source from injecting XSS into the report workspace?
Skill Creator Logic: What "WOW" features does the AI prioritize when requested to enrich a skill.md—is it based on regulatory depth or technical formatting?
Persistent Prompts: How does the "Context Persistence" checkbox (Keeping prompt on previous summary) influence the contents array sent to the Gemini API—is it using chat history or prompt concatenation?
Note Keeper Capacity: What is the character limit for the "AI Note Keeper" before the token context window of the selected model (e.g., Flash vs Pro) begins to overflow?
Localization Depth: Does the Traditional Chinese output include localized medical terminology specific to the Taiwan FDA (TFDA) or purely general Chinese technical terms?
Matrix Rain Performance: Does the canvas-based visualization utilize requestAnimationFrame for battery efficiency, or is it a hard setInterval loop?
Wait State Management: During a "Holographic Scan," is the scan speed constant, or does it vary based on the actual streaming speed of the LLM response?
Magic Button Architecture: Are the 6 AI Magic buttons individually hardcoded agents, or do they share a common "Expert Persona" with different task specific prompts?
PDF Metadata Preservation: When trimming pages, does the system preserve the original document's properties (Author, Title, Security) or create a fresh clean slate document?
Responsive Grid Behavior: How does the 12-column layout adapt for RA professionals working on tablets or smaller precision screens during clinical site visits?
Token Monitoring: Can the "Token Usage" metric in the dashboard be linked to the actual response headers from the Gemini API for live tracking?
Standardized YAML Schema: If a user uploads a YAML that is missing the backstory field, how does the "YAML Standardizer" infer a logical RA-expert backstory?
Download BLOB Handling: Does the system clear the URL.createObjectURL immediately after download to prevent memory leaks in long-running sessions?
Prompt Engineering: Why was the word count targeted specifically at 3,000–4,000 words? Is this based on a typical 510(k) Summary length or LLM response limits?
Visual Fallback: If a user’s browser doesn't support the "neural pulse" CSS animation, does the interface gracefully degrade to a static technical highlight?
