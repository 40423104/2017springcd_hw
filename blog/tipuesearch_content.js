var tipuesearch = {"pages":[{"tags":"misc","url":"./pages/40423104/","title":"40423104","text":"2017springcd_40423104_Yan Syuan 倉儲: https://github.com/40423104/2017springcd_hw 簡報: https://40423104.github.io/2017springcd_hw 網誌: https://40423104.github.io/2017springcd_hw/blog/ Vimeo: https://vimeo.com/user44900188 Youtube: https://www.youtube.com/channel/UCNGRmPgOMhGJmZw_ygnC5UA"},{"tags":"About","url":"./加減乘除查驗.html","title":"W10-加減乘除查驗","text":"利用程式做加減乘除的運算 1.先建立一個較m1的資料夾(配合程式) 2.將以下兩個程式碼放在m1資料夾 3.按鈕程式碼 window.onload=function(){ // 設定 data/py 為共用程式路徑 brython({debug:1, pythonpath:['./../data/py']}); } from browser import document as doc from browser import html import math container = doc['container'] degree = math.pi/180 def button1(event): a = input(\"give me a\") container <= str(math.cos(60*degree)+float(a)) doc[\"button1\"].bind(\"click\", button1) 按下取 a 值 加運算 程式碼 檔名append.py def addend (a,b): return a+b 檔名app.py import sys sys.path.append(\"./m3\") import addend sum = addend.addend (19,88) print(sum) 驗證影片 按鈕測試 window.onload=function(){ // 設定 data/py 為共用程式路徑 brython({debug:1, pythonpath:['./../data/py']}); } from browser import document as doc from browser import html import math container = doc['container'] degree = math.pi/180 def button1(event): a = input(\"give me a\") b = input(\"give me b\") container <= str(float(a)+float(b)) doc[\"button1\"].bind(\"click\", button1) 按下取 a b 值 減運算 程式碼 檔名minus.py def minus (a,b): return a-b 檔名app.py import sys sys.path.append(\"./m4\") import minus sum = minus.minus (698,2278) print(sum) 驗證影片 按鈕測試 window.onload=function(){ // 設定 data/py 為共用程式路徑 brython({debug:1, pythonpath:['./../data/py']}); } from browser import document as doc from browser import html import math container = doc['container1'] degree = math.pi/180 def button2(event): a = input(\"give me a\") b = input(\"give me b\") container <= str(float(a)-float(b)) doc[\"button2\"].bind(\"click\", button2) 按下取 a b 值 乘運算 程式碼 檔名tines.py def tines (a,b): return a*b 檔名app.py import sys sys.path.append(\"./m1\") import tines sum = tines.tines (4,2) print(sum) 驗證影片 按鈕測試 window.onload=function(){ // 設定 data/py 為共用程式路徑 brython({debug:1, pythonpath:['./../data/py']}); } from browser import document as doc from browser import html import math container = doc['container3'] degree = math.pi/180 def button3(event): a = input(\"give me a\") b = input(\"give me b\") container <= str(float(a)*float(b)) doc[\"button3\"].bind(\"click\", button3) 按下取 a b 值 除運算 程式碼 檔名divided.py def divided (a,b): return a/b 檔名app.py import sys sys.path.append(\"./m2\") import divided sum = divided.divided (3,2) print(sum) 驗證影片 按鈕測試 window.onload=function(){ // 設定 data/py 為共用程式路徑 brython({debug:1, pythonpath:['./../data/py']}); } from browser import document as doc from browser import html import math container = doc['container4'] degree = math.pi/180 def button4(event): a = input(\"give me a\") b = input(\"give me b\") container <= str(float(a)/float(b)) doc[\"button4\"].bind(\"click\", button4) 按下取 a b 值"},{"tags":"About","url":"./期中.html","title":"期中協同","text":"Fossil Server 實習查驗 四連桿機構協同 Trace Point 查驗 Fourbar Walker OnShape 零件協同繪圖與組立查驗 [1] Fossil Server 實習查驗 https://mde2a2.kmol.info/midterm/ag2/wcontent [2] 四連桿機構協同 Trace Point 查驗 利用solvespace繪製機構尺寸並模擬路徑在導入excel查驗 第一種尺寸修改 繪製機構尺寸並模擬(L=40) excel查驗 第二種尺寸修改 繪製機構尺寸並模擬(L=40) excel查驗 [3] Fourbar Walker OnShape 零件協同繪圖與組立查驗 利用solvespace繪製機構尺寸 影片 利用onshape繪製零件圖與組裝模擬 零件一主體 所有桿件繪製 組裝 模擬"},{"tags":"About","url":"./V-rep操作.html","title":"V-rep模擬操作(祥細)","text":"轉入V-REP並模擬及轉入作法 1.導入 STL 3D圖檔 2.可先調整圖的位置 3.分解組合圖(每件變成單一個體) 4.導入圓柱 5.將圓柱與軸對齊中心 6.調整軸轉動的速度 7.調整桿件設定 8.模擬"},{"tags":"About","url":"./onshape與V-rep.html","title":"W6-onshape與V-rep四連桿、八連桿","text":"利用onshape繪製與組裝四連桿、八連桿 轉入V-REP並模擬 四連桿影片 桿件20 桿件30 桿件50 桿件60 桿件組合 轉入V-rep模擬 虎尾科技大學 機械設計工程系-40423104-W6-四連桿模擬V-rep from 40423104-Yan syuan on Vimeo . 八連桿影片 桿件繪製(一) 中心距分別為:15mm、50mm、64mm L型桿件:6mmx40mm 桿件繪製(二) 中心距分別為:40mm、50mm 三角形尺寸:40mm、40mm、56mm 角度100度L型桿件:18mm、25mm、R45mm 桿件組合 轉入V-rep模擬 心得 1.操作八連桿模擬要一個桿件慢慢來測試模擬，才不會一直模擬失敗 2.透過設計八連桿尺寸，更熟知設計時要注意到的桿件長度與需不需要加入特殊固定 3.在onshape中組裝零件須注意要使用轉動配合，才能方便在V-rep中模擬"},{"tags":"About","url":"./V-rep.html","title":"W5-V-rep模擬","text":"利用V-rep 將單連桿機構導入，在進行模擬 簡單介紹 Git Hub 改版問題 單連桿影片 虎尾科技大學 機械設計工程系-40423104-W5-單連趕v-rep模擬 from 40423104-Yan syuan on Vimeo . Git Hub 改版問題 可進入 看解決方法 進入自己倉儲資料夾 在 SciTE 下編輯 將所有\"{\"改成\"{{\"，以下為修改後的程式碼 # Liquid-style Tags *Author: Jake Vanderplas * This plugin allows liquid-style tags to be inserted into markdown within Pelican documents. Liquid uses tags bounded by ``{{% ... %}}``, and is used to extend markdown in other blogging platforms such as octopress. This set of extensions does not actually interface with liquid, but allows users to define their own liquid-style tags which will be inserted into the markdown preprocessor stream. There are several built-in tags, which can be added as follows. First, in your pelicanconf.py file, add the plugins you want to use: PLUGIN_PATH = '/path/to/pelican-plugins' PLUGINS = ['liquid_tags.img', 'liquid_tags.video', 'liquid_tags.youtube', 'liquid_tags.vimeo', 'liquid_tags.include_code', 'liquid_tags.notebook'] There are several options available ## Image Tag To insert a sized and labeled image in your document, enable the ``liquid_tags.img`` plugin and use the following: {{% img [class name(s)] path/to/image [width [height]] [title text | \"title text\" [\"alt text\"]] %}} ### Base64 Image (inline image) tag There is one more tag for image: ``b64img``. It is based on ``img`` tag, but instead of inserting link on image it acutally reads image and inserts it as base64 text into `` `` will be collapsed when the html page is loaded and can be expanded by clicking on them. Cells containing the comment line ``# `` will be open on load but can be collapsed by clicking on their header. Cells without collapse comments are rendered as standard code input cells. ## Testing To test the plugin in multiple environments we use [tox](http://tox.readthedocs.org/en/latest/), to run the entire test suite, just type: wzxhzdk:0 [IPython]: http://ipython.org/ 心得 1.透過多次練習越來越熟悉v-rep的模擬操作 2.清楚多連桿與單連桿機構 3.了解連桿運動方式 4.熟悉解決Git Hub改版方法"},{"tags":"About","url":"./Hyperworks.html","title":"W4-Hyperworks 與 2D 繪圖","text":"網際平面四連桿機構動態模擬 單連桿繪製與導入V-rep Hyperworks安裝 網際平面四連桿機構動態模擬 四連桿平面機構 window.onload=function(){ brython({debug:1, pythonpath:['./../data/py']}); } 平面機構繪圖: from browser import window cango = window.Cango2D.new shapedefs = window.shapeDefs obj2d = window.Obj2D.new group2d = window.Group2D.new cgo = cango(\"plotarea2\") x1, y1 = 40, 40 cx1, cy1 = 60, 100 x2, y2 = 130, 110 cx2, cy2 = 120, 110 cx3, cy3 = 140, 40 x3, y3 = 120, 90 def dragC1(mousePos): global cx1, cy1 cx1 = mousePos.x cy1 = mousePos.y drawCurve() def dragC2(mousePos): global cx2, cy2 cx2 = mousePos.x cy2 = mousePos.y drawCurve() def dragC3(mousePos): global cx3, cy3 cx3 = mousePos.x cy3 = mousePos.y drawCurve() def dragX1(mousePos): global x1, y1 x1 = mousePos.x y1 = mousePos.y drawCurve() def drawCurve(): # curve change shape so it must be re-draw each time # draw a quadratic bezier from x1,y2 to x2,y2 qbez = obj2d(['M', x1, y1, 'Q', cx1, cy1, x2, y2], \"PATH\", { \"strokeColor\":'blue'}) cbez = obj2d(['M', x2, y2, 'C', cx2, cy2, cx3, cy3, x3, y3], \"PATH\", { \"strokeColor\":'green'}) # show lines to control point ''' L1 = obj2d(['M', x1, y1, 'L', cx1, cy1, x2, y2], \"PATH\", { \"strokeColor\":\"rgba(0, 0, 0, 0.2)\", \"dashed\":[4]}) # semi-transparent gray L2 = obj2d(['M', x2, y2, 'L', cx2, cy2], \"PATH\", { \"strokeColor\":\"rgba(0, 0, 0, 0.2)\", \"dashed\":[4]}) L3 = obj2d(['M', x3, y3, 'L', cx3, cy3], \"PATH\", { \"strokeColor\":\"rgba(0, 0, 0, 0.2)\", \"dashed\":[4]}) ''' L1 = obj2d(['M', x1, y1, 'L', cx1, cy1], \"PATH\", { \"strokeColor\":\"rgba(0, 0, 0, 0.2)\", \"solided\":[10]}) # semi-transparent gray L2 = obj2d(['M', cx1, cy1, 'L', cx2, cy2], \"PATH\", { \"strokeColor\":\"rgba(0, 0, 0, 0.2)\", \"solided\":[10]}) L3 = obj2d(['M', cx2, cy2, 'L', cx3, cy3], \"PATH\", { \"strokeColor\":\"rgba(0, 0, 0, 0.2)\", \"solided\":[10]}) #c1.transform.reset() c1.transform.translate(cx1, cy1) #c2.transform.reset() c2.transform.translate(cx2, cy2) #c3.transform.reset() c3.transform.translate(cx3, cy3) #mx1.transform.reset() mx1.transform.translate(x1, y1) #grp = group2d(qbez, cbez, L1, L2, L3, c1, c2, c3) grp = group2d(L1, L2, L3, c1, c2, c3, mx1) cgo.clearCanvas() cgo.render(grp) cgo.clearCanvas(\"lightyellow\") cgo.setWorldCoords(0, 0, 200) # draggable control points c1 = obj2d(shapedefs.circle(4), \"SHAPE\", {\"fillColor\":'red'}) c1.enableDrag(None, dragC1, None) c2 = c1.dup() c2.enableDrag(None, dragC2, None) c3 = c1.dup() c3.enableDrag(None, dragC3, None) mx1 = c1.dup() mx1.enableDrag(None, dragX1, None) drawCurve(); 機械手臂動態模擬: from browser import window cango2d = window.Cango2D.new shapedefs = window.shapeDefs obj2d = window.Obj2D.new tweener = window.Tweener.new cgo = cango2d(\"robot\") # 清除畫面 cgo.clearCanvas(\"lightyellow\") cgo.setWorldCoords(-50, -50, 300) # 加上基軸與第一桿 # 畫筆移到 -20, -10, 畫直線到 -10,-10 以及 -10,0 standData = ['M', -20,-10, 'L', -10,-10, -10,0, 'A', 10,10,0,0,0,10,0, 'L',10,-10, 20,-10, 20,-40, -20,-40,'z'] stand = obj2d(standData, \"SHAPE\", { \"fillColor\":'darkgray', \"border\": True, \"strokeColor\": \"#222222\" }) axle0 = obj2d(shapedefs.circle(10), \"SHAPE\", { \"fillColor\":'gray', \"border\": True, \"strokeColor\": \"#222222\" }) armGrp = cgo.createGroup2D(stand, axle0) segData = ['M',0,-8, 'A',8,8,0,0,0,0,8, 'L',50,8, 'A',8,8,0,0,0,50,-8, 'Z'] seg1 = obj2d(segData, \"SHAPE\", { \"fillColor\":'darkGray', \"border\": True, \"strokeColor\": \"#222222\", \"zIndex\": -1 }) # 利用 zIndex 決定疊層的先後次序 axle1 = obj2d(shapedefs.circle(8), \"SHAPE\", { \"fillColor\":'gray', \"border\": True, \"strokeColor\": \"#222222\", \"zIndex\": 1 }) axle1.translate(50, 0) seg1Grp = cgo.createGroup2D(seg1, axle1) armGrp.addObj(seg1Grp) # 加上第二軸 seg2 = obj2d(segData, \"SHAPE\", { \"fillColor\":'darkGray', \"border\": True, \"strokeColor\": \"#222222\", \"zIndex\": -1 }) axle2 = obj2d(shapedefs.circle(8), \"SHAPE\", { \"fillColor\":'gray', \"border\": True, \"strokeColor\": \"#222222\", \"zIndex\": 1 }) axle2.translate(50, 0) seg2Grp = cgo.createGroup2D(seg2, axle2) cgo.render(seg2Grp) # 請注意 seg2Grp 加上 seg1Grp 物件上 seg1Grp.addObj(seg2Grp) seg3 = obj2d(segData, \"SHAPE\", { 'fillColor':'darkGray', 'border': True, 'strokeColor': \"#222222\", 'zIndex': -1 }) axle3 = obj2d(shapedefs.circle(6), \"SHAPE\", { 'fillColor':'gray', 'border': True, 'strokeColor': \"#222222\", 'zIndex': 1 }) axle3.translate(50, 0) seg3Grp = cgo.createGroup2D(seg3, axle3) seg2Grp.addObj(seg3Grp) seg4Data = ['M',0,-6, 'A',6,6,0,0,0,0,6, 'L',40,6, 40,12, 50,12, 50,-12, 40,-12, 40,-6, 'Z'] seg4 = obj2d(seg4Data, \"SHAPE\", { 'fillColor':'darkGray', 'border': True, 'strokeColor': \"#222222\", 'zIndex': -1 }) seg3Grp.addObj(seg4) # setup animation animData = {'s1': [0, 80, 45, 0], 's2': [0, -60, -60, 0], 's3': [0, -90, 0, 90, 0], 's4': [0, 30, -90, 0]} armTwnr = tweener(0, 3500, 'loop') def initArm(opts): seg2Grp.transform.translate(50,0) seg3Grp.transform.translate(50,0) seg4.transform.translate(50,0) def armPathFn(time, opts): seg1Rot = armTwnr.getVal(time, opts.s1) seg2Rot = armTwnr.getVal(time, opts.s2) seg3Rot = armTwnr.getVal(time, opts.s3) seg4Rot = armTwnr.getVal(time, opts.s4) seg1Grp.transform.rotate(seg1Rot) seg2Grp.transform.rotate(seg2Rot) seg2Grp.transform.translate(50,0) seg3Grp.transform.rotate(seg3Rot) seg3Grp.transform.translate(50,0) seg4.transform.rotate(seg4Rot) seg4.transform.translate(50,0) cgo.animate(armGrp, initArm, armPathFn, animData) cgo.playAnimation() 單連桿繪製與導入V-rep 利用Solvespace繪製以下尺寸及組裝連桿 尺寸 長度30連桿 長度50連桿 直徑5的連桿 導入V-rep V-rep模擬 Hyperworks安裝心得 因為安裝時間上需要花比較多時間，所以沒有錄製影片，操作過後與網路上的影片的介紹，我發現HyperWorks包括建模，線性和非線性分析，結構和系統級優化，流​​體和多體動力學模擬，電磁兼容性（EMC），多物理場分析，基於模型的開發和數據管理解決等功能，對於未來的幫助很大，讓我對於這個軟體有新認識與期待。 心得 1.學習與複習以線及座標繪製四連桿 2.單連桿繪製練習與模擬 3. 大約讀懂一些機械手臂動態模擬的程式與做動方式"},{"tags":"About","url":"./Fossil 與 Stunnel.html","title":"W3-Fossil 與 Stunnel 啟動","text":"Fossil SCM與Stunnel 啟動 Hyperworks翻譯 Solvespace四連桿三角形頂點運動軌跡 Fossil SCM與Stunnel 啟動 步驟1. 執行fossil_repo目錄執行指令 fossil init 組別.fossil *帳號密碼記得儲存 步驟2. 更改Start.bat內容(在SciTE下更改) REM tiny2017 主要針對初學 Python3 與 C 學員所建立 REM 近端使用 fossil 管理資料版本, 並且定時轉為 git 格式後上傳到 github @echo off REM 設定 y 硬碟代號與 data 目錄對應 set Disk=y subst %Disk%: \"data\" REM 設定 leo 相關對應 Home 位置 set HomePath=%Disk%:\\home set HomeDrive=%Disk%:\\home set Home=%Disk%:\\home REM 將系統 Python 程式的 io 設為 utf-8 set PYTHONIOENCODING=\"utf-8\" REM 將後續的指令執行, 以 %Disk% 為主 %Disk%: REM 設定 PYTHONPATH set PYTHONPATH=%Disk%:\\python-3.5.3-embed-amd64 REM 設定 Leo 所用的編輯器 set LEO_EDITOR=%Disk%:\\wscite\\SciTE.exe REM for fossil https 連線設定 set HTTPS=on REM 指令搜尋路徑設定 set path1=%PATH%;%Disk%:;%Disk%:\\python-3.5.3-embed-amd64;%Disk%:\\git\\bin;%Disk%:\\stunnel\\bin;%Disk%:\\sqlite-tools;%Disk%:\\python-3.5.3-embed-amd64\\Scripts;%Disk%:\\portablegit\\bin; set path2=c:\\Windows\\Microsoft.NET\\Framework\\v3.5;%Disk%:\\python-3.5.3-embed-amd64\\Lib\\site-packages; path=%path%;%path1%;%path2% start /MIN %Disk%:\\wscite\\SciTE.exe start /MIN cmd.exe start /MIN cmd.exe start /MIN cmd.exe REM 啟動 Leo 編輯器 REM %Disk%:\\Miniconda3\\python.exe %Disk%:\\apps\\launchLeo.py REM 啟動 stunnel start /MIN fossil.exe server -P 127.0.0.1:8080 %Disk%:\\tmp\\fossil_repo\\2017springcd_hw.fpssil REM 取得電腦 IP, 然後設定 %Disk%:/stunnel/config/stunnel.conf for /f \"delims=[] tokens=2\" %%a in ('ping -4 -n 1 %ComputerName% &#94;| findstr [') do set NetworkIP=%%a REM echo Network IP: %NetworkIP% REM Saved in %Disk%:\\stunnel\\config\\stunnel.conf @echo off REM 建立 stunnel.conf @echo [https] > %Disk%:\\stunnel\\config\\stunnel.conf REM 附加資料 @echo accept = %NetworkIP%:443 >> %Disk%:\\stunnel\\config\\stunnel.conf @echo connect = 127.0.0.1:8080 >> %Disk%:\\stunnel\\config\\stunnel.conf @echo TIMEOUTclose = 0 >> %Disk%:\\stunnel\\config\\stunnel.conf @echo cert = %Disk%:\\stunnel\\config\\localhost.crt >> %Disk%:\\stunnel\\config\\stunnel.conf @echo key = %Disk%:\\stunnel\\config\\localhost.key >> %Disk%:\\stunnel\\config\\stunnel.conf REM 啟動 stunnel start /MIN stunnel.exe Exit *記得要儲存 步驟3. 執行查詢IP指令(如有使用proxy，記得先關閉) ipconfig /all 步驟4. 將查詢到的IPv4 在網頁上輸入 https://IP位址 完成 可在網頁中進入設定更改成自己小組的名字 操作影片 hyperworks翻譯 Hyperworks1 逐字稿 In the 2017 release, we followed our vision and implement a lot more features, delivering more technology for your HyperWorks units investment. 在2017年版本中，我們遵循了我們的願景並實施了更多功能，為您的HyperWorks提供更多技術。 In our continuous development, we focused, as# always, on simulation-driven innovation, adding more optimization technology. 在我們的不斷發展中，我們一如既往地專注於模擬驅動的創新，增加更多的優化技術。 We added more physics simulation to the software, and we improved our parallel performance on high performance computers. 我們增加了許多的物理的模擬，我們提高了高性能電腦的平行性能。 OptiStruct, which is our implicit code, adds a lot of development in the nonlinear implicit area, but also in the optimization technology. OptiStruct是我們的隱式代碼，在非線性隱含區域中，也在優化技術中添加了很多開發。 RADIOSS, we see a lot of development in new materials and material modeling. RADIOSS，我們看到很多新材料和材料建模的發展。 You probably know that we did the acquisition of MDS a couple of years back, and we have now MDS integrated with RSDIOSS, and are doing application there. 您可能知道我們在幾年前就完成了MDS的收購，現在我們已經將MDS與RSDIOSS整合，並開始應用。 MotionSolve is based on a very unique formulation that this different from other multibody dynamics code, and the formulation lends itself very well to optimization implementation. MoMotionSolvetionSolve是根據一個非常獨特的公式，這不同於其他多體動力學代碼，MotionSolve公式本身非常好地優化實施。 So the team has worked really hard on contact formulations, got very robust. 因此團隊對於接觸公式非常努力，獲得了非常強大的。 It's very cool which kind of problems can solve with contact modelling. 這類型的問題可以解決與接觸建模這是非常酷的。 So this is along the structural solvers side on AcuSolve side we actually added the complete portfolio of turbulence and transition models that really helps us to solve problems in wind turbines and automotive industry much more accurately, and it's a big asset of physics simulation. 因此，這是沿著AcuSolve一側的結構解算方面，我們實際添加了完整的湍流和轉換模型組合，真正幫助我們更準確地解決風力渦輪機和汽車行業的問題，這是物理仿真的一個重要的資產。 And then our electromagnetic suite has actually grown last year through the acquisition of Flux, from the CEDRAT company. 然後，我們的電磁套件實際上是去年通過從CEDRAT公司收購Flux而實現的。 As well as the acquisition of WinProp, from AWE. 以及從AWE收購WinProp。 So now we have a complete frequency spectrum from low frequency electromagnetics the high frequency electromagnetics which is powered by FEKO. 所以現在我們有一個完整的頻譜從低頻電磁學的高頻電磁學由FEKO供電。 We now have a complete portfolio of physics modeling available for our customers, and it's all linked through optimization. 我們現在有一個完整的物理建模組合可用於我們的客戶，它都通過優化鏈接。 Hyperworks3 逐字稿 In OptiStruct, one of our focus areas is nonlinear large deformation analysis. 在OptiStruct中，我們的一個重點領域是非線性大變形分析。 And in 2017 we added nonlinear transient analysis. 在2017年，我們添加了非線性瞬態分析 The main purpose was to couple AcuSolve to do fluid-structure interaction. 主要目的是使AcuSolve與流體 - 結構相互作用。 But also one development that happened during the last year came out piece-wise in different point releases and is now really mature. 但是，在過去一年中發生的一個發展，在不同的積分發布中分段出現，現在已經成熟。 And 2017 is our contact analysis, so we have different ways of defining sliding contact and things like that. 2017年是我們的接觸分析，所以我們有不同的方式來定義滑動接觸和類似的東西。 The fast contact analysis for small deformation is blazing fast. 對小變形的快速接觸分析是快速的。 It's a very simple idea that makes the solution very fast, and that adds OptiStruct as really a leading nonlinear structural solver. 這是一個非常簡單的想法，使解決方案非常快，並將OptiStruct添加為真正的領先的非線性結構求解器。 Our two major optimization packages are OptiStruct for structural optimization, there's a huge multidisciplinary component, too. 我們的兩個主要優化包是用於結構優化的OptiStruct，還有一個巨大的多學科組件。 And Hyperstudy for general optimization wrap around multidisciplinary optimization. 並且Hyperstudy對一般優化包圍多學科優化。 OptiStruct we spend a lot of time continuing the development for optimization and we have now Failsafe topology optimization. OptiStruct我們花了很多時間繼續開發優化，我們現在已經失效的拓撲優化。 We kept on working on the manufacturing solution to do lattice optimization. 我們一直在製造解決方案上做晶格優化。 For the multi-model optimization it's really maturing and we find more and more applications where that helps. 對於多模型優化，它真的成熟，我們發現越來越多的應用程序，這有助於。 Our goal is actually to include all the physics in the optimizations. 我們的目標實際上是在優化中包括所有的物理。 So the team right now is working on optimization for nonlinear problems and so on. 所以團隊現在正在努力優化非線性問題等等。 And then Hyperstudy, on the other hand, is going through a new transformation of the user the user experience was changed a few years back, but we are now trying to make it much more easy to use by hiding a lot of the advanced functionalities to the regular users. 另一方面，Hyperstudy正在經歷用戶體驗在幾年前改變的用戶體驗的一個新的轉變，但是我們現在試圖通過隱藏許多高級功能來使它更容易使用 普通用戶。 And depending on the level of expertise or depending on the job that the user has to do, they can customize the user experience. 並且取決於專業水平或者根據用戶必須做的工作，他們可以定制用戶體驗。 We adds a few new connections. 我們添加了一些新的連接。 One of them is a Flux connection. 其中一個是Flux連接。 Flux is an electromagnetics code that we just acquired for low frequency electromagnetics, so we can all take a Flux database and put it into Hyperstudy into the study with that. Flux是我們剛剛為低頻電磁學採集的電磁學代碼，所以我們可以採用一個Flux數據庫，並把它放入Hyperstudy進行研究。 solvespace四連桿三角形頂點運動軌跡 桿件加入三角形顯示路徑與過程 利用excel查看路徑是否與在solvespace操作下相同(驗證路徑) V-rep 完成 Solvespace 30-50-60 cm 比例的四連桿組立, 並轉出 stl 檔案, 以 import 方式轉入 V-rep 利用 Onshape 上述相同尺寸之四連桿機構, 以 stl 轉出 (或其他格式) 後, 再轉入 V-rep 心得 1.學習如何使用Fossil SCM 2.目前Stunnel 啟動不能再proxy下進入網頁 3.英文翻譯學習 及 Hyperworks認識 4.熟悉V-rep匯入練習"},{"tags":"About","url":"./solvespace與v-rep.html","title":"W2- solvespace四連桿v-rep應用","text":"Solvespace四連桿系統繪圖模擬 v-rep應用模擬 利用Solvespace組合四連桿機構 四連桿機構 長度30連桿 長度50連桿 長度60連桿 四連桿組合 v-rep應用 虎尾科技大學 機械設計工程系-40423104-W2-V-Rep操作 from 40423104-Yan syuan on Vimeo . 心得 1.學習v-rep應用模擬四連桿 2.熟悉v-rep操作，由於沒有很熟悉所以在模擬還是有些問題還沒找到解決方法 3.隨著多次練習畫圖模擬，更了解上課內容"},{"tags":"About","url":"./solvespace與Onshape.html","title":"W1-協同設計資料與連桿實習","text":"Solvespace 與 Onshape 組立單軸旋轉連桿系統、四連桿系統繪圖模擬 git submodule指令複習 協同設計資料 1.利用 GitHub 建立 2017springcd_hw作業倉儲 2.利用 GitHub 建立 2017springcd_ag2小組倉儲 3.使用 git submodule指令，將組員增加在同一個子目錄 增加子目錄指令: A.→git clone 小組倉儲 B.→cd 倉儲資料夾 C.→git submodule add 子目錄倉儲網址 子目錄名稱 更新子目錄指令: A.git submodule update --init --recursive→抓取原倉儲的子目錄資料 B.git submodule foreach --recursive git pull origin gh-pages→更新所有的子目錄的版本(所有組員都更新) W1任務 1.使用隨身硬碟下載可攜系統，下載 tiny2017_50MB.7z , 以及 tiny2017_1GB.7z 2.如何在 tiny2017_1GB.7z 下開起LEO 步驟1 步驟2 打開完成 Solvespace四連桿機構 四連桿機構 長度30連桿 長度50連桿 長度60連桿 四連桿組合 Onshape四連桿機構 四連桿機構 長度30連桿 長度50連桿 長度60連桿 四連桿組合 心得 1.利用第一周熟悉Solvespace 與 Onshape繪圖與模擬以及組合(包含快捷鍵複習) 2.熟悉git submodule指令 3.了解這學期上課內容與每周進度"}]};