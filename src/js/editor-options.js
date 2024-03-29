(function () {
  const customElement = [
    {
      value: '<mew-subtitle>$副标题</mew-subtitle>',
      html: 'mew-subtitle | 副标题'
    },
    {
      value: '<mew-music song="$网易云音乐id"></mew-music>',
      html: 'mew-music | 网易云单曲'
    },
    {
      value: '<mew-music playlist="$网易云音乐歌单id" order="$[list(列表循环,默认)|random(随机)](非必填)" fold="$[false(折叠,默认)|true(不折叠)](非必填)"></mew-music>',
      html: 'mew-music | 网易云歌单'
    },
    {
      value: '<mew-music url="$音频资源链接" name="$音频名称(非必填,默认: 音乐)" artist="$音频艺术家(非必填,默认: 未知歌手)" cover="$音频封面(非必填)" lrc="$音频歌词LRC文件链接(非必填)"></mew-music>',
      html: 'mew-music | 自定义单曲'
    },
    {
      value: '<mew-bilibili bvid="$视频的bvid" width="$视频模块宽度(非必填,默认: 100%)"></mew-bilibili>',
      html: 'mew-bilibili | bilibili视频'
    },
    {
      value: '<mew-tabs>\n' +
        '<mew-tab-page title="$第一页标题">\n' +
        '$第一页内容\n' +
        '</mew-tab-page>\n' +
        '<mew-tab-page title="$第二页标题">\n' +
        '$第二页内容\n' +
        '</mew-tab-page>\n' +
        '</mew-tabs>',
      html: 'mew-tabs | 标签页'
    },
    {
      value: '<mew-cloud type="$网盘类型[default(网络来源)|360(360云盘)|bd(百度网盘)|wy(微云)|ali(阿里云盘)|github(Github仓库)|gitee(Gitee仓库)|lz(蓝奏云)]" url="$下载链接" password="$下载提取码">$文件资源描述说明</mew-cloud>',
      html: 'mew-cloud | 网盘链接'
    },
    {
      value: '<mew-progress value="$进度(默认: 50%)" color="$进度条颜色(默认: var(–theme))"></mew-progress>',
      html: 'mew-progress | 进度条'
    },
    {
      value: '<mew-panel title="$面板标题">\n' +
        '$面板内容\n' +
        '</mew-panel>',
      html: 'mew-panel | 面板'
    },
    {
      value: '<mew-message type="$消息类型[error|success|warning|info]">$消息内容</mew-message>',
      html: 'mew-message  | 消息'
    },
    {
      value: '<mew-hr></mew-hr>',
      html: 'mew-hr | 信封分割线'
    },
    {
      value: '<mew-timeline>\n' +
        '    <mew-timeline-title type="$时间标题类型[error|success|warning|info]">$时间标题</mew-timeline-title>\n' +
        '    <mew-timeline-item type="$时间子项1类型[error|success|warning|info]" title="$时间子项1标题">$时间子项1具体内容</mew-timeline-item>\n' +
        '    <mew-timeline-item type="$时间子项2类型[error|success|warning|info]" title="$时间子项2标题">$时间子项2具体内容</mew-timeline-item>\n' +
        '</mew-timeline>',
      html: 'mew-timeline | 时间线'
    },
    {
      value: '<mew-btn color="$按钮颜色(非必填,默认: var(–theme))" icon="$按钮的Remix图标(非必填)" target="$链接跳转方式(非必填)" href="$按钮跳转链接(非必填)">打开博客</mew-btn> ',
      html: 'mew-btn | 按钮'
    },
    {
      value: '<mew-quote avatar="$引言作者头像(非必填)" href="$引言作者链接(非必填)" name="$引言作者名称(非必填)">$引言内容</mew-quote>',
      html: 'mew-quote | 引言'
    },
    {
      value: '<mew-link img="$链接封面图(非必填)" title="$网页标题" href="$网页地址">$网页摘要说明</mew-link>',
      html: 'mew-link | 外部链接'
    },
    {
      value: '<mew-link type="$文章类型[post(默认)|sheet](非必填)" id="$文章或页面的id(id和别名二选一)" slug="$文章或页面的别名(id和别名二选一)"></mew-link>',
      html: 'mew-link | 博客文章/页面链接'
    },
    {
      value: '<mew-video src="$视频链接" width="$宽度百分比(非必填,默认: 100%)" loop="$循环播放[true|false(默认)]" controls="$显示控制按钮[true(默认)|false]" autoplay="$自动播放[true|false(默认)]"></mew-video>',
      html: 'mew-video | 视频播放器'
    },
    {
      value: '<mew-photos>\n' +
        '  <img src="$图1地址" alt="$图1描述"/>\n' +
        '  <img src="$图2地址" alt="$图2描述"/>\n' +
        '</mew-photos>',
      html: 'mew-photos | 画廊'
    },
    {
      value: '<mew-raw>\n' +
        '$被隔离的内容\n' +
        '</mew-raw>',
      html: 'mew-raw | 样式隔离'
    },
    {
      value: '<mew-hide>\n' +
        '$评论后可见的内容\n' +
        '</mew-hide>',
      html: 'mew-hide | 评论后可见'
    }
  ]
  window.handleEditorOptions = (editorComponent) => {
    handleCustomElement()
    return {
      hint: {
        emoji: handleEmojiImg(),
        extend: [
          {
            key: '<mew',
            hint: key => {
              return customElement.filter(item => item.value.indexOf(key.toLocaleLowerCase()) > -1)
            }
          }
        ]
      }
    }
  }

  function handleCustomElement() {
    let cssText = Array.from(
      new Set(customElement
        .map(item => item.html)
        .map(html => html.substring(0, html.indexOf(' ')))
      )
    ).map(item => `${item} {
    position: relative;
    display: block;
    width: 100%;
    height: 48px;
    overflow: hidden;
    user-select: none;
}

${item}:before {
    content: '${item} 自定义元素';
    position: absolute;
    display: block;
    background: #eee;
    border-radius: 8px;
    height: 48px;
    padding: 10px;
    width: 100%;
    text-align: center;
    font-family: monospace;
    color: #999;
}`)
      .join('\n')
    const style = document.createElement('style')
    style.appendChild(document.createTextNode(cssText))
    document.getElementById('vditor').before(style)
  }

  function handleEmojiImg() {
    let emojiList = ['hehe', 'haha', 'tushe', 'a', 'ku', 'nu', 'kaixin', 'han', 'lei', 'heixian', 'bishi', 'bugaoxing', 'zhenbang', 'qian', 'yiwen', 'yingxiang', 'tu', 'yi', 'weiqu', 'huaxin', 'hu', 'xiaoyan', 'len', 'taikaixin', 'huaji', 'mianqiang', 'kuanhan', 'guai', 'shuijiao', 'jingku', 'shengqi', 'jingya', 'pen', 'turanxingfen', 'wabi', 'tanshou', 'wuzuixiao', 'hejiu', 'xili', 'landeli', 'zhayao', 'chigua', 'xiaoguai', 'nidongde', 'heiheihei', 'huanhu', 'xiaoniao', 'suanshuang', 'jinzhang', 'anzhongguancha', 'xiaohonglian', 'yamiedie', 'weiweiyixiao', 'what', 'tuosai', 'pu', 'kunchenggou', 'kejianzhongguancha', 'caigou', 'laohu', 'aowu', 'aoteman', 'heitougaoxing', 'heitoudengyan', 'wangyuanjing', 'butin', 'ganfan', 'damuzhi', 'shengli', 'haha2', 'ok', 'honglingjin', 'aixin', 'xinsui', 'meigui', 'liwu', 'yanhua', 'caihong', 'taiyang', 'xingxingyueliang', 'dangao', 'chabei', 'xiangjiao', 'bianbian', 'yaowan', 'qianbi', 'lazhu', 'shafa', 'yinyue', 'dengpao', 'shouzhi']
    let emojis = {}
    emojiList.forEach(key => {
      emojis[key] = `/themes/dream/source/img/emoji/${key}.png`
    })
    return emojis
  }
})()