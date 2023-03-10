<p align="center">
<img src="https://cdn.jsdelivr.net/gh/nineya/halo-theme-dream/screenshot.png" alt="halo-theme-dream" width="180">
</p>
<h1 align="center">halo-theme-dream</h1>

<p align="center">
<a href="https://github.com/nineya/halo-theme-dream/releases"><img alt="releases" src="https://img.shields.io/github/release/nineya/halo-theme-dream.svg?style=flat-square"/></a>
<a href="https://github.com/nineya/halo-theme-dream/blob/master/LICENSE"><img alt="license" src="https://img.shields.io/github/license/nineya/halo-theme-dream?style=flat-square"/></a>
<a href="https://github.com/nineya/halo-theme-dream/releases"><img alt="downloads" src="https://img.shields.io/github/downloads/nineya/halo-theme-dream/total.svg?style=flat-square"/></a>
<a href="https://github.com/nineya/halo-theme-dream/releases"><img alt="size" src="https://img.shields.io/github/languages/code-size/nineya/halo-theme-dream?style=flat-square"/></a>
<a href="https://github.com/nineya/halo-theme-dream/commits"><img alt="commits" src="https://img.shields.io/github/last-commit/nineya/halo-theme-dream.svg?style=flat-square"/></a>
<a href="https://github.com/nineya/halo-theme-dream#donate"><img alt="donate" src="https://img.shields.io/badge/$-donate-ff69b4.svg?style=flat-square"/></a>
</p>


## 一、预览

![玖涯博客](https://cdn.jsdelivr.net/gh/nineya/halo-theme-dream@master/preview.png)

预览：[主题预览](https://github.com/nineya/halo-theme-dream/discussions/72)
> 如果你有计划长期使用 `Dream` 主题，也来[这里](https://github.com/nineya/halo-theme-dream/discussions/72)留下你的博客链接吧。



## 二、说明

梦之城，童话梦境，动漫类型博客主题。

关于主题使用上的一些问题可以参见 [主题使用手册-基础篇](https://blog.nineya.com/archives/94.html)

如果还有疑问，欢迎加入 <a target="_blank" href="https://qm.qq.com/cgi-bin/qm/qr?k=X7p7Bs21cgtkQ0dRfzmBsuWqNNQc10hn&jump_from=webapi">Dream 主题交流群：638168592</a>

欢迎参与主题开发的一些<a href="https://github.com/nineya/halo-theme-dream/discussions">问题探讨</a>

## 三、版本适配关系

| 主题版本    | 适配Halo版本                | 测试用Halo版本 |
| ----------- | --------------------------- | -------------- |
| 1.x         | 1.4.x及以下（不保证适配性） | 1.4.8          |
| 2.0.0-2.0.1 | 1.4.x                       | 1.4.8          |
| 2.0.2+      | 1.5.x                       | 1.5.3          |

> 主题未在配置要求中对 Halo 最低版本限制得太死，但 Halo 不同版本开发接口略有不同，在不适配的版本中无法保证完全兼容。
>
> 相对来说，测试用的 Halo 版本具有最好的适配性，是主题推荐的 `Halo` 版本。



## 四、安装 & 更新

### 4.1 安装包安装 & 更新

1. 进入主题 `Release` 界面：https://github.com/nineya/halo-theme-dream/releases 下载主题压缩包 `halo-theme-dream.zip` 压缩包文件；
2. 进入博客后台管理 `外观->主题->安装->本地上传`，选择下载的 `halo-theme-dream.zip` 安装包进行上传；
3. 等待安装完成；
4. 更新主题时同样前往主题  `Release` 界面下载主题安装包，然后通过 `外观->主题->Dream->更多->从主题包更新` 方法上传安装包进行更新。



### 4.2 在线安装 & 更新

1. 复制主题仓库地址 `https://github.com/nineya/halo-theme-dream.git`

2. 进入博客后台管理 `外观->主题->安装->远程下载`，黏贴仓库地址进行安装；
3. 等待安装完成；
4. 在线更新主题时，通过 ``外观->主题->Dream->更多->在线更新` 方法进行更新。

> 在线安装 & 更新的方式不推荐：
>
> 1. 因为由于 `GitHub` 的网络问题，很大几率会安装& 更新失败；
> 2. 主题是经过源码编译的，直接从仓库下载包含了主题的源码以及开发所需的相关文件，这些文件并不是安装主题所需要的。



### 4.3 安装配置邮件模板

配置邮件模板需要登录服务器添加模板文件，并重启 `Halo`。

1. 登录服务器，按步骤执行如下命令：
```bash
# 创建邮件模板目录
mkdir -r ~/.halo/templates/common/mail_template/
cd ~/.halo/templates/common/mail_template/

# 创建mail_notice.ftl文件
vi mail_notice.ftl
## 文件内容如下（只需这一行即可）：
<#include "../../themes/dream/mail_template/mail_notice.ftl">

# 创建mail_reply.ftl文件
vi mail_reply.ftl
## 文件内容如下（只需这一行即可）：
<#include "../../themes/dream/mail_template/mail_reply.ftl"
```

2. 重启 `Halo`

## 五、参与主题开发

> 推荐使用 IDEA 进行主题开发，能够比较好的支持 FreeMarker。

1. 开发环境准备
    - 安装 `nodejs` 版本需要在 `15+`；
    - 主题目录下执行 `npm i` 安装依赖；

2. npm 命令
    - `npm run build` 执行主题打包操作，主题将被打包为压缩包文件存放在 `dist/` 目录下，同时 `source` 目录下的文件也将被更新。
    - `npm run build --devel` 开发模式进行主题打包，`js` 和 `css` 不会被做压缩和混淆处理，方便排查问题。
    - `npm run cdn --tag=$version`  创建 `FreeCDN` 清单文件，必须指定 `tag` 参数，值为本地代码将发布到 `GitHub` 仓库的版本标签。
    - `npm run release --tag=$version` 发布模式执行主题打包操作，将自动更新主题中的版本号，并使用这个版本标签重新创建  `FreeCDN` 清单文件。


## 六、打赏项目

感谢您对本项目的喜爱，您的打赏是对本项目最好的支持！本项目所有打赏收益将全部投入到支付宝公益项目，捐赠记录在[关于我的](https://blog.nineya.com/about)中可见，一起为公益事业加油。

![打赏项目](https://blog.nineya.com/upload/2022/08/funding.png)
