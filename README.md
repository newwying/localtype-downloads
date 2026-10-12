# Localtype 下载与安装帮助

把口语草稿和零散想法整理成清楚的 AI 提示词。选中文字，即可优化、预览并复制或替换结果；也可按计划或目标任务整理需求。

## 下载测试版（Windows 0.5.0 / Mac M 系列 0.5.0）

| 你的电脑 | 下载 |
|---|---|
| Windows x64 | [下载安装器](https://github.com/newwying/localtype-downloads/releases/download/v0.5.0/Localtype-0.5.0-Windows-x64-Setup.exe) |
| Mac M 系列 | [下载安装包与安装必看](https://github.com/newwying/localtype-downloads/releases/download/v0.5.0/Localtype-0.5.0-macOS-AppleSilicon-with-guide.zip) |

Windows x64 与 Mac M 系列现提供 0.5.0。Mac Intel 本轮暂未提供，旧版仍可从历史发布下载。

**Mac 安装前先阅读 [安装必看](https://newwying.github.io/localtype-downloads/guides/mac-arm/安装必看.html)。遇到系统拦截时，先点“完成”或“取消”，不要点“移到废纸篓”。**

<details><summary>其他下载格式</summary>

- [Windows 安装器与离线指南](https://github.com/newwying/localtype-downloads/releases/download/v0.5.0/Localtype-0.5.0-Windows-x64-with-guide.zip)
- [Windows 0.5.0 文件校验清单](https://github.com/newwying/localtype-downloads/releases/download/v0.5.0/SHA256SUMS.txt)
- [Mac 0.5.0 文件校验清单](https://github.com/newwying/localtype-downloads/releases/download/v0.5.0/SHA256SUMS-macOS-AppleSilicon.txt)
- [仅 Mac DMG](https://github.com/newwying/localtype-downloads/releases/download/v0.5.0/Localtype-0.5.0-macOS-AppleSilicon.dmg)

</details>

## 开始使用

打开软件后跟随内置引导，连接自己的 AI 工具账号，再选中文字试一次优化。

0.5.0：新增“API 密钥”连接方式，无需安装 CLI，内置 OpenAI、Gemini、Claude、DeepSeek、通义千问、Kimi、OpenRouter、硅基流动预设，也可填自定义 OpenAI 兼容地址（含本机 Ollama）；密钥只保存在本机，每个配置可选跟随系统代理、直连或指定代理；失败原因区分密钥、地区、余额、限流、网络与证书。0.4.17 起：设置页焕新，操作失败时自动生成诊断报告。0.4.16 起：应用内一键更新，Mac 升级保留辅助功能权限。0.4.15 起：内置安装与 AI CLI 调用自动使用系统代理，“测试当前模型”更准确，结果框内可再次优化，新增诊断报告。

0.4.11 已支持旧内置模型预设精简与恢复；自建或改过的配置保留。在模型页可“恢复升级前预设”。

[Windows English guide](https://newwying.github.io/localtype-downloads/guides/windows/Start%20here.html) · [Mac English guide](https://newwying.github.io/localtype-downloads/guides/mac-arm/Start%20here.html) · [Windows 安装帮助](https://newwying.github.io/localtype-downloads/guides/windows/先看这里.html) · [更新说明](https://github.com/newwying/localtype-downloads/releases/tag/v0.5.0)

当前为测试版。Windows 未进行发布者代码签名，首次下载或运行可能被系统拦截；先核实来源与文件校验，再按安装帮助处理。Windows 0.5.0 已实测覆盖安装保留配置与模板（应用内更新机制已于 0.4.16 实测）；API 直连已用模拟服务端测试各厂商协议，尚未用真实密钥逐一实测；另一台 Windows 的真实账号慢请求仍需现场复测。Mac 0.5.0 使用自建证书签名，未经 Apple 公证，首次打开可能被系统拦截。Mac 0.5.0 已在 Mac M 系列实测从 0.4.17 覆盖升级保留配置与辅助功能权限（无需重新授权）；其他输入应用和 macOS 版本尚未逐一验证。首次使用或更新后，请按应用内提示检查辅助功能权限。

## 问题与建议

[提交问题](https://github.com/newwying/localtype-downloads/issues/new?template=bug.yml) · [提交建议](https://github.com/newwying/localtype-downloads/issues/new?template=feature.yml)

需要登录 GitHub，提交内容会公开。请勿附带账号凭据、私人提示词或未经检查的日志。

联系邮箱：wuyu_29@qq.com（复制后自行发送）。

本仓库用于软件分发、安装帮助与反馈，不包含软件源码。软件及文档版权归其权利人所有，公开下载不代表授予源码或再分发许可。
