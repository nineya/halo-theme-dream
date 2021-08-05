<@linkTag method="listByRandom">
    <#if links?? && links?size gt 0>
        <div class="card widget" id="links">
            <div class="card-content">
                <div class="menu">
                    <h3 class="menu-label">
                        友链
                    </h3>
                    <ul class="menu-list">
                        <#assign size= (links?size > 9)?string(9, links?size - 1)?number />
                        <#list 0..size as i>
                            <#assign link= links[i] />
                            <li>
                                <a class="level is-mobile" href="${link.url!}" target="_blank">
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
                <#if links?size gt 9>
                    <a class="link-more button is-light is-small size-small" href="${links_url!}">查看更多</a>
                </#if>
            </div>
        </div>
    </#if>
</@linkTag>
