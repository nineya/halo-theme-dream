<div class="card widget" id="profile">
    <div class="card-content">
        <nav class="level">
            <div class="level-item has-text-centered" style="flex-shrink: 1">
                <div>
                    <figure class="image">
                        <img class="avatar" src="${user.avatar!}" alt="${user.nickname!}">
                    </figure>
                    <p class="nickname">${user.nickname!}</p>
                    <p class="motto" id="spark-input"></p>
                    <script type="text/javascript" src="${theme_base!}/source/js/spark-input.min.js"></script>
					<script>
                        window.sparkInput("spark-input", ['${user.description!}'<#if settings.color_character?? && settings.color_character!=''>,${settings.color_character!}</#if>]);
					</script>
                    <#if settings.profile_location?? && settings.profile_location!=''>
                    <p class="address">
                        <i class="fa fa-map-marker"></i>
                        <span>${settings.profile_location!}</span>
                    </p>
                    </#if>
                </div>
            </div>
        </nav>
        <nav class="level">
            <div class="level-item">
                <div>
                    <p class="heading">文章</p>
                    <p class="value"><@postTag method="count">${count}</@postTag></p>
                </div>
            </div>
            <div class="level-item has-text-centered is-marginless">
                <div>
                    <p class="heading">分类</p>
                    <p class="value"><@categoryTag method="count">${count}</@categoryTag></p>
                </div>
            </div>
            <div class="level-item">
                <div>
                    <p class="heading">标签</p>
                    <p class="value"><@tagTag method="count">${count}</@tagTag></p>
                </div>
            </div>
        </nav>
        <div class="level">
            <a class="level-item button is-link is-rounded" href="${settings.profile_follow_url!'${context!}'}" target="_blank">关注我</a>
        </div>
        <div class="level">
            <#if settings.social_github?? && settings.social_github!=''>
                <a class="level-item button is-transparent" target="_blank" title="Github主页" href="https://github.com/${settings.social_github}">
                    <i class="fa fa-github"></i>
                </a>
            </#if>
            <#if settings.social_qq?? && settings.social_qq!=''>
                <a class="level-item button is-transparent" target="_blank" title="QQ聊天" href="tencent://message/?uin=${settings.social_qq}&Site=&Menu=yes">
                    <i class="fa fa-qq"></i>
                </a>
            </#if>
            <#if settings.social_weibo?? && settings.social_weibo!=''>
                <a class="level-item button is-transparent" target="_blank" title="Weibo" href="https://weibo.com/${settings.social_weibo}">
                    <i class="fa fa-weibo"></i>
                </a>
            </#if>
            <#if settings.social_twitter?? && settings.social_twitter!=''>
                <a class="level-item button is-transparent" target="_blank" title="Twitter" href="https://twitter.com/${settings.social_twitter}">
                    <i class="fa fa-twitter"></i>
                </a>
            </#if>
            <#if settings.social_facebook?? && settings.social_facebook!=''>
                <a class="level-item button is-transparent" target="_blank" title="Facebook" href="https://www.facebook.com/${settings.social_facebook}">
                    <i class="fa fa-facebook"></i>
                </a>
            </#if>
            <#if settings.social_email?? && settings.social_email!=''>
                <a class="level-item button is-transparent" target="_blank" title="给我发邮件" href="mailto:${settings.social_email}">
                    <i class="fa fa-envelope"></i>
                </a>
            </#if>
            <#if settings.social_telegram?? && settings.social_telegram!=''>
                <a class="level-item button is-transparent" target="_blank" title="Telegram" href="https://t.me/${settings.social_telegram}">
                    <i class="fa fa-telegram"></i>
                </a>
            </#if>
            <#if settings.social_csdn?? && settings.social_csdn!=''>
                <a class="level-item button is-transparent" target="_blank" title="CSDN主页" href="${settings.social_csdn}">
                    <i class="fa fa-copyright"></i>
                </a>
            </#if>
            <a class="level-item button is-transparent" target="_blank" title="RSS订阅" href="${rss_url!}">
                <i class="fa fa-rss"></i>
            </a>
        </div>
    </div>
</div>