<#include "layout/layout.ftl">
<#include "layout/common/article.ftl">
<@layout title="归档 - ${blog_title!}" canonical="${archives_url!}">
<#if (archives)?? && archives?size gt 0>
<#list archives as archive>
    <div class="card widget">
        <div class="card-content">
            <h3 class="tag is-link">
                ${archive.year?c}
            </h3>
            <div class="timeline">
                <#list archive.posts as post>
                    <article class="media">
                        <#if post.thumbnail?? && post.thumbnail!=''>
                            <a href="${post.thumbnail}" class="media-left">
                                <p class="image is-64x64">
                                    <img class="thumbnail" src="${post.thumbnail!}" alt="${post.title!}">
                                </p>
                            </a>
                        </#if>
                        <div class="media-content">
                            <time class="has-text-grey is-size-7 is-block is-uppercase" datetime="${post.createTime!}">${post.createTime?string('yyyy-MM-dd')}</time>
                            <a href="${post.fullPath!}" class="title has-link-black-ter is-size-6 has-text-weight-normal">${post.title!}</a>
                            <#if post.categories?? && post.categories?size gt 0>
                                <p class="categories">
                                    <#list post.categories as category>
                                        <a class="has-link-grey" href="${category.fullPath!}">${category.name!}</a>&nbsp;
                                    </#list>
                                </p>
                            </#if>
                        </div>
                    </article>
                </#list>
            </div>
        </div>
    </div>
</#list>
<#if posts.getTotalPages() gt 1>
    <div class="card card-transparent">
        <nav class="pagination is-centered" role="navigation" aria-label="pagination">
            <@paginationTag method="archives" page="${posts.number}" total="${posts.totalPages}" display="${settings.page_number!5}">
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
			<span class="text-muted none-text">还没有发表过文章呢，回<a class="font-weight-bold" href="${blog_url!}">主页</a>看看吧</span>
		</div>
	</div>
</div>
</#if>
</@layout>