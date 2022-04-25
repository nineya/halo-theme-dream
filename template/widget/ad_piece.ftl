<#assign ad_show=(settings.ad_mode!true)?then(settings.ad_image?? && settings.ad_image != '', settings.ad_custom_code?? && settings.ad_custom_code!='')>
<#if ad_show>
    <div class="card widget ${settings.hide_ad_piece!}">
        <#if settings.ad_mode!true>
            <a target="_blank" href="${settings.ad_target_url!}">
                <img width="100%" src="${settings.ad_image}" alt="广告"/>
            </a>
        <#else>
            ${settings.ad_custom_code!}
        </#if>
        <#if settings.show_ad_tag!true>
            <span class="ad-tag">广告
            <#if settings.ad_tag_close!true>
                <svg class="click-close" data-close=".widget" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 15 15"><path d="M3.25,3.25l8.5,8.5M11.75,3.25l-8.5,8.5"></path></svg>
            </#if>
            </span>
        </#if>
    </div>
</#if>