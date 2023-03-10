<#assign emojis={'呵呵':'hehe','哈哈':'haha','吐舌':'tushe','啊':'a','酷':'ku','怒':'nu','开心':'kaixin','汗':'han','泪':'lei','黑线':'heixian','鄙视':'bishi','不高兴':'bugaoxing','真棒':'zhenbang','钱':'qian','疑问':'yiwen','阴险':'yingxiang','吐':'tu','咦':'yi','委屈':'weiqu','花心':'huaxin','呼~':'hu','笑眼':'xiaoyan','冷':'len','太开心':'taikaixin','滑稽':'huaji','勉强':'mianqiang','狂汗':'kuanhan','乖':'guai','睡觉':'shuijiao','惊哭':'jingku','生气':'shengqi','惊讶':'jingya','喷':'pen','突然兴奋':'turanxingfen','挖鼻':'wabi','摊手':'tanshou','捂嘴笑':'wuzuixiao','喝酒':'hejiu','犀利':'xili','懒得理':'landeli','炸药':'zhayao','吃瓜':'chigua','小乖':'xiaoguai','你懂的':'nidongde','嘿嘿嘿':'heiheihei','欢呼':'huanhu','笑尿':'xiaoniao','酸爽':'suanshuang','紧张':'jinzhang','暗中观察':'anzhongguancha','小红脸':'xiaohonglian','呀咩爹':'yamiedie','微微一笑':'weiweiyixiao','what':'what','托腮':'tuosai','噗':'pu','困成狗':'kunchenggou','柯基暗中观察':'kejianzhongguancha','菜狗':'caigou','老虎':'laohu','嗷呜':'aowu','奥特曼':'aoteman','黑头高兴':'heitougaoxing','黑头瞪眼':'heitoudengyan','望远镜':'wangyuanjing','不听':'butin','干饭':'ganfan','大拇指':'damuzhi','胜利':'shengli','haha':'haha2','OK':'ok','红领巾':'honglingjin','爱心':'aixin','心碎':'xinsui','玫瑰':'meigui','礼物':'liwu','烟花':'yanhua','彩虹':'caihong','太阳':'taiyang','星星月亮':'xingxingyueliang','蛋糕':'dangao','茶杯':'chabei','香蕉':'xiangjiao','便便':'bianbian','药丸':'yaowan','钱币':'qianbi','蜡烛':'lazhu','沙发':'shafa','音乐':'yinyue','灯泡':'dengpao','手纸':'shouzhi'}>
<#list emojis?keys as key>
    <#assign baseContent=baseContent?replace('\\[/${key}\\]','<img src="${blog_url!}/themes/dream/source/lib/halo-comment@1.1.1/assets/emoji/${emojis[key]}.png" style="width: 1.6em;height: 1.6em;margin: auto 2px;vertical-align: middle;"/>','ri')>
    <#assign replyContent=replyContent?replace('\\[/${key}\\]','<img src="${blog_url!}/themes/dream/source/lib/halo-comment@1.1.1/assets/emoji/${emojis[key]}.png" style="width: 1.6em;height: 1.6em;margin: auto 2px;vertical-align: middle;"/>','ri')>
</#list>
<div class="email-page" style="background:#fff;">
    <style>@media screen and (max-width: 400px) {
            .email-content {
                width: 96% !important;
            }

            .email-title {
                padding: 12px 14px !important;
                font-size: 15px !important;
            }

            .email-title .icon {
                display: none;
            }

            .email-text {
                padding: 20px 20px 0 !important;
            }

            .email-text pre {
                margin: 10px 0 !important;
            }

            .email-footer {
                padding: 10px !important;
            }
        }</style>
    <div class="email-content"
         style="width:90%;max-width:660px;margin:20px auto 30px;line-height:1.5;text-align:left;overflow:hidden;border-radius:8px;box-shadow:0 2px 12px 0 rgba(0,0,0,0.1);">
        <div style="overflow:hidden;">
            <h1 class="email-title"
                style="position:relative;margin:0;-webkit-box-sizing:border-box;box-sizing:border-box;padding:14px 52px 14px 20px;line-height:1.6;font-size:16px;font-weight:normal;color:#fff;background:webkit-linear-gradient(-45deg,rgba(255,68,229,0.7),rgba(80,191,255,0.86),rgba(80,182,255,0.86));background:linear-gradient(-45deg,rgba(255,68,229,0.7),rgba(80,191,255,0.86),rgba(80,182,255,0.86));background-size:400% 400%;background-position:50% 100%;">
                Dear, 您在 ${blog_title!} 上的评论有新的回复啦！
                <img class="icon" style="position:absolute;right:16px;top:10px;width:32px;"
                     src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAMAAACdt4HsAAAABGdBTUEAALGPC/xhBQAAAFdQTFRF////////////////////////////////////////////////////////////////////////////////////////////////////////////AAAA////LEkQMAAAABx0Uk5TX69vz4+wT3Cf0N+g7+C/UH+QIDAQ8GA/wECAAMYhZPgAAAHzSURBVFjD7ZfZuoIgEIDNcilckC1B3/85T6xSoiLdna+5qmB+ZoUpm76U7Af41wBUQnjplFwgLNE5QFk/5g951GUsgMCVtmFAEgPIm3lTmvwQgK9mbwsEdyJAa36+4n0A08e3YhU0JDSjYXuAm1Zn4YAzjbhtA2q1QZCtlBGhNtRbgEGuUr5XNpyqI8IAJtfuZL/w0F3uYiEAbiL0X25IQoMDgE7aj46LH0kvujVAOcBj2oe/OeEA0oEhrgFlsB+fAGkAJXEAQj0TLED2TxV7BwjPBAPAJwwwJuA3gHQLxF9DYAmYAVxjU7Ak4uoDiPTgzE0oM0k8gCSOdrGq69yGo4cdtFWH4OVmYz46izOXRFsEqtgb4sI9z/1SP3bX4BKZuY2mxSp98wjrmctYob/gD4UVQB+qHeLmHlMLVH/mmwB+BsC2AWztQhvnAveDSA+CuAeYqgFUNo1cFMKlURRDv5FGca4QdSGhLwC9i0wiACy9lwTg82c7nwR0XuukACr//k0AyAjOxZQM6Ju3B+Q0IPeKMwHAuzn4NkYCSv3++/prAHoG5TX0dWZ4ov20A2DzkYxoCgP6KP17HxyyhOn0A30K+MaYp2oDPtWMRceQFEIwvDOptsspOGnYxjRR3z3vWNvQntX3ZiQGRsB+f3l+gDT5A4U2phC6e4RTAAAAAElFTkSuQmCC"></img>
            </h1>
            <div class="email-text" style="padding:20px 28px 10px;background:#fff;">
                <p style="margin:5px 0 5px;padding:0;line-height:24px;font-size:14px;color:#6e6e6e;"><span
                            style="font-weight:bold;color:#50bfff">${baseAuthor!'Dear'}</span> ，您好!</p>
                <p style="padding:0;line-height:24px;font-size:14px;color:#6e6e6e;">您在《<span style="color:#50bfff;">${pageTitle!}</span>》的评论:</p>
                <div style="margin:12px 0 18px;padding:14px 20px 18px 20px;white-space:pre-line;word-break:break-all;color:#6e6e6e;font-size:14px;background: repeating-linear-gradient(135deg, #f3f9ff, #f3f9ff 18px, #fff 0, #fff 30px);border-radius: 8px;border: 1px solid #f3f9ff; box-shadow: 0 2px 15px rgba(73,146,161,0.15);">${baseContent!}</div>
                <p style="padding:0;line-height:24px;font-size:14px;color:#6e6e6e;"><span style="color:#50bfff;">${replyAuthor!'匿名用户'}</span> 给您的回复：</p>
                <div style="margin:12px 0;padding:14px 20px 18px 20px;white-space:pre-line;word-break:break-all;color:#6e6e6e;font-size:14px;background: repeating-linear-gradient(135deg, #f3f9ff, #f3f9ff 18px, #fff 0, #fff 30px);border-radius: 8px;border: 1px solid #f3f9ff; box-shadow: 0 2px 15px rgba(73,146,161,0.15);">${replyContent!}</div>
                <p style="margin:0 0 16px;padding:0;line-height:24px;font-size:13px;color:#6e6e6e;">
                    <a href="${pageFullPath!}" target="_blank" style="color:#5c8fef;text-decoration:none;">点击查看完整回复</a>
                </p>
            </div>
            <div class="email-footer" style="padding:10px 20px;border-top:1px solid #eee;">
                <p style="margin:0;padding:0;line-height:24px;font-size:13px;color:#999;">* 注意：此邮件由 <a
                            href="${blog_url!}" target="_blank" style="color:#50bfff;text-decoration:none;">${blog_title!}</a>
                    自动发出，请勿回复，如有打扰，请见谅。</p>
            </div>
        </div>
    </div>
</div>