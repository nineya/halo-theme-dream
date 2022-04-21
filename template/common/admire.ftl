<div class="admire">
    <div class="admire-content">
        <#if (settings.donate_alipay?? && settings.donate_alipay!='') || (settings.donate_wechat?? && settings.donate_wechat!='')>
            <button class="donate">
                <i class="fa fa-credit-card"></i>
                <span>打赏</span>
                <div class="donate-list">
                    <ol>
                        <#if settings.donate_alipay?? && settings.donate_alipay!=''>
                            <li><img src="${settings.donate_alipay!}" alt="支付宝捐赠"></li>
                        </#if>
                        <#if settings.donate_wechat?? && settings.donate_wechat!=''>
                            <li><img src="${settings.donate_wechat!}" alt="微信捐赠"></li>
                        </#if>
                    </ol>
                </div>
            </button>
        </#if>
        <button class="agree like" data-id="${post.id!0}" data-likes="${post.likes!0}">
            <i class="fa fa-thumbs-o-up"></i>
            <span>赞<span>${post.likes!0}</span></span>
        </button>
    </div>
    <span>如果觉得文章对你有用，请随意赞赏</span>
</div>