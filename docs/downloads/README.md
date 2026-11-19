# iPhone 定位控制台

这是在 Mac 或 Windows 电脑上运行的本地网站。网页通过本地 Python 程序连接自己的 USB iPhone，发送开发者定位模拟指令。它不能仅凭 iPhone Safari 打开远程网页来修改系统定位。

## Windows 首次使用（测试版）

适用于 Windows 10（22H2）/ 11 的 Intel / AMD 64 位电脑；暂不支持 Windows ARM、32 位系统或 WSL。此版本已完成代码兼容性与模拟测试，但尚未完成 Windows 实机连接验证。

1. 按连接库要求，从 [Microsoft Store 安装 iTunes](https://apps.microsoft.com/detail/9pb2mz1zmb1s)，打开一次，准备 Apple Mobile Device Service。已有“Apple 设备”App 时可先用它确认手机能被识别；助手仍提示缺少服务时，按上述方式安装 iTunes。不需要另外找第三方驱动。
2. 右键下载的 ZIP，选择“全部解压”，保存到自己账户的“下载”或“文档”文件夹。双击 `启动.cmd`，不要在压缩包预览中直接打开。助手无需管理员运行。
3. 首次联网自动下载并校验运行组件、准备 Python 和依赖，之后自动打开地图。后续启动复用组件，不需要手动装 Python。保持启动窗口开启。
4. USB 连接 iPhone，解锁并信任电脑，开启开发者模式、重启确认；在控制台点击“准备连接”，选点后点击“开始模拟”。结束前点击“停止模拟”，在手机核对位置恢复，再关闭窗口。

Windows 简易连接推荐 **iOS 17.4 或更新版本**；**暂不支持 iOS 17.0–17.3.x**，这些版本会在操作前给出提示。iOS 13–16 保留旧版连接方式，效果仍须实机确认。不同 iOS 版本与 App 可能不接受模拟位置。

如果 SmartScreen 显示“Windows 已保护你的电脑”，先确认文件从本站下载且未被改动，确认可信后可在“更多信息”里选择“仍要运行”。没有该按钮、设备受组织管理或明确报告病毒时，应保留提示并联系管理员或反馈问题；无需关闭防护。启动器只为当前进程设置 PowerShell 执行策略，不修改系统的永久执行策略。

安装失败会保留报错，关闭窗口后重新双击重试。助手运行时请继续使用原来的窗口；第二个启动窗口不会重新安装或覆盖正在使用的环境。强制关闭窗口不能保证手机立即恢复定位。

[Apple：电脑无法识别 iPhone](https://support.apple.com/zh-cn/108643) · [连接库 Windows 安装要求](https://doronz88.github.io/pymobiledevice3/installation/) · [iOS 17 隧道兼容性](https://doronz88.github.io/pymobiledevice3/guides/ios17-tunnels/)

## 首次打开被 macOS 拦截时

如果看到“未打开‘启动.command’”或“Apple 无法验证”的提示：

1. 在提示窗口点击“完成”，保留下载文件。
2. 打开“系统设置 → 隐私与安全性”，向下滚动。
3. 找到“启动.command”对应的提示，点击“仍要打开”。
4. 在确认弹窗点击“仍要打开”（部分系统版本显示为“打开”），并按提示完成身份验证。等待助手自动准备组件并打开地图。

当前助手未经过 Apple 签名和公证。请仅对确认下载自本站、未被改动的文件执行上述步骤，无需关闭系统安全保护。

没看到“仍要打开”？重新双击“启动.command”，再返回设置查看。受公司或学校管理的 Mac 可能需要管理员协助。此说明仅适用于“无法验证”提示；“将损坏电脑”或“文件已损坏”需要另行检查。

Apple 官方说明：https://support.apple.com/zh-cn/102445

## Mac 首次使用：下载、双击、连接手机

1. 在 macOS 13 或更新版本上解压下载包，双击 `启动.command`。支持 Apple Silicon 和 Intel Mac。无需预装 Python，也无需 Homebrew。
2. 保持联网，等待助手自动下载运行工具、Python 和手机连接组件。首次可能需要几分钟，终端会显示进度；后续启动复用本机组件。下载失败时关闭窗口后重新双击即可重试。
3. 用支持传输数据的 USB 线连接 iPhone，解锁并确认“信任此电脑”。在“设置 → 隐私与安全性”中启用开发者模式，按手机提示重启确认。
4. 浏览器会自动打开控制台。点击“准备连接”，首次可能下载开发者支持文件。地图会自动加载，搜索地点或点击地图即可选点，无需申请 Key。
5. 点击“开始模拟”，在手机的目标 App 上确认实际效果。使用完毕点击“停止模拟”，确认位置恢复后再关闭助手。

已有控制台窗口时请继续使用该窗口，避免重复启动多个助手。关闭网页不会停止模拟。

首次打开的放行步骤见本文开头。若运行中强制结束安装导致下次提示另一个窗口正在准备，请先确认所有安装窗口已退出，再删除 `.runtime/setup.lock` 空文件夹重试。

## 地图无需配置，高德可选

默认地图使用 OpenStreetMap，搜索使用 Photon 公共服务。输入城市和地点名称，点击“搜索”后选择结果，也可以直接点击地图。地图选点只更新目标，只有点击“开始模拟”才操作手机。OpenStreetMap 返回的 WGS 84 坐标直接使用。

浏览地图时地图范围会发送给 OpenStreetMap；点击搜索时搜索词会发送给 Photon。本程序不会向公共网站发送手机配对信息。公共地图服务无可用性保证，中文地点覆盖、网络速度可能与高德不同；没有搜索结果时可加上城市名称或直接点击地图选点。搜索只在点击或回车时请求，有限流和短期缓存，不提供离线地图或批量下载。

需要高德时，点击“地图设置”，切换到高德并展开“配置高德地图（可选）”：

1. 在[高德开放平台](https://console.amap.com/dev/key/app)申请 **Web端（JS API）** Key 与配套 `securityJsCode`。
2. 填入本机控制台并保存，地图会自动切换。已配置高德的助手下次仍优先加载高德。清除配置后自动回到免配置地图。
3. 若配置了域名白名单，按高德规则允许本机访问地址。保存不代表密钥已经验证有效；加载错误会显示在页面上。

高德安全密钥保存在 `.runtime/amap.json`，Mac 上权限为 `0600`，Windows 上继承所在用户目录的访问权限；由本机代理添加到受限地图请求，不回传给地图 iframe。浏览地图和搜索内容会发送给高德。高德第三方 SDK 在隔离 iframe 中运行，不获取设备控制令牌。默认地图只执行下载包内的脚本，不加载外部地图脚本。

高德的 GCJ-02 坐标在程序内部近似转换为 WGS 84；这不是高德官方逆转换服务，不保证测绘精度。OpenStreetMap 坐标不进行此转换。页面无需输入或查看经纬度。

## 状态含义

- **设备已接受模拟定位指令**：iOS 17+ 的 DVT 设置调用收到协议回复；不代表目标 App 已采用这个位置。
- **模拟定位指令已发送**：旧版 iOS 接口只提供发送语义，没有设置确认。
- **停止指令已发送**：接口没有停止确认。需要在手机上验证真实位置是否恢复；若没有恢复，重启 iPhone 后检查。
- **连接中断 / 超时**：定位状态未知。重新连接同一台手机，刷新设备并点击“停止模拟”。停止按钮可清理此前会话遗留的模拟，不要求本进程曾启动过会话。

关闭网页不会自动停止模拟。正常退出本地程序会尽力发送停止指令；强制结束进程、关机或拔线不能保证即时恢复。请先在网页中停止并验证。

## 兼容性与边界

锁定使用 `pymobiledevice3==11.12.5`。iOS 17+ 使用 `PreferredRsdTunnel → DvtProvider → LocationSimulation`，Mac 优先尝试系统连接方式，必要时使用库的用户态连接方式，Windows 的 iOS 17.4+ 使用用户态连接方式；旧版 iOS 使用 `com.apple.dt.simulatelocation`。不越狱，不自动开启开发者模式，不关闭系统安全保护或修改系统服务。

具体 iOS 版本、设备与目标 App 的效果需要实机测试。第三方 App 可以识别或忽略模拟定位；不保证 Apple“查找”、所有 App、断线后的保持时间或系统更新后的兼容性，也不修改 IP 所属地区。

## 本地运行与数据

服务只监听 `127.0.0.1`，使用随机会话令牌及同源、Host 校验。设备 API 不开放到公网。公共网站只能通过链接打开助手主页。

启动脚本默认使用 `http://127.0.0.1:8765/`，端口被占用时选择其他可用端口，自动打开并在终端显示新地址。公共网站的“其他地址”可以填写该地址。

首次启动从 Astral 官方 GitHub Release 下载固定版本 uv 0.12.13，并核对内置 SHA-256；uv 自动下载 managed Python 3.12，从 PyPI 安装固定版本连接库。运行环境和缓存仅保存在助手目录的 `.runtime/` 与 `.venv/`，不改全局 Python、PATH 或 shell 配置。请不要向他人分享这两个目录，公开下载包不包含它们。

请把整个助手文件夹放在准备长期使用的位置。移动后启动器会检查并重建失效环境，可能需要重新下载。卸载时先停止模拟、关闭助手，再删除助手目录。

程序必须在接有手机的电脑上运行，不能只靠 iPhone Safari 或云服务器改变系统定位。

## 验证与已知限制

下载包附有 Python 和 JavaScript 回归测试，覆盖本地接口访问限制、控制状态、高德代理、坐标转换及地图交互。这些测试不会设置或清除真实手机位置。

```sh
.venv/bin/python -m unittest test_controller.py test_amap.py test_open_map.py test_platform.py
node --test test_amap_frame.cjs test_coordinates.cjs test_map_provider.cjs
```

Windows 可使用 `.venv\Scripts\python.exe -m unittest test_controller.py test_amap.py test_open_map.py test_platform.py` 运行同一组测试。

第三方地图 SDK 在隔离 iframe 内可能报告跨框架访问日志。控制台通过公开的地图尺寸接口处理窗口变化；地图与手机控制接口保持隔离。

具体设备的设置、停止和目标 App 的定位效果，需要使用者在自己的手机上验证，不能仅以网页状态作为实际位置的证明。

## 依据

- [uv：自动安装 Python](https://docs.astral.sh/uv/guides/install-python/)
- [uv：支持平台](https://docs.astral.sh/uv/reference/policies/platforms/)
- [OpenStreetMap 地图使用政策](https://operations.osmfoundation.org/policies/tiles/)
- [Photon 公共搜索服务说明](https://github.com/komoot/photon#demo-server)

- [维护者 CLI 示例与准备条件](https://doronz88.github.io/pymobiledevice3/guides/cli-recipes/)
- [定位接口源码及确认语义](https://github.com/doronz88/pymobiledevice3/blob/master/pymobiledevice3/services/dvt/instruments/location_simulation.py)
- [Apple：开启开发者模式](https://developer.apple.com/documentation/xcode/enabling-developer-mode-on-a-device)
- [Apple：模拟位置来源标记](https://developer.apple.com/documentation/corelocation/cllocationsourceinformation/issimulatedbysoftware)
- [高德：JS API 安全密钥与代理](https://lbs.amap.com/api/javascript-api-v2/guide/abc/jscode)
- [高德：地图事件](https://lbs.amap.com/api/javascript-api-v2/guide/events/map_overlay)
- [高德：坐标转换方向](https://lbs.amap.com/api/javascript-api-v2/guide/transform/convertfrom)

坐标计算公式参考 coordtransform（MIT），相关许可见 `THIRD_PARTY_NOTICES.md`。

连接库为第三方开源依赖，按其原有许可证分发。此交付只包含控制台源码，安装时从 PyPI 获取依赖。
