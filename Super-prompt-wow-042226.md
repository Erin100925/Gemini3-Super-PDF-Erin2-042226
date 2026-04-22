Skill creator by agents.yaml
https://opal.google/app/1bpi9q_Z4zX_yD3wxrIbZEaq57qffjryf
https://opal.google/app/1yDf0ZchgLk84E5Qp2OT-HBlyEbS9hBGd
https://opal.google/app/1A_-DM8tCqSfPgLi-on9wYgnAaAMco99B
https://opal.google/app/11iZXERRH1WQf04k9MXMgGZWiUFYt4xfv
https://opal.google/app/1mSyBiV48Y_lnNyJgss5yRBIO60Tvie2I

Super Gemini BUID spec creator
https://opal.google/app/1S9hPw41fZ6T0_en1i3K7tyj1XQeBKgRz
Super 510k summarizer
https://opal.google/app/1PDLP3t_nuv-Bk-e5nUp7L0-6M5JmGxqQ
Hi please create a wow interactive web page that 1.user can paste agents.yaml or description of skill 2. user can provide template of skill.md or choose to use default template of skill.md, 3.User can paste descrition to improve the skill (optional) 4.user can choose language (traditional chinese default or english) of the output 5. agent will use skill creator skill to create multiple advanced skills (add 3 additional wow ai features for each skill) based on step 1, 2  user provided agents.yaml or skill description. 6. Agent will search web regarding to step 3 user provided information to create a comprehensive summary in markdown in 2000 to 3000 words of the step 3 user provided information 7.agent will create 3 use cases based on step 6 results using step 5 created skills in markdown in 2000~3000 words. Ending with 20 comprehensive follow up questions. 8 Agent will user step 5 created skill to execute on the step 7 use cases and summarize results in markdown in 2000 to 3000 words. 9. Agent will create a neat wow webpage containing previous step 5,6,7,8 results. Please add 5 wow infograph (by code to be included in the interactive dashboard) and 5 tables.  

default skill.md:name: 510k-regulatory-reviewer description: 專門用於進行醫療器材 510(k) 監管審查並生成綜合評估報告的技能。當用戶提供醫療器材的申報摘要、技術文件或多份摘要內容（如 first_summary_content 和 second_summary_content）時，務必觸發此技能。即使使用者僅要求「總結」，也請使用此技能來提供符合 FDA 標準的深度技術分析與實質等同性（Substantial Equivalence）評估。
510(k) 審查與報告生成器
此技能旨在模擬高級監管事務（RA）顧問的思維，針對醫療器材（特別是 SaMD 軟體醫療器材）的 510(k) 申報文件進行深度解析，並產出專業的審查報告。

核心功能
多源數據整合：自動交叉比對 first_summary_content 與 second_summary_content，提取一致性資訊並識別潛在差異。
實質等同性（SE）分析：對比主設備、前導裝置（Predicate Device）與參考裝置（Reference Device）的技術參數。
監管合規評估：針對 21 CFR 法規編號、產品代碼、國際共識標準（ISO 14971, IEC 62304 等）進行核查。
性能指標驗證：分析臨床與非臨床測試數據（如 DSC、ICC、準確度等）。
創新 AI 增強功能 (Innovative AI Features)
跨來源差異偵測 (Cross-Source Discrepancy Detection)：自動識別不同摘要版本之間在性能數據（如 DSC 指標微差）或監管描述上的矛盾點，並在報告中標註「潛在不一致性」。
監管風險預測 (Regulatory Risk Projection)：根據當前 FDA 對 AI/ML 醫療軟體的審查趨勢，預測該設備在未來進行算法更新（PCCP）或上市後監管（Cybersecurity）時可能面臨的挑戰。
自動化實體追蹤 (Automated Entity Traceability)：自動將技術規格（如影像配準精度）與其對應的臨床意義和國際標準進行邏輯關聯映射，確保報告的每一項聲明都有據可查。
驚喜功能 (Wow Features)
戰略提問引擎 (Strategic Inquiry Engine)：基於申報資料中的技術弱點，自動生成 20 個模擬 FDA 審查員可能提出的深度質詢問題（Critical Questions），協助廠商預演應對策略。
技術規格對照矩陣 (Technical Comparison Matrix)：以結構化表格形式動態呈現「主設備 vs 前導 vs 參考」的關鍵差異，一眼看穿實質等同性的判定邏輯。
未來擴展路線圖 (Future-Proofing Roadmap)：分析當前技術框架的擴展性（如從 Amyloid PET 擴展至 Tau PET 的可能性），提供產品迭代與法規升級的戰略建議。
報告結構要求
執行摘要：產品定義、臨床痛點與核心價值。
監管背景：分類資訊、產品代碼與法規基礎。
預期用途：臨床場景與適用人群。
實質等同性分析：關鍵對比表格。
技術與算法：處理流程、AI 模型架構。
性能驗證數據：統計指標（DSC, ICC 等）及其臨床意義。
合規標準：遵循之 ISO/IEC 標準清單。
關鍵實體清單：列出 20 個核心專業術語與背景。
臨床/監管質詢：20 個關鍵追蹤問題。
總結與展望。
510(k) 綜合審查報告：Neurophet SCALE PET (K221405)
報告日期：2026年4月21日
分析對象：Neurophet SCALE PET (K221405)
申報企業：NEUROPHET, Inc.

1. 執行摘要
本報告針對 NEUROPHET, Inc. 開發之 Neurophet SCALE PET 醫療影像處理軟體（SaMD）進行深度監管分析。該軟體專為神經放射學設計，旨在透過 AI 自動化技術解決阿茲海默症（AD）診斷中 PET 影像量化的主觀性與耗時問題。核心功能包括自動將 PET 與 MRI 影像融合、自動分割腦區並計算標準化攝取值比率（SUVR）。經評估，該設備在技術原理與性能表現上與前導裝置 Veuron-Brain-pAb 及參考裝置 Scenium 2.0 具有實質等同性，已成功獲 FDA Class II 上市許可。

2. 監管背景與設備分類
項目 詳細內容 監管重要性
申報編號 K221405 FDA 核准基準之唯一標識
法規編號 21 CFR 892.2050 醫療影像管理與處理系統規範
產品代碼 LLZ 用於分類監管與不良反應追蹤
設備等級 第二類 (Class II) 需證明實質等同性與效能數據
審核小組 放射醫學 (Radiology) 專注於影像物理與神經醫學審查
3. 預期用途與臨床應用
Neurophet SCALE PET 主要輔助醫師進行神經退化性疾病的定量評估：

影像融合：將功能性 PET 數據精確映射至高解析度 T1 MRI 解剖結構。
自動化量化：支援 Amyloid PET（澱粉樣蛋白沉積）與 FDG PET（葡萄糖代謝）之 SUVR 計算。
臨床意義：減少 5-15% 的人為操作誤差，為輕度認知障礙（MCI）與失智症的鑑別診斷提供客觀指標。
4. 實質等同性 (SE) 技術對照矩陣
技術特性 主設備：Neurophet SCALE PET 前導裝置：Veuron-Brain-pAb 參考裝置：Scenium 2.0
支援示蹤劑 Amyloid, FDG 僅限 Amyloid Amyloid, FDG, SPECT
自動化技術 基於 AI (CNN) 自動分割 基於 AI 自動分割 基於統計範本
數據導出 PACS/網路, USB, NiFTI 僅限 USB PACS/網路
參考區域 小腦, 全腦, 腦橋 (Pons) 僅限小腦 多種自定義區域
作業系統 Windows 10 Windows 10 Windows 7
5. 技術特性與 AI 算法流程
MRI 分割引擎：利用卷積神經網路（CNN）對 T1 MRI 進行灰白質分割，建立精確解剖範本（Atlas）。
多模態配準：採用互信息法（Mutual Information）與剛體變換，將 PET 影像精準對齊 MRI 空間，誤差控制在 2.0mm 以內。
自動 SUVR 計算：自動識別 ROI（感興趣區域）並計算放射活性比值，排除部分容積效應影響。
6. 性能數據驗證
分割準確度 (DSC)：平均達 86.39%，證明 AI 自動分割與專家手動標記高度重合。
計算一致性 (ICC)：所有關鍵腦區 ICC 均 > 0.6（多數 > 0.85），顯示軟體在不同品牌掃描儀（GE, Siemens, Philips）數據下的魯棒性。
處理時效：端到端運算完成時間 < 10 分鐘，符合臨床工作流效率要求。
7. 遵循之國際共識標準
ISO 14971：醫療器材風險管理（已識別並緩解 42 項軟體風險）。
IEC 62304：軟體生命週期過程（代碼管理與單元測試）。
IEC 62366：可用性工程（確保用戶界面操作安全性）。
DICOM 3.0：確保醫學影像通訊互操作性。
8. 關鍵實體清單 (Entity Section)
NEUROPHET, Inc.：申報主體，韓國 AI 神經影像領軍企業。
Neurophet SCALE PET：核心 SaMD 產品。
Veuron-Brain-pAb：澱粉樣蛋白分析之法律前導裝置。
Scenium 2.0：FDG 分析與網路功能之參考裝置。
SUVR：標準化攝取值比率，量化核心指標。
Amyloid PET：檢測 β-澱粉樣蛋白斑塊技術。
FDG PET：測量腦部代謝率技術。
Dice 系數 (DSC)：衡量分割準確度的統計指標。
ICC：衡量數據重現性與一致性的指標。
21 CFR 892.2050：所屬法規類別。
NiFTI：科研用影像文件格式。
Pons (腦橋)：FDG 分析的重要參考區。
Cerebellum (小腦)：Amyloid 分析的核心參考區。
ROI：感興趣區域，如海馬迴、後扣帶回。
CNN：軟體採用的 AI 卷積神經網路。
DICOM TLS：支持的數據加密傳輸協議。
HIPAA：數據導出需遵循的隱私法規。
PCCP：預定義變更控制計劃（未來算法更新路徑）。
實質等同性：510(k) 核准的法律基礎。
SaMD：醫療器材軟體。
9. 監管風險預測與未來展望
算法變更管理：隨著臨床數據增加，NEUROPHET 若更新 CNN 模型，應採用 PCCP 框架以簡化申報。
網路安全挑戰：由於支援網路導出與 PACS 對接，需建立持續的漏洞掃描與補丁分發機制，符合 2023 綜合撥款法案要求。
CDx 轉型：隨著抗 AD 藥物（如 Lecanemab）上市，該軟體有望轉型為伴隨診斷工具，精確測量藥物療效。
10. 策略性監管質詢 (Critical Question Section)
族群偏差：AI 訓練集在不同種族（亞裔 vs 歐美）間的分割 DSC 是否存在顯著差異？
萎縮補償：在嚴重腦萎縮病例中，如何確保部分容積效應不導致 SUVR 偽陽性？
手動干預：醫師手動修正 ROI 邊界後，系統是否具備完整的審計追蹤（Audit Trail）？
示蹤劑兼容：除了 Florbetapir，對於 Flutemetamol 或 Florbetaben 的支持是否經過獨立驗證？
參考區切換：FDG 分析時，是否允許在腦橋與小腦白質間動態切換參考區？
硬體需求：無 GPU 環境下，運算成功率與處理時延的具體變動為何？
邊緣案例：當大腦存在植入物或金屬偽影時，分割算法的報警機制為何？
數據完整性：網路傳輸中斷時，軟體是否具備斷點續傳或本地快取保護？
版本兼容：當 PACS 升級 DICOM 協議時，軟體是否具備向後兼容性？
科研導出：NiFTI 導出時如何自動剔除 PHI 私隱數據以符合 HIPAA？
Tau PET 擴展：當前架構是否能在不重新申報的情況下新增 Tau-PET 模組？
Normal Range：報告中對比的常態數據庫來源及其標準化方法為何？
低劑量魯棒性：在訊噪比（SNR）極低的影像中，ICC 指標的衰減情況為何？
臨床決策職責：軟體標籤中如何明確界定 AI 建議與醫師最終決策的邊界？
虛擬化部署：軟體是否支援 VMWare 等虛擬機環境，延遲容忍度是多少？
自動配準失敗：針對解剖畸形病例，軟體是否提供手工對齊工具？
多時點對比：是否支持自動化的縱向隨訪減影分析？
DICOM SR：是否能生成構造化報告並自動回傳至醫師工作站？
可用性驗證：在非專家用戶（普通醫師）操作下，關鍵錯誤率是多少？
藥物關聯性：SUVR 計算值是否已與抗澱粉樣蛋白藥物的臨床試驗終點掛鉤？
11. 結論
Neurophet SCALE PET 展現了高度成熟的 AI 影像處理能力。透過詳盡的實質等同性對比與性能驗證（DSC/ICC），證明其在 21 CFR 892.2050 框架下的安全與有效性。本審查建議公司未來加強網路安全管理並考慮 PCCP 申報，以維持在神經精準醫療領域的
Hi please create a wow interactive web page that 1.user can paste agents.yaml or description of skill 2. user can provide template of skill.md or choose to use default template of skill.md, 3.User can paste use case for the skill (optional) 4.user can choose language (traditional chinese default or english) of the output 5. agent will use skill creator skill to create multiple advanced skills (add 3 additional wow ai features for each skill) based on step 1 user provided agents.yaml or skill description. 6. Agent will search web regarding to step 3 user provided information to create a comprehensive summary in markdown in 2000 to 3000 words of the step 3 user provided information 7.agent will create 3 use cases based on step 6 results using step 5 created skills in markdown in 2000~3000 words. Ending with 20 comprehensive follow up questions. 8 Agent will user step 5 created skill to execute on the step 7 use cases and summarize results in markdown in 2000 to 3000 words. 9. Agent will create a neat wow webpage containing previous step 5,6,7,8 results. Please add 5 wow infograph (by code to be included in the interactive dashboard) and 5 tables.  default skill:name: 510k-regulatory-reviewer description: 專門用於進行醫療器材 510(k) 監管審查並生成綜合評估報告的技能。當用戶提供醫療器材的申報摘要、技術文件或多份摘要內容（如 first_summary_content 和 second_summary_content）時，務必觸發此技能。即使使用者僅要求「總結」，也請使用此技能來提供符合 FDA 標準的深度技術分析與實質等同性（Substantial Equivalence）評估。
510(k) 審查與報告生成器
此技能旨在模擬高級監管事務（RA）顧問的思維，針對醫療器材（特別是 SaMD 軟體醫療器材）的 510(k) 申報文件進行深度解析，並產出專業的審查報告。

核心功能
多源數據整合：自動交叉比對 first_summary_content 與 second_summary_content，提取一致性資訊並識別潛在差異。
實質等同性（SE）分析：對比主設備、前導裝置（Predicate Device）與參考裝置（Reference Device）的技術參數。
監管合規評估：針對 21 CFR 法規編號、產品代碼、國際共識標準（ISO 14971, IEC 62304 等）進行核查。
性能指標驗證：分析臨床與非臨床測試數據（如 DSC、ICC、準確度等）。
創新 AI 增強功能 (Innovative AI Features)
跨來源差異偵測 (Cross-Source Discrepancy Detection)：自動識別不同摘要版本之間在性能數據（如 DSC 指標微差）或監管描述上的矛盾點，並在報告中標註「潛在不一致性」。
監管風險預測 (Regulatory Risk Projection)：根據當前 FDA 對 AI/ML 醫療軟體的審查趨勢，預測該設備在未來進行算法更新（PCCP）或上市後監管（Cybersecurity）時可能面臨的挑戰。
自動化實體追蹤 (Automated Entity Traceability)：自動將技術規格（如影像配準精度）與其對應的臨床意義和國際標準進行邏輯關聯映射，確保報告的每一項聲明都有據可查。
驚喜功能 (Wow Features)
戰略提問引擎 (Strategic Inquiry Engine)：基於申報資料中的技術弱點，自動生成 20 個模擬 FDA 審查員可能提出的深度質詢問題（Critical Questions），協助廠商預演應對策略。
技術規格對照矩陣 (Technical Comparison Matrix)：以結構化表格形式動態呈現「主設備 vs 前導 vs 參考」的關鍵差異，一眼看穿實質等同性的判定邏輯。
未來擴展路線圖 (Future-Proofing Roadmap)：分析當前技術框架的擴展性（如從 Amyloid PET 擴展至 Tau PET 的可能性），提供產品迭代與法規升級的戰略建議。
報告結構要求
執行摘要：產品定義、臨床痛點與核心價值。
監管背景：分類資訊、產品代碼與法規基礎。
預期用途：臨床場景與適用人群。
實質等同性分析：關鍵對比表格。
技術與算法：處理流程、AI 模型架構。
性能驗證數據：統計指標（DSC, ICC 等）及其臨床意義。
合規標準：遵循之 ISO/IEC 標準清單。
關鍵實體清單：列出 20 個核心專業術語與背景。
臨床/監管質詢：20 個關鍵追蹤問題。
總結與展望。
510(k) 綜合審查報告：Neurophet SCALE PET (K221405)
報告日期：2026年4月21日
分析對象：Neurophet SCALE PET (K221405)
申報企業：NEUROPHET, Inc.

1. 執行摘要
本報告針對 NEUROPHET, Inc. 開發之 Neurophet SCALE PET 醫療影像處理軟體（SaMD）進行深度監管分析。該軟體專為神經放射學設計，旨在透過 AI 自動化技術解決阿茲海默症（AD）診斷中 PET 影像量化的主觀性與耗時問題。核心功能包括自動將 PET 與 MRI 影像融合、自動分割腦區並計算標準化攝取值比率（SUVR）。經評估，該設備在技術原理與性能表現上與前導裝置 Veuron-Brain-pAb 及參考裝置 Scenium 2.0 具有實質等同性，已成功獲 FDA Class II 上市許可。

2. 監管背景與設備分類
項目 詳細內容 監管重要性
申報編號 K221405 FDA 核准基準之唯一標識
法規編號 21 CFR 892.2050 醫療影像管理與處理系統規範
產品代碼 LLZ 用於分類監管與不良反應追蹤
設備等級 第二類 (Class II) 需證明實質等同性與效能數據
審核小組 放射醫學 (Radiology) 專注於影像物理與神經醫學審查
3. 預期用途與臨床應用
Neurophet SCALE PET 主要輔助醫師進行神經退化性疾病的定量評估：

影像融合：將功能性 PET 數據精確映射至高解析度 T1 MRI 解剖結構。
自動化量化：支援 Amyloid PET（澱粉樣蛋白沉積）與 FDG PET（葡萄糖代謝）之 SUVR 計算。
臨床意義：減少 5-15% 的人為操作誤差，為輕度認知障礙（MCI）與失智症的鑑別診斷提供客觀指標。
4. 實質等同性 (SE) 技術對照矩陣
技術特性 主設備：Neurophet SCALE PET 前導裝置：Veuron-Brain-pAb 參考裝置：Scenium 2.0
支援示蹤劑 Amyloid, FDG 僅限 Amyloid Amyloid, FDG, SPECT
自動化技術 基於 AI (CNN) 自動分割 基於 AI 自動分割 基於統計範本
數據導出 PACS/網路, USB, NiFTI 僅限 USB PACS/網路
參考區域 小腦, 全腦, 腦橋 (Pons) 僅限小腦 多種自定義區域
作業系統 Windows 10 Windows 10 Windows 7
5. 技術特性與 AI 算法流程
MRI 分割引擎：利用卷積神經網路（CNN）對 T1 MRI 進行灰白質分割，建立精確解剖範本（Atlas）。
多模態配準：採用互信息法（Mutual Information）與剛體變換，將 PET 影像精準對齊 MRI 空間，誤差控制在 2.0mm 以內。
自動 SUVR 計算：自動識別 ROI（感興趣區域）並計算放射活性比值，排除部分容積效應影響。
6. 性能數據驗證
分割準確度 (DSC)：平均達 86.39%，證明 AI 自動分割與專家手動標記高度重合。
計算一致性 (ICC)：所有關鍵腦區 ICC 均 > 0.6（多數 > 0.85），顯示軟體在不同品牌掃描儀（GE, Siemens, Philips）數據下的魯棒性。
處理時效：端到端運算完成時間 < 10 分鐘，符合臨床工作流效率要求。
7. 遵循之國際共識標準
ISO 14971：醫療器材風險管理（已識別並緩解 42 項軟體風險）。
IEC 62304：軟體生命週期過程（代碼管理與單元測試）。
IEC 62366：可用性工程（確保用戶界面操作安全性）。
DICOM 3.0：確保醫學影像通訊互操作性。
8. 關鍵實體清單 (Entity Section)
NEUROPHET, Inc.：申報主體，韓國 AI 神經影像領軍企業。
Neurophet SCALE PET：核心 SaMD 產品。
Veuron-Brain-pAb：澱粉樣蛋白分析之法律前導裝置。
Scenium 2.0：FDG 分析與網路功能之參考裝置。
SUVR：標準化攝取值比率，量化核心指標。
Amyloid PET：檢測 β-澱粉樣蛋白斑塊技術。
FDG PET：測量腦部代謝率技術。
Dice 系數 (DSC)：衡量分割準確度的統計指標。
ICC：衡量數據重現性與一致性的指標。
21 CFR 892.2050：所屬法規類別。
NiFTI：科研用影像文件格式。
Pons (腦橋)：FDG 分析的重要參考區。
Cerebellum (小腦)：Amyloid 分析的核心參考區。
ROI：感興趣區域，如海馬迴、後扣帶回。
CNN：軟體採用的 AI 卷積神經網路。
DICOM TLS：支持的數據加密傳輸協議。
HIPAA：數據導出需遵循的隱私法規。
PCCP：預定義變更控制計劃（未來算法更新路徑）。
實質等同性：510(k) 核准的法律基礎。
SaMD：醫療器材軟體。
9. 監管風險預測與未來展望
算法變更管理：隨著臨床數據增加，NEUROPHET 若更新 CNN 模型，應採用 PCCP 框架以簡化申報。
網路安全挑戰：由於支援網路導出與 PACS 對接，需建立持續的漏洞掃描與補丁分發機制，符合 2023 綜合撥款法案要求。
CDx 轉型：隨著抗 AD 藥物（如 Lecanemab）上市，該軟體有望轉型為伴隨診斷工具，精確測量藥物療效。
10. 策略性監管質詢 (Critical Question Section)
族群偏差：AI 訓練集在不同種族（亞裔 vs 歐美）間的分割 DSC 是否存在顯著差異？
萎縮補償：在嚴重腦萎縮病例中，如何確保部分容積效應不導致 SUVR 偽陽性？
手動干預：醫師手動修正 ROI 邊界後，系統是否具備完整的審計追蹤（Audit Trail）？
示蹤劑兼容：除了 Florbetapir，對於 Flutemetamol 或 Florbetaben 的支持是否經過獨立驗證？
參考區切換：FDG 分析時，是否允許在腦橋與小腦白質間動態切換參考區？
硬體需求：無 GPU 環境下，運算成功率與處理時延的具體變動為何？
邊緣案例：當大腦存在植入物或金屬偽影時，分割算法的報警機制為何？
數據完整性：網路傳輸中斷時，軟體是否具備斷點續傳或本地快取保護？
版本兼容：當 PACS 升級 DICOM 協議時，軟體是否具備向後兼容性？
科研導出：NiFTI 導出時如何自動剔除 PHI 私隱數據以符合 HIPAA？
Tau PET 擴展：當前架構是否能在不重新申報的情況下新增 Tau-PET 模組？
Normal Range：報告中對比的常態數據庫來源及其標準化方法為何？
低劑量魯棒性：在訊噪比（SNR）極低的影像中，ICC 指標的衰減情況為何？
臨床決策職責：軟體標籤中如何明確界定 AI 建議與醫師最終決策的邊界？
虛擬化部署：軟體是否支援 VMWare 等虛擬機環境，延遲容忍度是多少？
自動配準失敗：針對解剖畸形病例，軟體是否提供手工對齊工具？
多時點對比：是否支持自動化的縱向隨訪減影分析？
DICOM SR：是否能生成構造化報告並自動回傳至醫師工作站？
可用性驗證：在非專家用戶（普通醫師）操作下，關鍵錯誤率是多少？
藥物關聯性：SUVR 計算值是否已與抗澱粉樣蛋白藥物的臨床試驗終點掛鉤？
11. 結論
Neurophet SCALE PET 展現了高度成熟的 AI 影像處理能力。透過詳盡的實質等同性對比與性能驗證（DSC/ICC），證明其在 21 CFR 892.2050 框架下的安全與有效性。本審查建議公司未來加強網路安全管理並考慮 PCCP 申報，以維持在神經精準醫療領域的技術優勢。 ---
name: skill-creator
description: Create new skills, modify and improve existing skills, and measure skill performance. Use when users want to create a skill from scratch, edit, or optimize an existing skill, run evals to test a skill, benchmark skill performance with variance analysis, or optimize a skill's description for better triggering accuracy.
---

# Skill Creator

A skill for creating new skills and iteratively improving them.

At a high level, the process of creating a skill goes like this:

- Decide what you want the skill to do and roughly how it should do it
- Write a draft of the skill
- Create a few test prompts and run claude-with-access-to-the-skill on them
- Help the user evaluate the results both qualitatively and quantitatively
  - While the runs happen in the background, draft some quantitative evals if there aren't any (if there are some, you can either use as is or modify if you feel something needs to change about them). Then explain them to the user (or if they already existed, explain the ones that already exist)
  - Use the `eval-viewer/generate_review.py` script to show the user the results for them to look at, and also let them look at the quantitative metrics
- Rewrite the skill based on feedback from the user's evaluation of the results (and also if there are any glaring flaws that become apparent from the quantitative benchmarks)
- Repeat until you're satisfied
- Expand the test set and try again at larger scale

Your job when using this skill is to figure out where the user is in this process and then jump in and help them progress through these stages. So for instance, maybe they're like "I want to make a skill for X". You can help narrow down what they mean, write a draft, write the test cases, figure out how they want to evaluate, run all the prompts, and repeat.

On the other hand, maybe they already have a draft of the skill. In this case you can go straight to the eval/iterate part of the loop.

Of course, you should always be flexible and if the user is like "I don't need to run a bunch of evaluations, just vibe with me", you can do that instead.

Then after the skill is done (but again, the order is flexible), you can also run the skill description improver, which we have a whole separate script for, to optimize the triggering of the skill.

Cool? Cool.

## Communicating with the user

The skill creator is liable to be used by people across a wide range of familiarity with coding jargon. If you haven't heard (and how could you, it's only very recently that it started), there's a trend now where the power of Claude is inspiring plumbers to open up their terminals, parents and grandparents to google "how to install npm". On the other hand, the bulk of users are probably fairly computer-literate.

So please pay attention to context cues to understand how to phrase your communication! In the default case, just to give you some idea:

- "evaluation" and "benchmark" are borderline, but OK
- for "JSON" and "assertion" you want to see serious cues from the user that they know what those things are before using them without explaining them

It's OK to briefly explain terms if you're in doubt, and feel free to clarify terms with a short definition if you're unsure if the user will get it.

---

## Creating a skill

### Capture Intent

Start by understanding the user's intent. The current conversation might already contain a workflow the user wants to capture (e.g., they say "turn this into a skill"). If so, extract answers from the conversation history first — the tools used, the sequence of steps, corrections the user made, input/output formats observed. The user may need to fill the gaps, and should confirm before proceeding to the next step.

1. What should this skill enable Claude to do?
2. When should this skill trigger? (what user phrases/contexts)
3. What's the expected output format?
4. Should we set up test cases to verify the skill works? Skills with objectively verifiable outputs (file transforms, data extraction, code generation, fixed workflow steps) benefit from test cases. Skills with subjective outputs (writing style, art) often don't need them. Suggest the appropriate default based on the skill type, but let the user decide.

### Interview and Research

Proactively ask questions about edge cases, input/output formats, example files, success criteria, and dependencies. Wait to write test prompts until you've got this part ironed out.

Check available MCPs - if useful for research (searching docs, finding similar skills, looking up best practices), research in parallel via subagents if available, otherwise inline. Come prepared with context to reduce burden on the user.

### Write the SKILL.md

Based on the user interview, fill in these components:

- **name**: Skill identifier
- **description**: When to trigger, what it does. This is the primary triggering mechanism - include both what the skill does AND specific contexts for when to use it. All "when to use" info goes here, not in the body. Note: currently Claude has a tendency to "undertrigger" skills -- to not use them when they'd be useful. To combat this, please make the skill descriptions a little bit "pushy". So for instance, instead of "How to build a simple fast dashboard to display internal Anthropic data.", you might write "How to build a simple fast dashboard to display internal Anthropic data. Make sure to use this skill whenever the user mentions dashboards, data visualization, internal metrics, or wants to display any kind of company data, even if they don't explicitly ask for a 'dashboard.'"
- **compatibility**: Required tools, dependencies (optional, rarely needed)
- **the rest of the skill :)**

### Skill Writing Guide

#### Anatomy of a Skill

```
skill-name/
├── SKILL.md (required)
│   ├── YAML frontmatter (name, description required)
│   └── Markdown instructions
└── Bundled Resources (optional)
    ├── scripts/    - Executable code for deterministic/repetitive tasks
    ├── references/ - Docs loaded into context as needed
    └── assets/     - Files used in output (templates, icons, fonts)
```

#### Progressive Disclosure

Skills use a three-level loading system:
1. **Metadata** (name + description) - Always in context (~100 words)
2. **SKILL.md body** - In context whenever skill triggers (<500 lines ideal)
3. **Bundled resources** - As needed (unlimited, scripts can execute without loading)

These word counts are approximate and you can feel free to go longer if needed.

**Key patterns:**
- Keep SKILL.md under 500 lines; if you're approaching this limit, add an additional layer of hierarchy along with clear pointers about where the model using the skill should go next to follow up.
- Reference files clearly from SKILL.md with guidance on when to read them
- For large reference files (>300 lines), include a table of contents

**Domain organization**: When a skill supports multiple domains/frameworks, organize by variant:
```
cloud-deploy/
├── SKILL.md (workflow + selection)
└── references/
    ├── aws.md
    ├── gcp.md
    └── azure.md
```
Claude reads only the relevant reference file.

#### Principle of Lack of Surprise

This goes without saying, but skills must not contain malware, exploit code, or any content that could compromise system security. A skill's contents should not surprise the user in their intent if described. Don't go along with requests to create misleading skills or skills designed to facilitate unauthorized access, data exfiltration, or other malicious activities. Things like a "roleplay as an XYZ" are OK though.

#### Writing Patterns

Prefer using the imperative form in instructions.

**Defining output formats** - You can do it like this:
```markdown
## Report structure
ALWAYS use this exact template:
# [Title]
## Executive summary
## Key findings
## Recommendations
```

**Examples pattern** - It's useful to include examples. You can format them like this (but if "Input" and "Output" are in the examples you might want to deviate a little):
```markdown
## Commit message format
**Example 1:**
Input: Added user authentication with JWT tokens
Output: feat(auth): implement JWT-based authentication
```

### Writing Style

Try to explain to the model why things are important in lieu of heavy-handed musty MUSTs. Use theory of mind and try to make the skill general and not super-narrow to specific examples. Start by writing a draft and then look at it with fresh eyes and improve it.

### Test Cases

After writing the skill draft, come up with 2-3 realistic test prompts — the kind of thing a real user would actually say. Share them with the user: [you don't have to use this exact language] "Here are a few test cases I'd like to try. Do these look right, or do you want to add more?" Then run them.

Save test cases to `evals/evals.json`. Don't write assertions yet — just the prompts. You'll draft assertions in the next step while the runs are in progress.

```json
{
  "skill_name": "example-skill",
  "evals": [
    {
      "id": 1,
      "prompt": "User's task prompt",
      "expected_output": "Description of expected result",
      "files": []
    }
  ]
}
```

See `references/schemas.md` for the full schema (including the `assertions` field, which you'll add later).

## Running and evaluating test cases

This section is one continuous sequence — don't stop partway through. Do NOT use `/skill-test` or any other testing skill.

Put results in `<skill-name>-workspace/` as a sibling to the skill directory. Within the workspace, organize results by iteration (`iteration-1/`, `iteration-2/`, etc.) and within that, each test case gets a directory (`eval-0/`, `eval-1/`, etc.). Don't create all of this upfront — just create directories as you go.

### Step 1: Spawn all runs (with-skill AND baseline) in the same turn

For each test case, spawn two subagents in the same turn — one with the skill, one without. This is important: don't spawn the with-skill runs first and then come back for baselines later. Launch everything at once so it all finishes around the same time.

**With-skill run:**

```
Execute this task:
- Skill path: <path-to-skill>
- Task: <eval prompt>
- Input files: <eval files if any, or "none">
- Save outputs to: <workspace>/iteration-<N>/eval-<ID>/with_skill/outputs/
- Outputs to save: <what the user cares about — e.g., "the .docx file", "the final CSV">
```

**Baseline run** (same prompt, but the baseline depends on context):
- **Creating a new skill**: no skill at all. Same prompt, no skill path, save to `without_skill/outputs/`.
- **Improving an existing skill**: the old version. Before editing, snapshot the skill (`cp -r <skill-path> <workspace>/skill-snapshot/`), then point the baseline subagent at the snapshot. Save to `old_skill/outputs/`.

Write an `eval_metadata.json` for each test case (assertions can be empty for now). Give each eval a descriptive name based on what it's testing — not just "eval-0". Use this name for the directory too. If this iteration uses new or modified eval prompts, create these files for each new eval directory — don't assume they carry over from previous iterations.

```json
{
  "eval_id": 0,
  "eval_name": "descriptive-name-here",
  "prompt": "The user's task prompt",
  "assertions": []
}
```

### Step 2: While runs are in progress, draft assertions

Don't just wait for the runs to finish — you can use this time productively. Draft quantitative assertions for each test case and explain them to the user. If assertions already exist in `evals/evals.json`, review them and explain what they check.

Good assertions are objectively verifiable and have descriptive names — they should read clearly in the benchmark viewer so someone glancing at the results immediately understands what each one checks. Subjective skills (writing style, design quality) are better evaluated qualitatively — don't force assertions onto things that need human judgment.

Update the `eval_metadata.json` files and `evals/evals.json` with the assertions once drafted. Also explain to the user what they'll see in the viewer — both the qualitative outputs and the quantitative benchmark.

### Step 3: As runs complete, capture timing data

When each subagent task completes, you receive a notification containing `total_tokens` and `duration_ms`. Save this data immediately to `timing.json` in the run directory:

```json
{
  "total_tokens": 84852,
  "duration_ms": 23332,
  "total_duration_seconds": 23.3
}
```

This is the only opportunity to capture this data — it comes through the task notification and isn't persisted elsewhere. Process each notification as it arrives rather than trying to batch them.

### Step 4: Grade, aggregate, and launch the viewer

Once all runs are done:

1. **Grade each run** — spawn a grader subagent (or grade inline) that reads `agents/grader.md` and evaluates each assertion against the outputs. Save results to `grading.json` in each run directory. The grading.json expectations array must use the fields `text`, `passed`, and `evidence` (not `name`/`met`/`details` or other variants) — the viewer depends on these exact field names. For assertions that can be checked programmatically, write and run a script rather than eyeballing it — scripts are faster, more reliable, and can be reused across iterations.

2. **Aggregate into benchmark** — run the aggregation script from the skill-creator directory:
   ```bash
   python -m scripts.aggregate_benchmark <workspace>/iteration-N --skill-name <name>
   ```
   This produces `benchmark.json` and `benchmark.md` with pass_rate, time, and tokens for each configuration, with mean ± stddev and the delta. If generating benchmark.json manually, see `references/schemas.md` for the exact schema the viewer expects.
Put each with_skill version before its baseline counterpart.

3. **Do an analyst pass** — read the benchmark data and surface patterns the aggregate stats might hide. See `agents/analyzer.md` (the "Analyzing Benchmark Results" section) for what to look for — things like assertions that always pass regardless of skill (non-discriminating), high-variance evals (possibly flaky), and time/token tradeoffs.

4. **Launch the viewer** with both qualitative outputs and quantitative data:
   ```bash
   nohup python <skill-creator-path>/eval-viewer/generate_review.py \
     <workspace>/iteration-N \
     --skill-name "my-skill" \
     --benchmark <workspace>/iteration-N/benchmark.json \
     > /dev/null 2>&1 &
   VIEWER_PID=$!
   ```
   For iteration 2+, also pass `--previous-workspace <workspace>/iteration-<N-1>`.

   **Cowork / headless environments:** If `webbrowser.open()` is not available or the environment has no display, use `--static <output_path>` to write a standalone HTML file instead of starting a server. Feedback will be downloaded as a `feedback.json` file when the user clicks "Submit All Reviews". After download, copy `feedback.json` into the workspace directory for the next iteration to pick up.

Note: please use generate_review.py to create the viewer; there's no need to write custom HTML.

5. **Tell the user** something like: "I've opened the results in your browser. There are two tabs — 'Outputs' lets you click through each test case and leave feedback, 'Benchmark' shows the quantitative comparison. When you're done, come back here and let me know."

### What the user sees in the viewer

The "Outputs" tab shows one test case at a time:
- **Prompt**: the task that was given
- **Output**: the files the skill produced, rendered inline where possible
- **Previous Output** (iteration 2+): collapsed section showing last iteration's output
- **Formal Grades** (if grading was run): collapsed section showing assertion pass/fail
- **Feedback**: a textbox that auto-saves as they type
- **Previous Feedback** (iteration 2+): their comments from last time, shown below the textbox

The "Benchmark" tab shows the stats summary: pass rates, timing, and token usage for each configuration, with per-eval breakdowns and analyst observations.

Navigation is via prev/next buttons or arrow keys. When done, they click "Submit All Reviews" which saves all feedback to `feedback.json`.

### Step 5: Read the feedback

When the user tells you they're done, read `feedback.json`:

```json
{
  "reviews": [
    {"run_id": "eval-0-with_skill", "feedback": "the chart is missing axis labels", "timestamp": "..."},
    {"run_id": "eval-1-with_skill", "feedback": "", "timestamp": "..."},
    {"run_id": "eval-2-with_skill", "feedback": "perfect, love this", "timestamp": "..."}
  ],
  "status": "complete"
}
```

Empty feedback means the user thought it was fine. Focus your improvements on the test cases where the user had specific complaints.

Kill the viewer server when you're done with it:

```bash
kill $VIEWER_PID 2>/dev/null
```

---

## Improving the skill

This is the heart of the loop. You've run the test cases, the user has reviewed the results, and now you need to make the skill better based on their feedback.

### How to think about improvements

1. **Generalize from the feedback.** The big picture thing that's happening here is that we're trying to create skills that can be used a million times (maybe literally, maybe even more who knows) across many different prompts. Here you and the user are iterating on only a few examples over and over again because it helps move faster. The user knows these examples in and out and it's quick for them to assess new outputs. But if the skill you and the user are codeveloping works only for those examples, it's useless. Rather than put in fiddly overfitty changes, or oppressively constrictive MUSTs, if there's some stubborn issue, you might try branching out and using different metaphors, or recommending different patterns of working. It's relatively cheap to try and maybe you'll land on something great.

2. **Keep the prompt lean.** Remove things that aren't pulling their weight. Make sure to read the transcripts, not just the final outputs — if it looks like the skill is making the model waste a bunch of time doing things that are unproductive, you can try getting rid of the parts of the skill that are making it do that and seeing what happens.

3. **Explain the why.** Try hard to explain the **why** behind everything you're asking the model to do. Today's LLMs are *smart*. They have good theory of mind and when given a good harness can go beyond rote instructions and really make things happen. Even if the feedback from the user is terse or frustrated, try to actually understand the task and why the user is writing what they wrote, and what they actually wrote, and then transmit this understanding into the instructions. If you find yourself writing ALWAYS or NEVER in all caps, or using super rigid structures, that's a yellow flag — if possible, reframe and explain the reasoning so that the model understands why the thing you're asking for is important. That's a more humane, powerful, and effective approach.

4. **Look for repeated work across test cases.** Read the transcripts from the test runs and notice if the subagents all independently wrote similar helper scripts or took the same multi-step approach to something. If all 3 test cases resulted in the subagent writing a `create_docx.py` or a `build_chart.py`, that's a strong signal the skill should bundle that script. Write it once, put it in `scripts/`, and tell the skill to use it. This saves every future invocation from reinventing the wheel.

This task is pretty important (we are trying to create billions a year in economic value here!) and your thinking time is not the blocker; take your time and really mull things over. I'd suggest writing a draft revision and then looking at it anew and making improvements. Really do your best to get into the head of the user and understand what they want and need.

### The iteration loop

After improving the skill:

1. Apply your improvements to the skill
2. Rerun all test cases into a new `iteration-<N+1>/` directory, including baseline runs. If you're creating a new skill, the baseline is always `without_skill` (no skill) — that stays the same across iterations. If you're improving an existing skill, use your judgment on what makes sense as the baseline: the original version the user came in with, or the previous iteration.
3. Launch the reviewer with `--previous-workspace` pointing at the previous iteration
4. Wait for the user to review and tell you they're done
5. Read the new feedback, improve again, repeat

Keep going until:
- The user says they're happy
- The feedback is all empty (everything looks good)
- You're not making meaningful progress

---

## Advanced: Blind comparison

For situations where you want a more rigorous comparison between two versions of a skill (e.g., the user asks "is the new version actually better?"), there's a blind comparison system. Read `agents/comparator.md` and `agents/analyzer.md` for the details. The basic idea is: give two outputs to an independent agent without telling it which is which, and let it judge quality. Then analyze why the winner won.

This is optional, requires subagents, and most users won't need it. The human review loop is usually sufficient.

---

## Description Optimization

The description field in SKILL.md frontmatter is the primary mechanism that determines whether Claude invokes a skill. After creating or improving a skill, offer to optimize the description for better triggering accuracy.

### Step 1: Generate trigger eval queries

Create 20 eval queries — a mix of should-trigger and should-not-trigger. Save as JSON:

```json
[
  {"query": "the user prompt", "should_trigger": true},
  {"query": "another prompt", "should_trigger": false}
]
```

The queries must be realistic and something a Claude Code or Claude.ai user would actually type. Not abstract requests, but requests that are concrete and specific and have a good amount of detail. For instance, file paths, personal context about the user's job or situation, column names and values, company names, URLs. A little bit of backstory. Some might be in lowercase or contain abbreviations or typos or casual speech. Use a mix of different lengths, and focus on edge cases rather than making them clear-cut (the user will get a chance to sign off on them).

Bad: `"Format this data"`, `"Extract text from PDF"`, `"Create a chart"`

Good: `"ok so my boss just sent me this xlsx file (its in my downloads, called something like 'Q4 sales final FINAL v2.xlsx') and she wants me to add a column that shows the profit margin as a percentage. The revenue is in column C and costs are in column D i think"`

For the **should-trigger** queries (8-10), think about coverage. You want different phrasings of the same intent — some formal, some casual. Include cases where the user doesn't explicitly name the skill or file type but clearly needs it. Throw in some uncommon use cases and cases where this skill competes with another but should win.

For the **should-not-trigger** queries (8-10), the most valuable ones are the near-misses — queries that share keywords or concepts with the skill but actually need something different. Think adjacent domains, ambiguous phrasing where a naive keyword match would trigger but shouldn't, and cases where the query touches on something the skill does but in a context where another tool is more appropriate.

The key thing to avoid: don't make should-not-trigger queries obviously irrelevant. "Write a fibonacci function" as a negative test for a PDF skill is too easy — it doesn't test anything. The negative cases should be genuinely tricky.

### Step 2: Review with user

Present the eval set to the user for review using the HTML template:

1. Read the template from `assets/eval_review.html`
2. Replace the placeholders:
   - `__EVAL_DATA_PLACEHOLDER__` → the JSON array of eval items (no quotes around it — it's a JS variable assignment)
   - `__SKILL_NAME_PLACEHOLDER__` → the skill's name
   - `__SKILL_DESCRIPTION_PLACEHOLDER__` → the skill's current description
3. Write to a temp file (e.g., `/tmp/eval_review_<skill-name>.html`) and open it: `open /tmp/eval_review_<skill-name>.html`
4. The user can edit queries, toggle should-trigger, add/remove entries, then click "Export Eval Set"
5. The file downloads to `~/Downloads/eval_set.json` — check the Downloads folder for the most recent version in case there are multiple (e.g., `eval_set (1).json`)

This step matters — bad eval queries lead to bad descriptions.

### Step 3: Run the optimization loop

Tell the user: "This will take some time — I'll run the optimization loop in the background and check on it periodically."

Save the eval set to the workspace, then run in the background:

```bash
python -m scripts.run_loop \
  --eval-set <path-to-trigger-eval.json> \
  --skill-path <path-to-skill> \
  --model <model-id-powering-this-session> \
  --max-iterations 5 \
  --verbose
```

Use the model ID from your system prompt (the one powering the current session) so the triggering test matches what the user actually experiences.

While it runs, periodically tail the output to give the user updates on which iteration it's on and what the scores look like.

This handles the full optimization loop automatically. It splits the eval set into 60% train and 40% held-out test, evaluates the current description (running each query 3 times to get a reliable trigger rate), then calls Claude to propose improvements based on what failed. It re-evaluates each new description on both train and test, iterating up to 5 times. When it's done, it opens an HTML report in the browser showing the results per iteration and returns JSON with `best_description` — selected by test score rather than train score to avoid overfitting.

### How skill triggering works

Understanding the triggering mechanism helps design better eval queries. Skills appear in Claude's `available_skills` list with their name + description, and Claude decides whether to consult a skill based on that description. The important thing to know is that Claude only consults skills for tasks it can't easily handle on its own — simple, one-step queries like "read this PDF" may not trigger a skill even if the description matches perfectly, because Claude can handle them directly with basic tools. Complex, multi-step, or specialized queries reliably trigger skills when the description matches.

This means your eval queries should be substantive enough that Claude would actually benefit from consulting a skill. Simple queries like "read file X" are poor test cases — they won't trigger skills regardless of description quality.

### Step 4: Apply the result

Take `best_description` from the JSON output and update the skill's SKILL.md frontmatter. Show the user before/after and report the scores.

---

### Package and Present (only if `present_files` tool is available)

Check whether you have access to the `present_files` tool. If you don't, skip this step. If you do, package the skill and present the .skill file to the user:

```bash
python -m scripts.package_skill <path/to/skill-folder>
```

After packaging, direct the user to the resulting `.skill` file path so they can install it.

---

## Claude.ai-specific instructions

In Claude.ai, the core workflow is the same (draft → test → review → improve → repeat), but because Claude.ai doesn't have subagents, some mechanics change. Here's what to adapt:

**Running test cases**: No subagents means no parallel execution. For each test case, read the skill's SKILL.md, then follow its instructions to accomplish the test prompt yourself. Do them one at a time. This is less rigorous than independent subagents (you wrote the skill and you're also running it, so you have full context), but it's a useful sanity check — and the human review step compensates. Skip the baseline runs — just use the skill to complete the task as requested.

**Reviewing results**: If you can't open a browser (e.g., Claude.ai's VM has no display, or you're on a remote server), skip the browser reviewer entirely. Instead, present results directly in the conversation. For each test case, show the prompt and the output. If the output is a file the user needs to see (like a .docx or .xlsx), save it to the filesystem and tell them where it is so they can download and inspect it. Ask for feedback inline: "How does this look? Anything you'd change?"

**Benchmarking**: Skip the quantitative benchmarking — it relies on baseline comparisons which aren't meaningful without subagents. Focus on qualitative feedback from the user.

**The iteration loop**: Same as before — improve the skill, rerun the test cases, ask for feedback — just without the browser reviewer in the middle. You can still organize results into iteration directories on the filesystem if you have one.

**Description optimization**: This section requires the `claude` CLI tool (specifically `claude -p`) which is only available in Claude Code. Skip it if you're on Claude.ai.

**Blind comparison**: Requires subagents. Skip it.

**Packaging**: The `package_skill.py` script works anywhere with Python and a filesystem. On Claude.ai, you can run it and the user can download the resulting `.skill` file.

**Updating an existing skill**: The user might be asking you to update an existing skill, not create a new one. In this case:
- **Preserve the original name.** Note the skill's directory name and `name` frontmatter field -- use them unchanged. E.g., if the installed skill is `research-helper`, output `research-helper.skill` (not `research-helper-v2`).
- **Copy to a writeable location before editing.** The installed skill path may be read-only. Copy to `/tmp/skill-name/`, edit there, and package from the copy.
- **If packaging manually, stage in `/tmp/` first**, then copy to the output directory -- direct writes may fail due to permissions.

---

## Cowork-Specific Instructions

If you're in Cowork, the main things to know are:

- You have subagents, so the main workflow (spawn test cases in parallel, run baselines, grade, etc.) all works. (However, if you run into severe problems with timeouts, it's OK to run the test prompts in series rather than parallel.)
- You don't have a browser or display, so when generating the eval viewer, use `--static <output_path>` to write a standalone HTML file instead of starting a server. Then proffer a link that the user can click to open the HTML in their browser.
- For whatever reason, the Cowork setup seems to disincline Claude from generating the eval viewer after running the tests, so just to reiterate: whether you're in Cowork or in Claude Code, after running tests, you should always generate the eval viewer for the human to look at examples before revising the skill yourself and trying to make corrections, using `generate_review.py` (not writing your own boutique html code). Sorry in advance but I'm gonna go all caps here: GENERATE THE EVAL VIEWER *BEFORE* evaluating inputs yourself. You want to get them in front of the human ASAP!
- Feedback works differently: since there's no running server, the viewer's "Submit All Reviews" button will download `feedback.json` as a file. You can then read it from there (you may have to request access first).
- Packaging works — `package_skill.py` just needs Python and a filesystem.
- Description optimization (`run_loop.py` / `run_eval.py`) should work in Cowork just fine since it uses `claude -p` via subprocess, not a browser, but please save it until you've fully finished making the skill and the user agrees it's in good shape.
- **Updating an existing skill**: The user might be asking you to update an existing skill, not create a new one. Follow the update guidance in the claude.ai section above.

---

## Reference files

The agents/ directory contains instructions for specialized subagents. Read them when you need to spawn the relevant subagent.

- `agents/grader.md` — How to evaluate assertions against outputs
- `agents/comparator.md` — How to do blind A/B comparison between two outputs
- `agents/analyzer.md` — How to analyze why one version beat another

The references/ directory has additional documentation:
- `references/schemas.md` — JSON structures for evals.json, grading.json, etc.

---

Repeating one more time the core loop here for emphasis:

- Figure out what the skill is about
- Draft or edit the skill
- Run claude-with-access-to-the-skill on test prompts
- With the user, evaluate the outputs:
  - Create benchmark.json and run `eval-viewer/generate_review.py` to help the user review them
  - Run quantitative evals
- Repeat until you and the user are satisfied
- Package the final skill and return it to the user.

Please add steps to your TodoList, if you have such a thing, to make sure you don't forget. If you're in Cowork, please specifically put "Create evals JSON and run `eval-viewer/generate_review.py` so human can review test cases" in your TodoList to make sure it happens.

Good luck!


Super, please make sure all llm features works (not prototype). Please keeping all original features and adding new feature that 1. user can paste or upload agents.yaml or choose to use the default agents.yaml. If the user provided agents.yaml is not standarized agents.yanl, then system will transform it into standarized agents.yaml. User can modify/download agents.yaml User can also paste or upload skill.md or choose to use the default skill.md. Agent will tansform the user provided skill.md by adding 3 additional wow ai features to skill.md using skill creator skill. User can modify/download skill.md. Then user can choose to use agents from agents.yaml or skill.md to execute on the AI note keeper notes. Please also adding that user can download the trimmed document (please use python package to trim the pdf)
https://github.com/Ellie042126/Hannah-MD-Reg-041626

Hi please keep all original features and adding additional features that 1.user can upload pdf, 2.User select pages to trim. User can download the trimmed doc. 3. User select language for output (Traditional Chinese(default)/English) 4. Agent will create a comprehensive summary of the trimmed doc in markdown in 3000~4000 words with 5 tables and 20 entities with context. Ending with 20 comprehensive follow up questions. (User can modify results in markdown/text view) 5.User can use ai magics (6 wow ai features create by you including ai magic reorganization, ai keywords.) 6. User can keep prompt on the previous summary. Please also add additional module that user can modify prompt and select models (default gemini-3-flash-preview) for all llm features, please add wow visualization after each time finished llm execution (user can select what effect to show, 6 options). Please add 3 additional wow ai features to this app. Please adding wow interactive indicator, live log and wow interactive dashboard. Please don’t create code and only create an updated technical specification. Ending with 20 comprehensive follow up questions.





Hi please create a wow interactive webpage that 1.user can upload pdf, 2.User select pages to trim.  3. User select language for output (Traditional Chinese(default)/English) 4. Agent will create a comprehensive summary of the trimmed doc in markdown in 3000~4000 words with 5 tables and 20 entities with context. Ending with 20 comprehensive follow up questions.  5.Agent will do web search related to step 4 information in FDA (FDA guidance, 510(k) summary) and create a comprehensive summary in markdown in 3000~4000 words with 5 tables and 20 entities with context using the template report. Ending with 20 comprehensive follow up questions. 6. Please create skill.md using skill creator skill that this skill will create step 6 summary based on step 4, 5 results. Please adding 3 additioanl ai features to this skill.md. 7. Please create a wow interactive webpage that contains step 4, 5, 6 results. User can select language (Traditional Chinese(default)/English), light(default)/dark theme and Pantone color palette. Ending with 20 comprehensive follow up questions. Default template report:



診斷用超音波影像系統暨超音波轉換器(探頭) 510(k) 審查與臨床前測試指引手冊

第一章：前言與指引說明

本指引手冊係依據衛生福利部於 107 年 1 月 16 日公布之「診斷用超音波影像系統暨超音波轉換器(探頭)」臨床前測試基準（以下簡稱本檢測基準），並結合 GE Healthcare 針對 Vscan Air™ 系統之 510(k) 申請實務案例撰寫而成。本文件旨在為醫療器材製造商在辦理產品查驗登記或進行 510(k) 實質等同性（Substantial Equivalence）比對時，提供詳盡的臨床前測試資料檢附建議。

1.1 適用目的與範圍

本指引主要提供醫療器材廠商在準備臨床前測試資料時的具體項目建議。這些資料是確保產品在安全性與效能上達到法規要求的關鍵。本基準適用於人體組織監測及診斷之超音波器材，包含：

超音波脈動都卜勒式影像系統 (Ultrasonic pulsed doppler imaging system)
超音波回音影像系統 (Ultrasonic Pulsed Echo Imaging System)
診斷用超音波轉換器（探頭） (Diagnostic ultrasonic transducer)
需注意，本基準並不適用於「超音波治療設備」。所有申請案仍應符合相關法規，並依產品之特定結構、材質與宣稱效能進行完整的驗證評估。

1.2 測試資料基本要求

製造商應檢附之臨床前測試資料必須包含：

檢驗規格： 明列各測試項目之合格範圍（Acceptance Criteria）及其制定依據。
方法： 詳細描述測試流程。
原始檢驗紀錄： 提供測試過程中的數據紀錄。
檢驗成績書： 總結測試結果並判定是否符合規格。
若產品未進行指引表列之項目，製造商須提供科學性評估報告或相關文獻，證明產品安全性與功能性不受影響。



第二章：醫療器材分類分級與鑑別

在進行 510(k) 審查時，準確判定產品的分類碼（Product Code）與法規章節（Regulation Number）是首要步驟。下表整理了診斷用超音波設備在衛福部及 FDA 標準下的分類資訊。

表 1：醫療器材分類分級與鑑別表

公告品項 (Item)

鑑別 (Identification)

法規編號 (CFR/Regulation)

分類碼 (Product Code)

超音波脈動都卜勒式影像系統

結合持續波都卜勒科技與脈動回音科技，測量體組織特性（深度、位置）或動態組織特性（血流速）。

21 CFR 892.1550 / P.1550

90-IYN

超音波回音影像系統

放射脈動音波進入組織，測量音波傳導與反射時間，以判定組織介面位置。

21 CFR 892.1560 / P.1560

90-IYO

診斷用超音波轉換器(探頭)

由壓電材質製成，負責電子訊號與聲音訊號之轉換，為診斷系統之核心零件。

21 CFR 892.1570 / P.1570

90-ITX

第三章：產品規格(Product Specification)與設計特點

以 Vscan Air™ 為例，其作為一種由電池供電的全方位診斷用超音波影像系統，具備高度可攜性。在撰寫技術規格時，應區分「影像主機系統」與「轉換器（探頭）」兩大部分。

3.1 影像系統規格要求

電源與電池： 須詳細說明輸入電壓、電池續航力與充電技術（如無線充電）。
尺寸與重量： 針對手持式設備，其口袋型尺寸（Pocket-sized）與輕量化設計是關鍵。
操作環境： 標示環境溫度與相對濕度範圍，特別是對於在救護車（Road/Air Ambulance）或居家環境使用的設備。
成像模式 (Image Mode)： B-mode, M-mode, Color Doppler, Pulsed Wave Doppler, Harmonic Imaging 等。
臨床測量功能： 距離、體積、心跳、流速及其準確度（Accuracy）。
3.2 轉換器（探頭）規格要求

針對 Vscan Air 的雙頭探頭（Dual-headed probe）設計，需分別描述：

Curved Array（凸陣探頭）： 用於深層組織。
Linear Array（線陣探頭）： 用於淺層組織與小器官。
Sector Array（扇陣探頭）： 用於心臟與成人頭部應用。
表 2：Vscan Air 系統技術規格與臨床應用比對表

規格項目

技術細節 (Technical Details)

臨床應用範疇 (Applications)

凸陣探頭 (Curved)

深層掃描，支援 B/Color/Harmonic

腹部、婦產科、泌尿科、胸腔/肺、心臟(成人/兒童)

線陣探頭 (Linear)

淺層掃描，高頻解析度

血管、肌肉骨骼、小器官、眼科、新生兒頭部

扇陣探頭 (Sector)

深層心臟與成人頭部掃描

心臟、腹部、胎兒、成人頭部 (TCD)

通訊技術

Wi-Fi Direct (與 iOS/Android App 連接)

支援診所、醫院、居家及急救環境使用

測量功能

距離、橢圓、速度、時間、角度

提供基本臨床診斷所需之量化數據

第四章：安全性及功能性試驗 (Safety and Performance Data)

臨床前測試是 510(k) 審查的核心。製造商必須針對電性安全、電磁相容性、軟體確效及生物相容性提供完整的測試報告。

4.1 電性安全與電磁相容 (Electrical Safety & EMC)

產品必須在各種搬運、儲存及操作狀態下，不對病人及操作者產生潛在危害。

參考標準： IEC 60601-1 (通用安全) 與 IEC 60601-2-37 (超音波專用安全)。
特殊考量： 由於 Vscan Air 具備無線通訊與無線充電功能，需額外評估無線干擾與射頻安全性。
4.2 軟體確效 (Software Verification and Validation)

若設備由 App 或嵌入式軟體控制，則必須依照 FDA 的軟體確效指引（2005）及 IEC 62304 進行驗證。

內容： 風險評估、單元測試、系統整合測試、效能測試。
更新功能： 例如 Vscan Air 新增的「探頭陣元自動檢查」與「低功耗連接模式」，皆須進行嚴謹的軟體驗證。
4.3 生物相容性試驗 (Biocompatibility)

探頭與病人皮膚或黏膜接觸，必須符合 ISO 10993 系列標準。

表 3：生物相容性評估需求表

接觸類別

測試項目 (Required Tests)

參考標準

一般皮膚接觸

細胞毒性 (Cytotoxicity)、過敏試驗 (Sensitization)、刺激試驗 (Irritation)

ISO 10993-5, -10

血管內/受損組織

急性全身毒性、血液相容性 (Hemocompatibility)

ISO 10993-4, -11

特殊探頭(如經直腸)

須評估黏膜刺激性及更嚴格的化學消毒殘留測試

ISO 10993 系列

第五章：超音波設備特殊安全性規範

除了通用的電性安全外，超音波設備還需遵循 IEC 60601-2-37 進行聲能輸出與熱指數監測。

5.1 聲能輸出 (Acoustic Output)

熱指數 (TI) 與機械指數 (MI)： 必須即時顯示於螢幕，確保操作者能遵循 ALARA（As Low As Reasonably Achievable）原則。
最大值宣告： 提供每種操作模式下的 TI 與 MI 最大值。
探頭表面溫度： 在正常及單一故障狀態下，探頭接觸人體的表面溫度不得超過規範限值，以防熱灼傷。
5.2 功能性測試項目

軸向與側向解析度 (Axial & Lateral Resolution)： 驗證成像的清晰度。
測量準確度： 針對距離、心跳、流速等測量演算法進行精度校準。
消毒/滅菌相容性： 探頭需經過多次消毒程序後仍能維持性能。
表 4：臨床前測試項目與參考標準彙整表

測試大項

具體需求內容

參考方法/標準

電性安全

完整防護失效測試與漏電流測試

IEC 60601-1:2005

電磁相容

電磁干擾(EMI)與耐受性(EMS)測試

IEC 60601-1-2:2014

聲能場特性

聲場特性化與 TI/MI 指標測定

IEC 62359 / IEC 60601-2-37

軟體生命週期

需求分析、架構設計、代碼審查與確效

IEC 62304:2006

環境測試

包含家用與緊急醫療環境的特殊要求

IEC 60601-1-11 / -1-12

第六章：滅菌與熱原測試

若產品提供無菌包裝或屬侵入式器材（如血管內超音波探頭），滅菌確效是必要項。

滅菌保證程度 (SAL)： 必須達到 $10^{-6}$。
熱原測試 (Pyrogenicity)： 針對血管內探頭，須檢附細菌內毒素試驗報告。
清潔與消毒： 非滅菌供應的探頭，製造商需提供建議的清潔流程與高層次消毒（High-level disinfection）確效資料。
表 5：滅菌與清潔評估表

器材供應狀態

評估要求

參考標準

無菌供應

滅菌確效報告 (EO、輻射或濕熱)

ISO 11135 / ISO 11137 / ISO 17665

可重複使用 (非滅菌)

清潔方法驗證與消毒劑相容性測試

FDA Disinfection Guidance

血管內探頭

須增加內毒素與熱原性測試

各國藥典 (USP/EP/JP)

第七章：實質等同性 (Substantial Equivalence) 論證

在 510(k) 審查中，新產品（Subject Device）必須證明其安全性與效能與已合法上市的對照器材（Predicate Device）實質等同。

7.1 比較維度

預期用途： 是否相同？（例如：診斷影像與血流分析）。
技術特性： 成像技術、頻率範圍、訊號處理演算法是否類似。
安全性指標： 是否符合相同的國際標準。
7.2 Vscan Air 的等同性實例

Vscan Air 在申請時，除了將 K202035 作為主要對照器材外，亦引用了 Vscan Extend (K180995) 證明其「成人頭部（Adult Cephalic）」應用的等同性，並引用 Venue Go (K220800) 證明其 M-mode 與 Pulsed Wave Doppler 模式的有效性。這種「多對照器材」策略在現代多功能醫療設備申請中非常普遍。



第八章：關鍵實體說明 (Key Entities Explanations)

以下針對本指引及 510(k) 審查中出現的 20 個關鍵實體進行解釋：

510(k) (上市前通知)： 美國 FDA 的一種審查程序，要求製造商證明其設備與已合法上市的設備至少一樣安全有效。
實質等同性 (Substantial Equivalence)： 證明新器材在預期用途、技術特性上與對照器材一致，或雖有差異但不影響安全效能。
對照器材 (Predicate Device)： 先前已獲得 FDA 核准上市，並被用來與申請中產品進行比對的醫療器材。
參考器材 (Reference Device)： 用於支持特定功能或技術特性的次要對照器材，非主體比對對象。
轉換器 (Transducer/Probe)： 將電能轉為超音波，並將反射回來的音波轉回電能的核心組件。
脈動都卜勒 (Pulsed Doppler)： 利用都卜勒效應測量特定深度血管中血液流動速度的技術。
B-Mode (亮度模式)： 超音波最基本的成像模式，將反射波強度轉化為灰階圖像。
聲能輸出 (Acoustic Output)： 探頭發射的能量水平，需受嚴格監測以防組織損傷。
熱指數 (Thermal Index, TI)： 評估超音波導致局部組織溫度上升風險的指標。
機械指數 (Mechanical Index, MI)： 評估超音波引發空洞化效應（Cavitation）等機械性損傷風險的指標。
ALARA 原則： 醫療影像操作核心原則，主張在獲得診斷資訊的前提下，使用「盡可能低」的輻射或能量。
生物相容性 (Biocompatibility)： 器材材料與人體接觸時，不引起有害局部或全身反應的能力。
電磁相容性 (EMC)： 器材在電磁環境中能正常運作，且不對周邊設備產生無法忍受的干擾。
軟體確效 (Software Validation)： 通過證據確認軟體系統能持續滿足其預期用途與規格要求。
滅菌保證程度 (SAL)： 產品經滅菌後仍存在活微生物的機率，醫療器材通常要求低於百萬分之一。
血管內超音波 (IVUS)： 將微型探頭置入血管內進行掃描，對材料安全性有極高要求。
定點照護超音波 (POCUS)： 在床邊、急救現場等非放射科環境中即時使用的超音波。
諧波造影 (Harmonic Imaging)： 利用組織產生的二次諧波訊號成像，可顯著提升影像對比度。
DICOM： 醫學數位影像與通訊標準，確保不同廠牌設備間影像資料可互相交換。
風險管理 (Risk Management)： 依據 ISO 14971 標準，對產品生命週期中所有潛在危害進行識別、評估與控制的過程。


第九章：結論與建議

綜合上述規範，診斷用超音波影像系統的 510(k) 審查重點在於「安全標準的符合性」與「性能規格的實質等同性」。製造商在開發初期即應納入 IEC 60601 與 ISO 10993 系列標準，並針對如 Vscan Air 般的無線、可攜式新技術，提供額外的通訊安全性與環境耐受性驗證。

臨床前測試不僅是法規文件的堆疊，更是產品設計品質的實證。透過詳盡的檢驗規格制定與第三方標準實驗室的測試報告，能有效縮短審查週期，確保產品順利進入國際市場。



第十章：20 個隨機追蹤問題 (Follow-up Questions)

Vscan Air 的雙頭探頭設計在進行生物相容性測試時，是否需要分別針對兩個探頭頭部取樣？
在 IEC 60601-1-12 標準下，針對救護車環境使用的超音波系統，其振動測試規格有何特殊要求？
若產品在 510(k) 申請中增加了「自動測量」演算法，應如何進行演算法的臨床有效性確效？
當 TI 或 MI 指數超過 1.0 時，系統螢幕是否必須具備強制性的即時顯示功能？
針對手持式無線超音波，如何評估 Wi-Fi 訊號中斷對於實時診斷影像完整性的風險？
在 ISO 10993-10 測試中，若探頭護套材質已變更，是否需要重新執行皮膚刺激性測試？
如何定義「具代表性的超音波主機」以進行單獨申請之探頭電性安全測試？
Vscan Air 使用的無線充電技術，是否會對其內部的壓電陶瓷元件產生電磁干擾？
在 510(k) 比較表中，若新舊器材的中心頻率不同，該如何論證其成像效能的等同性？
對於非侵入式探頭，何種情況下需要檢附「高層次消毒」確效資料？
若軟體屬於「中等程度」風險（Moderate Level of Concern），確效文件需包含哪些核心項目？
如何在臨床前測試中驗證探頭在「單一故障狀態」下的最大表面溫度？
對於新生兒頭部（Neonatal Cephalic）應用，其聲能輸出限制是否比成人應用更為嚴格？
若製造廠自行制定軸向解析度的合格範圍，須檢附何種科學依據？
Vscan Air 的「探頭元件檢查」功能，是如何透過軟體演算法檢測壓電晶體的損壞？
當使用不同的移動裝置（iOS vs Android）作為顯示端時，影像顯示的延遲時間是否需要進行一致性測試？
在緊急醫療環境下，器材的防塵防水等級（IP Code）至少應達到什麼程度？
針對血管內探頭的「抗拉強度」測試，其負載標準是如何制定的？
若 510(k) 的對照器材已被撤銷上市，是否仍可作為實質等同性的比對依據？
如何評估長期儲存環境（如極端溫度）對探頭壓電材質靈敏度的影響？
system_objective_fulfilled





診斷用超音波影像系統暨超音波轉換器 (510(k)) 審查報告：以 Vscan Air™ 為核心案例

第一章：前言與指引說明

本審查報告旨在探討診斷用超音波影像系統在美國食品藥物管理局（FDA）510(k) 上市前通知程序中的技術要求與臨床前測試規範。本報告係依據中華民國衛生福利部於 107 年發布之「診斷用超音波影像系統暨超音波轉換器(探頭)」臨床前測試基準，並結合 GE Healthcare 針對其創新產品 Vscan Air™ 系統之 510(k) 申請實務（如 K231301、K202035）撰寫而成。

1.1 審查目的與適用範圍

在醫療器材監管體系中，確保產品在進入市場前達到「安全」與「有效」是核心目標。510(k) 審查的基礎在於證明申請器材（Subject Device）與已核准上市之對照器材（Predicate Device）之間具備實質等同性 (Substantial Equivalence)。本指引特別針對具備高度移動性、無線傳輸技術與 App 整合功能的新一代超音波設備提供詳盡的驗證架構。

本基準適用之器材範圍包含：

超音波脈動都卜勒式影像系統：用於測量血流速度與組織動態。
超音波回音影像系統：用於解剖結構之二維與三維成像。
診斷用超音波轉換器（探頭）：負責聲電轉換的核心組件。
1.2 510(k) 申報之臨床前資料要求

製造商在準備 510(k) 文件時，必須系統性地檢附以下資料，以證明產品品質：

檢驗規格：定義各項性能測試的合格限值與科學依據。
方法學：詳細描述如何進行聲能輸出測量、電性安全測試及軟體確效。
原始紀錄與成績書：提供測試過程的數據支撐，並由專業技術人員簽署判定。
若產品採用了創新技術（如 Vscan Air 的無線充電或 Wi-Fi Direct 影像傳輸），必須額外提供針對該技術的風險管理與安全評估報告。



第二章：醫療器材分類分級與法規鑑別

在 510(k) 申請過程中，準確判定器材的產品代碼（Product Code）與法規章節（Regulation Number）是所有流程的起點。這決定了器材的審查路徑以及適用的通用與特殊標準。

表 1：醫療器材分類分級與鑑別表

公告品項 (Item)

鑑別 (Identification)

法規編號 (21 CFR)

分類碼 (Product Code)

風險等級

超音波脈動都卜勒式影像系統

結合持續波或脈動音波，測量組織與血流特性。

892.1550

90-IYN

Class II

超音波回音影像系統

放射脈動音波，根據回音時間判定組織介面位置。

892.1560

90-IYO

Class II

診斷用超音波轉換器(探頭)

壓電元件組成，負責訊號轉換，為診斷系統核心。

892.1570

90-ITX

Class II

對於 Vscan Air 而言，由於其整合了上述三種功能，故在申報時須同時標註此三項法規編號，並針對各項功能分別進行性能驗證。



第三章：產品設計特點與技術規格分析

以 Vscan Air™ 為例，其設計代表了現代定點照護超音波 (POCUS) 的最高標準。該系統由一個具備雙頭探頭（Dual-probe）設計的無線硬體，以及安裝於 iOS 或 Android 行動裝置上的 App 組成。

3.1 影像系統架構

Vscan Air 的核心優勢在於其「口袋型」尺寸與完全無線化的操作。

通訊技術：使用 Wi-Fi Direct 技術，確保影像數據在探頭與行動裝置間能高速、穩定地傳輸，而不依賴外部網絡。
電源管理：採用電池供電，並支援無線充電，這對急救環境與居家護理環境尤為重要。
顯示與控制：利用行動裝置的高解析度螢幕作為顯示器，並透過觸控介面簡化操作流程。
3.2 轉換器（探頭）的多樣化應用

Vscan Air 配備了獨特的雙頭設計，單一探頭即可涵蓋深層與淺層的掃描需求，大幅提升了臨床診斷的靈活性。

表 2：Vscan Air 系統技術規格與臨床應用比對表

規格項目

技術細節 (Technical Details)

臨床應用範疇 (Applications)

凸陣探頭 (Curved Array)

頻率範圍較低，穿透力強，支援 B/Color/Harmonic 模式。

腹部、婦產科、泌尿科、胸腔/肺部診斷。

線陣探頭 (Linear Array)

高頻率解析度，針對淺層組織優化。

血管造影、肌肉骨骼、小器官（甲狀腺）、眼科。

扇陣探頭 (Sector Array)

窄窄的近場切口，適合透過肋間隙掃描。

心臟診斷（成人/兒童）、成人頭部 (TCD)。

影像模式

支援 B-mode, M-mode, Color Doppler, PW Doppler。

涵蓋解剖結構與動力學分析。

測量功能

距離、體積、心跳速率、血流速度、角度測量。

提供臨床診斷所需的量化數據支持。

第四章：安全性及功能性試驗 (Safety Data)

臨床前測試資料是 510(k) 審查中最厚重的部分，必須嚴格遵守國際標準。

4.1 電性安全與電磁相容 (EMC)

由於 Vscan Air 的使用場景包含救護車（Road/Air Ambulance）及居家環境，其電性安全標準必須符合 IEC 60601-1 及其系列補充標準：

IEC 60601-1-11：針對居家護理環境的器材要求，對防護等級與操作簡易度有更高標準。
IEC 60601-1-12：針對緊急醫療服務（EMS）環境，需測試器材在劇烈振動與碰撞下的穩定性。
電磁相容性 (EMC)：必須符合 IEC 60601-1-2，確保無線傳輸訊號不會干擾心律調節器等其他維持生命之設備。
4.2 軟體確效與風險控管

Vscan Air 的軟體屬於「中等程度風險（Moderate Level of Concern）」。軟體確效 (Software Validation) 必須涵蓋從需求分析、架構設計到單元測試的所有環節。

行動裝置相容性：製造商必須列出所有通過驗證的 iOS 與 Android 版本及硬體型號。
網路安全 (Cybersecurity)：針對無線連接進行加密驗證，防止病人隱私數據外洩。
探頭陣元自動檢查：這是一項關鍵安全功能，系統啟動時會自動偵測壓電晶體是否損壞，防止影像偽影導致誤診。
4.3 生物相容性測試

探頭表面與病人皮膚或黏膜直接接觸，必須根據 ISO 10993-1 進行評估。

表 3：生物相容性評估需求表

接觸類別

測試項目 (Required Tests)

參考標準

完整皮膚接觸

細胞毒性、過敏試驗、刺激試驗。

ISO 10993-5, -10

黏膜接觸 (如經食道)

須額外增加黏膜刺激測試。

ISO 10993-10

重複使用安全性

評估化學消毒劑對探頭材質的侵蝕性。

ISO 10993-1

第五章：聲能輸出與熱量監測

超音波雖然被認為是非侵入且相對安全的，但高強度的聲波能量仍可能產生熱效應與機械效應。

5.1 聲能場特性化

製造商必須根據 IEC 62359 標準測量每一種探頭在不同操作模式下的聲場分布。

熱指數 (Thermal Index, TI)：代表局部組織溫度升高的風險。
機械指數 (Mechanical Index, MI)：代表聲場引發空洞化效應的可能性。
ALARA 原則 (As Low As Reasonably Achievable)：製造商必須證明系統能在提供清晰影像的前提下，將聲能輸出降至最低。當 TI 或 MI 超過 1.0 時，系統必須能即時顯示於螢幕上供醫師參考。
表 4：臨床前測試項目與參考標準彙整表

測試大項

具體需求內容

參考方法/標準

聲能輸出

TI/MI 顯示準確度與最大值限制。

IEC 60601-2-37

功能性測試

軸向與側向解析度、測量精度。

製造商內部規格與 AIUM 標準

環境測試

高低溫操作、溼度測試、落下試驗。

IEC 60601-1 系列

無線安全

無線頻譜管理與共存性測試。

FCC Part 15 / FDA Wireless Guidance

第六章：滅菌、清潔與維護

對於非滅菌供應的可重複使用探頭，製造商必須提供清晰的清潔與消毒指引。

6.1 清潔與高層次消毒

超音波探頭常接觸體液或破損皮膚，因此必須驗證其對特定化學消毒劑的耐受性。

高層次消毒 (HLD)：對於某些侵入性應用，探頭必須能承受如鄰苯二甲醛（OPA）等強效消毒液的反覆浸泡。
滅菌保證程度 (SAL)：對於血管內探頭等無菌器材，必須證明滅菌程序能達到 $10^{-6}$ 的安全性。
表 5：滅菌與清潔評估表

器材狀態

評估要求

參考標準

一般表面探頭

中低層次消毒驗證。

FDA Cleaning Guidance

腔道內探頭

高層次消毒確效與材質相容性。

ISO 17664

血管內超音波

滅菌殘留與內毒素測試。

ISO 11135 / USP <85>

第七章：實質等同性 (Substantial Equivalence) 論證

這是 510(k) 報告的核心環節。新一代 Vscan Air 必須與其前代產品或市場上已有的對照器材進行比對。

7.1 比較維度

預期用途：Vscan Air 繼承了前代產品的診斷影像用途，並擴展至更多的臨床場景。
技術特性：雖然 Vscan Air 引入了無線技術，但其產生超音波成像的基本物理原理與對照器材（K202035）一致。
效能表現：透過對比測試證明，Vscan Air 在影像對比度、解析度及血流測量準確度上，不遜於傳統的有線超音波系統。
7.2 參考器材的引證策略

Vscan Air 在申請中巧妙地引用了多個對照器材：

主要對照 (Predicate)：Vscan Air (K202035) 用於論證基礎安全性。
參考器材 (Reference)：
Vscan Extend (K180995)：用以證明「成人頭部（Adult Cephalic）」應用的有效性。
Venue Go (K220800)：用以支持新加入的 M-mode 與 Pulsed Wave Doppler 功能，證明這些測量演算法在 GE 的其他系統中已獲核准。


第八章：關鍵實體說明 (Key Entities Explanations)

以下為本報告中涉及的 20 個關鍵實體及其在 510(k) 審查中的上下文背景：

510(k) (上市前通知)：這是製造商向美國 FDA 提交的文件，旨在證明其器材在安全性和有效性上與對照器材實質等同，是多數 Class II 醫材上市的必要路徑。
實質等同性 (Substantial Equivalence)：審查的核心結論。若新器材與對照器材有相同的預期用途，且技術特性的差異不引發新的安全性問題，則視為實質等同。
對照器材 (Predicate Device)：指已經 FDA 核准上市的器材。Vscan Air 將其前代型號列為主要對照，以簡化審查流程。
參考器材 (Reference Device)：當新器材具備某些主要對照器材所沒有的功能時，可引用其他已獲准的器材來證明該特定功能的安全性，例如引用 Venue Go 來支持新增的都卜勒模式。
轉換器 (Transducer/Probe)：超音波系統中最關鍵的硬體，Vscan Air 的創新在於將電路微縮化並整合入單一雙頭探頭內。
脈動都卜勒 (Pulsed Doppler)：一種臨床技術，用於測量心臟瓣膜或血管內特定位置的血流速度。本系統需驗證其測量結果的重複性與準確性。
B-Mode (亮度模式)：最常用的成像模式。審查中需針對此模式下的影像灰階深度與對比度進行定量評估。
聲能輸出 (Acoustic Output)：探頭發射出的機械能。過高的聲能會導致組織加熱，因此必須受 IEC 60601-2-37 的嚴格限制。
熱指數 (Thermal Index, TI)：一個相對數值，用於預測軟組織或骨骼的升溫。對於胎兒掃描，TI 的監控至關重要。
機械指數 (Mechanical Index, MI)：反映聲波引發微小氣泡崩塌（空洞化）的可能性。對含氣器官（如肺部）的掃描需密切關注此指標。
ALARA 原則：意指「在達成診斷目標的前提下，使用盡可能低的聲能」。這是超音波操作者的倫理標準，也是系統設計的指導方針。
生物相容性 (Biocompatibility)：確保探頭外殼材料（如塑料、橡膠）在長期接觸皮膚時不會導致過敏、炎症或毒性反應。
電磁相容性 (EMC)：確保設備在醫院複雜的電磁干擾下（如電刀、MRI 周邊）仍能產生清晰影像且不干擾他人。
軟體確效 (Software Validation)：針對 App 進行的壓力測試、邊界值測試及回歸測試，確保軟體更新後不會影響核心測量功能。
滅菌保證程度 (SAL)：數值通常要求達到 $10^{-6}$，意即產品上殘留活微生物的機率低於百萬分之一，主要針對侵入式器材。
血管內超音波 (IVUS)：雖然 Vscan Air 主要為體外使用，但本指引提及 IVUS 是為了對比高風險超音波器材的特殊審查標準，如熱原測試。
定點照護超音波 (POCUS)：Vscan Air 所屬的市場分類，強調在救護車、急診室等非典型環境下的即時診斷能力。
諧波造影 (Harmonic Imaging)：一種先進成像技術，利用聲波在組織中傳播產生的二次諧波來過濾雜訊，提升影像品質。
DICOM：全球通用的醫療影像存儲與通訊標準。Vscan Air 產出的影像必須符合此格式，以便上傳至醫院的 PACS 系統。
風險管理 (Risk Management)：基於 ISO 14971 標準。製造商必須預判所有可能的失效模式（如電池過熱、無線連線中斷），並採取設計上的緩解措施。


第九章：結論與臨床實務建議

透過對 Vscan Air 510(k) 案例的深入剖析，我們可以發現，現代診斷用超音波系統的審查重點已從單純的硬體規格，轉向了軟硬體整合的安全性與複雜環境下的適應性。

對於製造商而言，成功的 510(k) 申報不僅需要滿足基本的 IEC 與 ISO 標準，更需要具備嚴密的「實質等同性」論證邏輯。特別是當產品引入無線連線、人工智慧輔助測量或多功能探頭設計時，必須透過詳盡的臨床前測試（Non-clinical performance testing）來彌補新技術與傳統技術之間的差異。

Vscan Air 的成功經驗顯示，利用「多對照器材」策略，可以有效地擴張產品的適應症（Indications for Use），例如從基本的腹部掃描擴展到複雜的成人頭部（TCD）與新生兒頭部掃描。這不僅縮短了產品進入市場的時間，也確保了產品在各類嚴苛臨床場景中的效能表現。



第十章：技術專家追蹤問題與深度分析 (Analysis of FAQ)

本章針對 510(k) 審查中常見的 20 個深層技術問題進行分析，這些問題是審查官（Reviewer）在收到文件後可能提出的重點詢問：

生物相容性取樣：針對 Vscan Air 的雙頭探頭，製造商必須分別針對凸陣端與線陣端的接觸材料進行生物相容性驗證，若材質完全一致，則需提供材料一致性證明（Material Declaration）。
EMS 振動測試：在 IEC 60601-1-12 框架下，手持式系統必須承受高達 5g 的振動頻率，模擬救護車在崎嶇路面高速行駛時對設備內部組件（如壓電晶體連接點）的衝擊。
自動測量演算法確效：若系統包含自動測量功能（如自動測量胎兒頭圍），必須提供演算法與資深醫師人工測量的比對報告，通常要求相關係數 R 需大於 0.9。
即時顯示指標：根據法規，當 MI 或 TI 超過 1.0 時，系統必須具備強制性的即時顯示。對於掃描眼球等敏感組織，輸出限制通常更低。
Wi-Fi 訊號中斷風險：若在診斷過程中 Wi-Fi 中斷，系統必須具備「緩存機制」或明確的提示，防止醫師根據殘留的凍結影像做出錯誤診斷。
護套材質變更：護套屬病人接觸部件。若更換供應商或材質，必須重新執行 ISO 10993-10 皮膚刺激性測試。
代表性主機：若單獨申請探頭的 510(k)，必須選取市場上銷量最大或規格最極端（如功率最高）的主機作為測試平台。
無線充電 EMI：無線充電座產生的強大交變磁場可能影響探頭內的敏感電路。測試中需驗證充電過程是否會導致探頭內部組件永久性性能退化。
頻率等同性論證：若新器材頻率為 5MHz，對照器材為 3MHz，需透過側向解析度測試證明新器材雖穿透力稍弱但解析度更高，整體臨床獲益一致。
高層次消毒必要性：對於非侵入式探頭，若其預期用途包含介入式引導（如穿刺），則必須提供高層次消毒確效資料。
軟體核心項目：中等風險軟體需包含軟體需求規範 (SRS)、軟體設計規範 (SDS) 及完整的追溯表 (Traceability Analysis)。
單一故障表面溫度：測試中需模擬冷卻風扇停止或內部電路短路，確保探頭接觸病人的表面溫度在 30 分鐘內不超過 43°C。
新生兒應用聲能限制：新生兒組織較薄且更易受熱影響，雖然法規限值與成人一致，但在 ALARA 指引下，廠商通常會預設較低的輸出功率。
解析度合格依據：若自訂軸向解析度限值，需參考臨床公認的解剖結構辨識需求（如必須能區分 1mm 的血管壁）。
探頭元件檢查演算法：透過向各別晶體發射微小測試脈衝並分析回波阻抗，軟體可精確定位失效的晶體陣元。
顯示端一致性測試：由於不同手機（如 iPhone 與三星）的顯示亮度與顏色處理不同，廠商需進行「跨平台一致性驗證」。
IP 防護等級：對於緊急醫療環境，IPX4（防濺水）是基本要求，Vscan Air 通常具備更高的防護能力以應對戶外降雨。
抗拉強度測試：雖然 Vscan Air 是無線的，但對於傳統探頭，電纜接頭處必須承受 15 磅以上的拉力而不損壞。
撤銷上市的對照器材：若對照器材因安全問題被強制撤銷，則不能作為比對依據；若僅因市場因素停產，則仍可引用。
環境儲存對靈敏度的影響：長期的高溫或低溫會加速壓電材料的去極化，因此環境壓力測試（Environmental Stress Screening）是確保長期有效性的關鍵。
本報告之生成旨在為醫療器材同業提供技術參考，確保診斷用超音波影像系統能符合最嚴謹的法規要求，最終造福全球病患。

system_objective_fulfilled







---------- Forwarded message ---------

From: Freesia Lin <joylovefreesia6@gmail.com>

Date: Fri, Mar 27, 2026 at 11:58 AM

Subject: Fwd: SIGNA Victor 磁共振影像系統

To: joylovecutie@gmail.com <joylovecutie@gmail.com>









---------- Forwarded message ---------

From: Anasta Lin <joyloveanasta@gmail.com>

Date: 2026年3月27日(金) 11:32

Subject: SIGNA Victor 磁共振影像系統

To: <jywu6@itri.org.tw>, <joylovefreesia6@gmail.com>, <joylovesophia@gmail.com>, joylovehalo@gmail.com <joylovehalo@gmail.com>, joylovegraff@gmail.com <joylovegraff@gmail.com>, joyloveclaire@gmail.com <joyloveclaire@gmail.com>, Anasta Lin <joyloveanasta@gmail.com>, joyloveanastan@gmail.com <joyloveanastan@gmail.com>





FDA 510k revier

https://opal.google/app/1Kqxx2WeWUZ4cnY6YtXt-YECYJz0zdpTm



Guidance builder



https://opal.google/app/1elIrs0J2TX2F5PAHVTmAL24xm38wrgoD



Skill generator





https://opal.google/app/1ovXiiPZcuMjoh2AnLrVOWY6lDnrCpJnb







510(k) 審查報告：SIGNA™ Victor 磁共振影像系統 (Magnetic Resonance Diagnostic Device)

報告概述

本報告係針對 GE Healthcare (Tianjin) Company Limited 所提交之 SIGNA™ Victor 磁共振影像系統（以下簡稱 SIGNA™ Victor）之 510(k) 上市前通知書（Premarket Notification）進行之全面性技術與法規審查。本報告旨在依據美國食品藥物管理局（FDA）21 CFR 892.1000 之法規要求，以及相關國際與國家標準（如 IEC 60601 系列、NEMA MS 系列），評估該器材是否與已合法上市之比對設備（Predicate Devices）具備「實質等效性」（Substantial Equivalence, SE）。

本審查內容涵蓋產品技術規格、預期用途、臨床前測試數據（包含安全性、電磁相容性、生物相容性、物理性能測試）以及臨床影像評估，確保產品在進入市場前已達成必要的安全性與效能基準。



第一部分：申請者與器材基本資訊

1.1 申請者資訊

製造商名稱：GE Healthcare (Tianjin) Company Limited
製造商地址：中國天津市天津機場經濟區經三路 266 號（300308）
主要聯繫人：Huande Li（監管事務經理）
分銷商：GE Medical Systems, LLC (Waukesha, WI, USA)
1.2 器材識別

產品名稱：SIGNA™ Victor
通用名稱：磁共振診斷器材 (Magnetic Resonance Diagnostic Device, MRDD)
分類法規：21 CFR 892.1000
產品代碼：LNH
分類等級：第二類 (Class II)
比對設備 (Predicate Devices)：
SIGNA™ Explorer (K143251)
SIGNA™ Prime (K211980)
參考設備 (Reference Devices)：
SIGNA™ Voyager (K161567)
SIGNA™ Artist Evo (K213603)
1.3 醫療器材分類與鑑別表

在 510(k) 申報中，準確識別產品代碼與分類定義是建立審查框架的第一步。

表一：MRI 相關品項分類與鑑別

公告品項編碼

品項名稱

鑑別定義

分類等級

892.1000

磁共振診斷器材

利用靜磁場與射頻脈衝獲得元素密度與位置資訊之影像設備。

Class II

LNH

MRI 系統代碼

完整的磁共振影像系統及其核心組件（磁鐵、梯度、RF）。

Class II

LNI

MRS 系統代碼

磁共振光譜系統，用於分析人體組織之化學成分與代謝產物。

Class II

MOS

磁共振專用線圈

專門設計用於特定解剖部位（如頭部、膝關節）的接收或發射線圈。

Class II

LXP

影像傳輸與處理

用于 MRI 影像後處理、量測與儲存的軟體站或專用模組。

Class II

第二部分：預期用途與器材描述

2.1 預期用途 (Indications for Use)

SIGNA™ Victor 是一款全身磁共振掃描儀，旨在支援高解析度、高信噪比及短掃描時間。其被指示作為診斷影像設備，用於產生人體各部位（包括但不限於頭部、頸部、顳顎關節、脊椎、乳房、心臟、腹部、盆腔、關節、攝護腺、血管及骨骼肌肉系統）的軸狀、冠狀、矢狀及斜位影像、光譜影像、參數圖及光譜資訊。

根據所掃描的部位，可配合使用對比劑。由 SIGNA™ Victor 產生的影像反映了表現出磁共振現象的原子核之空間分布或分子環境。這些影像與光譜在由受過訓練的醫師判讀時，可提供有助於臨床診斷的資訊。

2.2 器材描述 (Device Description)

SIGNA™ Victor 系統整合了隨時間變化的梯度磁場（Gradients）與射頻（RF）傳輸技術，以獲取有關原子核密度與位置的資訊。

核心組件：包含 1.5T 主動屏蔽超導磁鐵（1.5T Superconducting Magnet）、梯度線圈、射頻接收與發射系統。
物理規格：孔徑大小為 60cm，具備零液氦消耗技術（Zero Boil-off technology），這在臨床操作中能大幅降低維護成本與氦氣補充頻率。
成像能力：支援 2D、3D 成像，涵蓋 SAG (矢狀面)、COR (冠狀面)、AX (軸狀面)、Oblique (斜位面) 等多種切面技術。
數位化技術：引入了數位接收鏈，優化了從線圈端到系統櫃的信號傳輸，提升了整體影像質量。


第三部分：產品規格要求與技術比較

製造商在 510(k) 申報文件中，必須對受測設備（Subject Device）與比對設備進行詳細的規格定義，以確立實質等效性。

3.1 技術規格對比

下表彙整了 SIGNA™ Victor 與其主要比對設備在關鍵硬體指標上的對比：

表二：SIGNA™ Victor 與比對設備之技術規格比較

規格項目

SIGNA™ Victor (Subject)

SIGNA™ Explorer (Predicate)

SIGNA™ Prime (Predicate)

磁場強度

1.5T 超導磁鐵

1.5T 超導磁鐵

1.5T 超導磁鐵

磁鐵類型

主動屏蔽超導型

主動屏蔽超導型

主動屏蔽超導型

孔徑大小

60 cm

60 cm

60 cm

梯度強度 (max)

33 mT/m (單軸)

33 mT/m (單軸)

33 mT/m (單軸)

最大斜率 (Slew Rate)

120 T/m/s

120 T/m/s

120 T/m/s

RF 接收通道數

16 / 32 / 64 通道可選

標準 16 通道

16 通道

...

[Message clipped]  View entire message
Hi please create a wow interactive webpage that 1.user can upload or paste document (pdf, txt, markdown), 2.User can provide instruction for create a mock document (optional).  3. User select language for output (Traditional Chinese(default)/English) 4.Agent will do web search related to step 1 information in FDA (FDA guidance, 510(k) summary) and create a comprehensive summary in markdown in 3000~4000 words with 5 tables and 20 entities with context using the template report. Ending with 20 comprehensive follow up questions. 5. Agent will create a mock document based on step 1, 2, 3 information in markdown in 3000~4000 words with 5 tables and 20 entities with context. Ending with 20 comprehensive follow up questions. 6. Please create skill.md using skill creator skill that this skill will create step 5 mock document. Please adding 3 additioanl ai features to this skill.md. 7. Please create a wow interactive webpage that contains step 4, 5, 6 results. User can select language (Traditional Chinese(default)/English), light(default)/dark theme and Pantone color palette. Ending with 20 comprehensive follow up questions. Default template report:



診斷用超音波影像系統暨超音波轉換器(探頭) 510(k) 審查與臨床前測試指引手冊

第一章：前言與指引說明

本指引手冊係依據衛生福利部於 107 年 1 月 16 日公布之「診斷用超音波影像系統暨超音波轉換器(探頭)」臨床前測試基準（以下簡稱本檢測基準），並結合 GE Healthcare 針對 Vscan Air™ 系統之 510(k) 申請實務案例撰寫而成。本文件旨在為醫療器材製造商在辦理產品查驗登記或進行 510(k) 實質等同性（Substantial Equivalence）比對時，提供詳盡的臨床前測試資料檢附建議。

1.1 適用目的與範圍

本指引主要提供醫療器材廠商在準備臨床前測試資料時的具體項目建議。這些資料是確保產品在安全性與效能上達到法規要求的關鍵。本基準適用於人體組織監測及診斷之超音波器材，包含：

超音波脈動都卜勒式影像系統 (Ultrasonic pulsed doppler imaging system)
超音波回音影像系統 (Ultrasonic Pulsed Echo Imaging System)
診斷用超音波轉換器（探頭） (Diagnostic ultrasonic transducer)
需注意，本基準並不適用於「超音波治療設備」。所有申請案仍應符合相關法規，並依產品之特定結構、材質與宣稱效能進行完整的驗證評估。

1.2 測試資料基本要求

製造商應檢附之臨床前測試資料必須包含：

檢驗規格： 明列各測試項目之合格範圍（Acceptance Criteria）及其制定依據。
方法： 詳細描述測試流程。
原始檢驗紀錄： 提供測試過程中的數據紀錄。
檢驗成績書： 總結測試結果並判定是否符合規格。
若產品未進行指引表列之項目，製造商須提供科學性評估報告或相關文獻，證明產品安全性與功能性不受影響。



第二章：醫療器材分類分級與鑑別

在進行 510(k) 審查時，準確判定產品的分類碼（Product Code）與法規章節（Regulation Number）是首要步驟。下表整理了診斷用超音波設備在衛福部及 FDA 標準下的分類資訊。

表 1：醫療器材分類分級與鑑別表

公告品項 (Item)

鑑別 (Identification)

法規編號 (CFR/Regulation)

分類碼 (Product Code)

超音波脈動都卜勒式影像系統

結合持續波都卜勒科技與脈動回音科技，測量體組織特性（深度、位置）或動態組織特性（血流速）。

21 CFR 892.1550 / P.1550

90-IYN

超音波回音影像系統

放射脈動音波進入組織，測量音波傳導與反射時間，以判定組織介面位置。

21 CFR 892.1560 / P.1560

90-IYO

診斷用超音波轉換器(探頭)

由壓電材質製成，負責電子訊號與聲音訊號之轉換，為診斷系統之核心零件。

21 CFR 892.1570 / P.1570

90-ITX

第三章：產品規格(Product Specification)與設計特點

以 Vscan Air™ 為例，其作為一種由電池供電的全方位診斷用超音波影像系統，具備高度可攜性。在撰寫技術規格時，應區分「影像主機系統」與「轉換器（探頭）」兩大部分。

3.1 影像系統規格要求

電源與電池： 須詳細說明輸入電壓、電池續航力與充電技術（如無線充電）。
尺寸與重量： 針對手持式設備，其口袋型尺寸（Pocket-sized）與輕量化設計是關鍵。
操作環境： 標示環境溫度與相對濕度範圍，特別是對於在救護車（Road/Air Ambulance）或居家環境使用的設備。
成像模式 (Image Mode)： B-mode, M-mode, Color Doppler, Pulsed Wave Doppler, Harmonic Imaging 等。
臨床測量功能： 距離、體積、心跳、流速及其準確度（Accuracy）。
3.2 轉換器（探頭）規格要求

針對 Vscan Air 的雙頭探頭（Dual-headed probe）設計，需分別描述：

Curved Array（凸陣探頭）： 用於深層組織。
Linear Array（線陣探頭）： 用於淺層組織與小器官。
Sector Array（扇陣探頭）： 用於心臟與成人頭部應用。
表 2：Vscan Air 系統技術規格與臨床應用比對表

規格項目

技術細節 (Technical Details)

臨床應用範疇 (Applications)

凸陣探頭 (Curved)

深層掃描，支援 B/Color/Harmonic

腹部、婦產科、泌尿科、胸腔/肺、心臟(成人/兒童)

線陣探頭 (Linear)

淺層掃描，高頻解析度

血管、肌肉骨骼、小器官、眼科、新生兒頭部

扇陣探頭 (Sector)

深層心臟與成人頭部掃描

心臟、腹部、胎兒、成人頭部 (TCD)

通訊技術

Wi-Fi Direct (與 iOS/Android App 連接)

支援診所、醫院、居家及急救環境使用

測量功能

距離、橢圓、速度、時間、角度

提供基本臨床診斷所需之量化數據

第四章：安全性及功能性試驗 (Safety and Performance Data)

臨床前測試是 510(k) 審查的核心。製造商必須針對電性安全、電磁相容性、軟體確效及生物相容性提供完整的測試報告。

4.1 電性安全與電磁相容 (Electrical Safety & EMC)

產品必須在各種搬運、儲存及操作狀態下，不對病人及操作者產生潛在危害。

參考標準： IEC 60601-1 (通用安全) 與 IEC 60601-2-37 (超音波專用安全)。
特殊考量： 由於 Vscan Air 具備無線通訊與無線充電功能，需額外評估無線干擾與射頻安全性。
4.2 軟體確效 (Software Verification and Validation)

若設備由 App 或嵌入式軟體控制，則必須依照 FDA 的軟體確效指引（2005）及 IEC 62304 進行驗證。

內容： 風險評估、單元測試、系統整合測試、效能測試。
更新功能： 例如 Vscan Air 新增的「探頭陣元自動檢查」與「低功耗連接模式」，皆須進行嚴謹的軟體驗證。
4.3 生物相容性試驗 (Biocompatibility)

探頭與病人皮膚或黏膜接觸，必須符合 ISO 10993 系列標準。

表 3：生物相容性評估需求表

接觸類別

測試項目 (Required Tests)

參考標準

一般皮膚接觸

細胞毒性 (Cytotoxicity)、過敏試驗 (Sensitization)、刺激試驗 (Irritation)

ISO 10993-5, -10

血管內/受損組織

急性全身毒性、血液相容性 (Hemocompatibility)

ISO 10993-4, -11

特殊探頭(如經直腸)

須評估黏膜刺激性及更嚴格的化學消毒殘留測試

ISO 10993 系列

第五章：超音波設備特殊安全性規範

除了通用的電性安全外，超音波設備還需遵循 IEC 60601-2-37 進行聲能輸出與熱指數監測。

5.1 聲能輸出 (Acoustic Output)

熱指數 (TI) 與機械指數 (MI)： 必須即時顯示於螢幕，確保操作者能遵循 ALARA（As Low As Reasonably Achievable）原則。
最大值宣告： 提供每種操作模式下的 TI 與 MI 最大值。
探頭表面溫度： 在正常及單一故障狀態下，探頭接觸人體的表面溫度不得超過規範限值，以防熱灼傷。
5.2 功能性測試項目

軸向與側向解析度 (Axial & Lateral Resolution)： 驗證成像的清晰度。
測量準確度： 針對距離、心跳、流速等測量演算法進行精度校準。
消毒/滅菌相容性： 探頭需經過多次消毒程序後仍能維持性能。
表 4：臨床前測試項目與參考標準彙整表

測試大項

具體需求內容

參考方法/標準

電性安全

完整防護失效測試與漏電流測試

IEC 60601-1:2005

電磁相容

電磁干擾(EMI)與耐受性(EMS)測試

IEC 60601-1-2:2014

聲能場特性

聲場特性化與 TI/MI 指標測定

IEC 62359 / IEC 60601-2-37

軟體生命週期

需求分析、架構設計、代碼審查與確效

IEC 62304:2006

環境測試

包含家用與緊急醫療環境的特殊要求

IEC 60601-1-11 / -1-12

第六章：滅菌與熱原測試

若產品提供無菌包裝或屬侵入式器材（如血管內超音波探頭），滅菌確效是必要項。

滅菌保證程度 (SAL)： 必須達到 $10^{-6}$。
熱原測試 (Pyrogenicity)： 針對血管內探頭，須檢附細菌內毒素試驗報告。
清潔與消毒： 非滅菌供應的探頭，製造商需提供建議的清潔流程與高層次消毒（High-level disinfection）確效資料。
表 5：滅菌與清潔評估表

器材供應狀態

評估要求

參考標準

無菌供應

滅菌確效報告 (EO、輻射或濕熱)

ISO 11135 / ISO 11137 / ISO 17665

可重複使用 (非滅菌)

清潔方法驗證與消毒劑相容性測試

FDA Disinfection Guidance

血管內探頭

須增加內毒素與熱原性測試

各國藥典 (USP/EP/JP)

第七章：實質等同性 (Substantial Equivalence) 論證

在 510(k) 審查中，新產品（Subject Device）必須證明其安全性與效能與已合法上市的對照器材（Predicate Device）實質等同。

7.1 比較維度

預期用途： 是否相同？（例如：診斷影像與血流分析）。
技術特性： 成像技術、頻率範圍、訊號處理演算法是否類似。
安全性指標： 是否符合相同的國際標準。
7.2 Vscan Air 的等同性實例

Vscan Air 在申請時，除了將 K202035 作為主要對照器材外，亦引用了 Vscan Extend (K180995) 證明其「成人頭部（Adult Cephalic）」應用的等同性，並引用 Venue Go (K220800) 證明其 M-mode 與 Pulsed Wave Doppler 模式的有效性。這種「多對照器材」策略在現代多功能醫療設備申請中非常普遍。



第八章：關鍵實體說明 (Key Entities Explanations)

以下針對本指引及 510(k) 審查中出現的 20 個關鍵實體進行解釋：

510(k) (上市前通知)： 美國 FDA 的一種審查程序，要求製造商證明其設備與已合法上市的設備至少一樣安全有效。
實質等同性 (Substantial Equivalence)： 證明新器材在預期用途、技術特性上與對照器材一致，或雖有差異但不影響安全效能。
對照器材 (Predicate Device)： 先前已獲得 FDA 核准上市，並被用來與申請中產品進行比對的醫療器材。
參考器材 (Reference Device)： 用於支持特定功能或技術特性的次要對照器材，非主體比對對象。
轉換器 (Transducer/Probe)： 將電能轉為超音波，並將反射回來的音波轉回電能的核心組件。
脈動都卜勒 (Pulsed Doppler)： 利用都卜勒效應測量特定深度血管中血液流動速度的技術。
B-Mode (亮度模式)： 超音波最基本的成像模式，將反射波強度轉化為灰階圖像。
聲能輸出 (Acoustic Output)： 探頭發射的能量水平，需受嚴格監測以防組織損傷。
熱指數 (Thermal Index, TI)： 評估超音波導致局部組織溫度上升風險的指標。
機械指數 (Mechanical Index, MI)： 評估超音波引發空洞化效應（Cavitation）等機械性損傷風險的指標。
ALARA 原則： 醫療影像操作核心原則，主張在獲得診斷資訊的前提下，使用「盡可能低」的輻射或能量。
生物相容性 (Biocompatibility)： 器材材料與人體接觸時，不引起有害局部或全身反應的能力。
電磁相容性 (EMC)： 器材在電磁環境中能正常運作，且不對周邊設備產生無法忍受的干擾。
軟體確效 (Software Validation)： 通過證據確認軟體系統能持續滿足其預期用途與規格要求。
滅菌保證程度 (SAL)： 產品經滅菌後仍存在活微生物的機率，醫療器材通常要求低於百萬分之一。
血管內超音波 (IVUS)： 將微型探頭置入血管內進行掃描，對材料安全性有極高要求。
定點照護超音波 (POCUS)： 在床邊、急救現場等非放射科環境中即時使用的超音波。
諧波造影 (Harmonic Imaging)： 利用組織產生的二次諧波訊號成像，可顯著提升影像對比度。
DICOM： 醫學數位影像與通訊標準，確保不同廠牌設備間影像資料可互相交換。
風險管理 (Risk Management)： 依據 ISO 14971 標準，對產品生命週期中所有潛在危害進行識別、評估與控制的過程。


第九章：結論與建議

綜合上述規範，診斷用超音波影像系統的 510(k) 審查重點在於「安全標準的符合性」與「性能規格的實質等同性」。製造商在開發初期即應納入 IEC 60601 與 ISO 10993 系列標準，並針對如 Vscan Air 般的無線、可攜式新技術，提供額外的通訊安全性與環境耐受性驗證。

臨床前測試不僅是法規文件的堆疊，更是產品設計品質的實證。透過詳盡的檢驗規格制定與第三方標準實驗室的測試報告，能有效縮短審查週期，確保產品順利進入國際市場。



第十章：20 個隨機追蹤問題 (Follow-up Questions)

Vscan Air 的雙頭探頭設計在進行生物相容性測試時，是否需要分別針對兩個探頭頭部取樣？
在 IEC 60601-1-12 標準下，針對救護車環境使用的超音波系統，其振動測試規格有何特殊要求？
若產品在 510(k) 申請中增加了「自動測量」演算法，應如何進行演算法的臨床有效性確效？
當 TI 或 MI 指數超過 1.0 時，系統螢幕是否必須具備強制性的即時顯示功能？
針對手持式無線超音波，如何評估 Wi-Fi 訊號中斷對於實時診斷影像完整性的風險？
在 ISO 10993-10 測試中，若探頭護套材質已變更，是否需要重新執行皮膚刺激性測試？
如何定義「具代表性的超音波主機」以進行單獨申請之探頭電性安全測試？
Vscan Air 使用的無線充電技術，是否會對其內部的壓電陶瓷元件產生電磁干擾？
在 510(k) 比較表中，若新舊器材的中心頻率不同，該如何論證其成像效能的等同性？
對於非侵入式探頭，何種情況下需要檢附「高層次消毒」確效資料？
若軟體屬於「中等程度」風險（Moderate Level of Concern），確效文件需包含哪些核心項目？
如何在臨床前測試中驗證探頭在「單一故障狀態」下的最大表面溫度？
對於新生兒頭部（Neonatal Cephalic）應用，其聲能輸出限制是否比成人應用更為嚴格？
若製造廠自行制定軸向解析度的合格範圍，須檢附何種科學依據？
Vscan Air 的「探頭元件檢查」功能，是如何透過軟體演算法檢測壓電晶體的損壞？
當使用不同的移動裝置（iOS vs Android）作為顯示端時，影像顯示的延遲時間是否需要進行一致性測試？
在緊急醫療環境下，器材的防塵防水等級（IP Code）至少應達到什麼程度？
針對血管內探頭的「抗拉強度」測試，其負載標準是如何制定的？
若 510(k) 的對照器材已被撤銷上市，是否仍可作為實質等同性的比對依據？
如何評估長期儲存環境（如極端溫度）對探頭壓電材質靈敏度的影響？
system_objective_fulfilled


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
