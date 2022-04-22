<#assign num= settings.links_num!10 />
<@linkTag method="listByRandom">
    <#if links?? && links?size gt 0>
        <div class="card widget ${settings.hide_links!}" id="links">
            <div class="card-title">
                <i class="fa fa-link card-title-label"></i><span>友链</span>
                <#if settings.links_more?? && settings.links_more== true && tags?size gt num?number>
                    <a class="card-more" href="${links_url!}">更多<i class="fa fa-angle-double-right"></i></a>
                </#if>
            </div>
            <div class="card-content">
                <ul class="menu-list">
                    <#assign size= (links?size > num?number)?string(num, links?size)?number - 1 />
                    <#list 0..size as i>
                        <#assign link= links[i] />
                        <li>
                            <a class="level is-mobile" rel="noopener" href="${link.url!}" target="_blank">
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
        </div>
    </#if>
</@linkTag>
