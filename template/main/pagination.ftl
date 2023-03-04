<#macro pagination method,datas,slug="",keyword="",display="5">
    <#if datas.getTotalPages() gt 1>
        <div class="card card-transparent">
            <nav class="pagination" role="navigation" aria-label="pagination">
                <@paginationTag method="${method}" page="${datas.number?c}" slug="${slug!}" keyword="${keyword!}" total="${datas.totalPages?c}" display="${display}">
                    <a href="${pagination.prevPageFullPath!}" class="pagination-previous<#if !pagination.hasPrev> is-invisible is-hidden-mobile</#if>">上一页</a>
                    <a href="${pagination.nextPageFullPath!}" class="pagination-next<#if !pagination.hasNext> is-invisible is-hidden-mobile</#if>">下一页</a>
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