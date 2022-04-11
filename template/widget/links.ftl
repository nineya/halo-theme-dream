<@linkTag method="listByRandom">
    <#if links?? && links?size gt 0>
        <div class="card widget" id="links">
            <div class="card-title">
                <i class="fa fa-link card-title-label"></i><span>友链</span>
                <#if links?size gt 9>
                    <a class="card-more" href="${links_url!}">更多<i class="fa fa-angle-double-right"></i></a>
                </#if>
            </div>
            <div class="card-content">
                <ul class="menu-list">
                    <#assign size= (links?size > 9)?string(9, links?size - 1)?number />
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
