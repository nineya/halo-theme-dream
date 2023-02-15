<div class="card widget profile ${settings.hide_profile!}">
    <div class="card-content">
        <nav class="level">
            <div class="level-item" style="flex-direction: column;">
              <figure class="image">
                <img class="avatar" src="${user.avatar!}" alt="${user.nickname!}">
              </figure>
              <p class="nickname">${user.nickname!}</p>
              <p class="motto spark-input">${user.description!}</p>
                <#if settings.profile_location?? && settings.profile_location!=''>
                  <p class="address">
                    <i class="fa fa-map-marker"></i>
                    <span>${settings.profile_location!}</span>
                  </p>
                </#if>
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
        <#if settings.profile_theme_button?? && settings.profile_theme_button!=''>
            <#assign profile_theme_button=settings.profile_theme_button?split('|')>
            <div class="level">
                <a class="level-item button is-link is-rounded" href="${profile_theme_button[1]!}" target="_blank" rel="nofollow noopener noreferrer">${profile_theme_button[0]!}</a>
            </div>
        </#if>
        <div class="level"><#if settings.social_github?? && settings.social_github!=''>
                <a class="level-item button is-transparent" target="_blank" title="Github主页" href="https://github.com/${settings.social_github}" rel="nofollow noopener noreferrer">
                    <i class="fa fa-github"></i>
                </a>
            </#if>
            <#if settings.social_qq?? && settings.social_qq!=''>
                <a class="level-item button is-transparent" target="_blank" title="QQ聊天" href="tencent://message/?uin=${settings.social_qq}&Site=&Menu=yes" rel="nofollow noopener noreferrer">
                    <i class="fa fa-qq"></i>
                </a>
            </#if>
            <#if settings.social_weibo?? && settings.social_weibo!=''>
                <a class="level-item button is-transparent" target="_blank" title="Weibo" href="https://weibo.com/${settings.social_weibo}" rel="nofollow noopener noreferrer">
                    <i class="fa fa-weibo"></i>
                </a>
            </#if>
            <#if settings.social_twitter?? && settings.social_twitter!=''>
                <a class="level-item button is-transparent" target="_blank" title="Twitter" href="https://twitter.com/${settings.social_twitter}" rel="nofollow noopener noreferrer">
                    <i class="fa fa-twitter"></i>
                </a>
            </#if>
            <#if settings.social_facebook?? && settings.social_facebook!=''>
                <a class="level-item button is-transparent" target="_blank" title="Facebook" href="https://www.facebook.com/${settings.social_facebook}" rel="nofollow noopener noreferrer">
                    <i class="fa fa-facebook"></i>
                </a>
            </#if>
            <#if settings.social_email?? && settings.social_email!=''>
                <a class="level-item button is-transparent" target="_blank" title="给我发邮件" href="mailto:${settings.social_email}" rel="nofollow noopener noreferrer">
                    <i class="fa fa-envelope"></i>
                </a>
            </#if>
            <#if settings.social_telegram?? && settings.social_telegram!=''>
                <a class="level-item button is-transparent" target="_blank" title="Telegram" href="https://t.me/${settings.social_telegram}" rel="nofollow noopener noreferrer">
                    <i class="fa fa-telegram"></i>
                </a>
            </#if>
            <#if settings.custom_social_options?? && settings.custom_social_options!=''>
                <#assign custom_social_options=settings.custom_social_options?split('\n')>
                <#list custom_social_options as custom_social_option>
                    <#assign social_option=custom_social_option?split('|')>
                    <#assign social_name=(social_option[0]?? && social_option[0]?trim!='')?then(social_option[0]?trim,'')>
                    <#assign social_logo=(social_option[1]?? && social_option[1]?trim!='')?then(social_option[1]?trim,'')>
                    <#assign social_link=(social_option[2]?? && social_option[2]?trim!='')?then(social_option[2]?trim,'')>
                    <#if social_name!='' || social_logo!='' || social_link!=''>
                      <a class="level-item button is-transparent" target="_blank" title="${social_name}" href="${social_link}" rel="nofollow noopener noreferrer">
                        <i class="${social_logo}"></i>
                      </a>
                    </#if>
                </#list>
            </#if>
            <#if settings.social_rss!true >
                <a class="level-item button is-transparent" target="_blank" title="RSS订阅" href="${rss_url!}">
                    <i class="fa fa-rss"></i>
                </a>
            </#if></div>
    </div>
</div>