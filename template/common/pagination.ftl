<#macro pagination method,datas,keyword="",display="5">
    <#if datas.getTotalPages() gt 1>
        <div class="card card-transparent">
            <nav class="pagination" role="navigation" aria-label="pagination">
                <@paginationTag method="${method}" page="${datas.number}" keyword="${keyword!}" total="${datas.totalPages}" display="${display}">
                    <div class="pagination-previous<#if !pagination.hasPrev> is-invisible is-hidden-mobile</#if>">
                        <a href="${pagination.prevPageFullPath!}">上一页</a>
                    </div>
                    <div class="pagination-next<#if !pagination.hasNext> is-invisible is-hidden-mobile</#if>">
                        <a href="${pagination.nextPageFullPath!}">下一页</a>
                    </div>
                    <ul class="pagination-list is-hidden-mobile">
                        <#list pagination.rainbowPages as number>
                            <#if number.isCurrent>
                                <li><a class="pagination-link is-current" href="${number.fullPath!}">${number.page!}</a></li>
                            <#else>
                                <li><a class="pagination-link" href="${number.fullPath!}">${number.page!}</a></li>
                            </#if>
                        </#list>
                    </ul>
                </@paginationTag>
            </nav>
        </div>
    </#if>
</#macro>