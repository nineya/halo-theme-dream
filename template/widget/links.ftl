<#assign num= settings.links_num!10 />
<div class="card widget links ${sidebar.hide!}">
    <@linkTag method="listByRandom">
        <div class="card-title">
            <i class="${(sidebar.icon?? && sidebar.icon != "")?then(sidebar.icon, "ri-links-line")} card-title-label"></i><span>${(sidebar.title?? && sidebar.title != "")?then(sidebar.title, "友链")}</span>
            <#if settings.links_more?? && settings.links_more== true && links?size gt num?number>
                <a class="card-more" href="${links_url!}">更多<i class="ri-arrow-right-double-line"></i></a>
            </#if>
        </div>
        <#if links?? && links?size gt 0>
            <div class="card-content">
                <ul class="menu-list">
                    <#assign size= (links?size > num?number)?string(num, links?size)?number - 1 />
                    <#list 0..size as i>
                        <#assign link= links[i] />
                        <li>
                            <a class="level is-mobile" rel="nofollow noopener noreferrer" href="${link.url!}" target="_blank">
                                <span class="level-left">
                                    <span class="level-item">${link.name}</span>
                                </span>
                                <span class="level-right">
                                    <span class="level-item tag">${link.url?replace('http[s]?://|/.*','','ri')}</span>
                                </span>
                            </a>
                        </li>
                    </#list>
                </ul>
            </div>
        <#else>
            <div class="card-empty">暂无友链</div>
        </#if>
    </@linkTag>
</div>
