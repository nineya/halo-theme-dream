<#include "layout/layout.ftl">
<#include "layout/common/article.ftl">
<@layout title="搜索：${keyword} - ${blog_title!}" canonical="${blog_url!}/search?keyword=${keyword}">
<#if (posts.content)?? && posts.content?size gt 0>
    <#list posts.content as post>
        <@article post,'null',true />
    </#list>
    <#if posts.getTotalPages() gt 1>
        <div class="card card-transparent">
            <nav class="pagination is-centered" role="navigation" aria-label="pagination">
                <@paginationTag method="search" page="${posts.number}" total="${posts.totalPages}" display="3" keyword="${keyword!}">
                    <div class="pagination-previous<#if pagination.hasPrev><#else > is-invisible is-hidden-mobile</#if>">
                        <a class="is-flex-grow has-text-black-ter" href="${pagination.prevPageFullPath!}">上一页</a>
                    </div>
                    <div class="pagination-next<#if pagination.hasNext><#else > is-invisible is-hidden-mobile</#if>">
                        <a class="is-flex-grow has-text-black-ter" href="${pagination.nextPageFullPath!}">下一页</a>
                    </div>
                    <ul class="pagination-list is-hidden-mobile">
                        <#list pagination.rainbowPages as number>
                            <#if number.isCurrent>
                                <li><a class="pagination-link is-current" href="${number.fullPath!}">${number.page!}</a></li>
                            <#else>
                                <li><a class="pagination-link has-text-black-ter" href="${number.fullPath!}">${number.page!}</a></li>
                            </#if>
                        </#list>
                    </ul>
                </@paginationTag>
            </nav>
        </div>
    </#if>
<#else>
<div class="card widget none">
	<div class="card-content">
		<div class="none-content">
			<span class="text-muted"><i class="fas fa-inbox fa-7x"></i></span>
			<span class="text-muted none-text">搜索结果为空，回<a class="font-weight-bold" href="${blog_url!}">主页</a>看看吧</span>
		</div>
	</div>
</div>
</#if>
</@layout>