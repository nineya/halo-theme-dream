<#include "layout/layout.ftl">
<#include "layout/common/article.ftl">
<@layout title="日志 - ${blog_title!}" canonical="${journals_url!}">
<link rel="stylesheet" href="${theme_base!}/source/css/journals.css">
<script src="//cdn.jsdelivr.net/npm/vue@2.6.10/dist/vue.min.js"></script>
<script src="${options.comment_internal_plugin_js!'//cdn.jsdelivr.net/gh/halo-dev/halo-comment@latest/dist/halo-comment.min.js'}"></script>
<#if (journals.content)?? && journals.content?size gt 0>
	<#list journals.content as journal>
    <div class="card widget journal">
        <div class="card-content">
			<#--日志项的头部-->
			<div class="journal-header">
				<#--用户的头像-->
				<div>
					<i style="background-image: url('${user.avatar!}');"></i>
				</div>
				<#--用户名和相对时间-->
				<div class="justify-content-center">
					<span class="has-link-black-ter">${user.nickname!}</span>
					<small><@global.timeline datetime=journal.createTime/></small>
				</div>
			</div>
			<#--日志项内容-->
			<div class="journal-content text-muted pb-3 border-bottom px-2">${journal.content}</div>
			<#--日志项操作-->
			<div class="journal-operation text-muted py-2 px-3 mt-3 d-md-block d-flex justify-content-between">
				<#--日志项的操作 Todo 功能暂不可用-->
				<span class="mr-4" title="喜欢功能暂不可用">
					<a href="javascript:void(0)"><i class="far fa-heart"></i>喜欢</a>
				</span>
				<span class="mr-4">
					<a><i class="far fa-comment"></i><#if journal.commentCount==0>评论<#else>${journal.commentCount}</#if></a>
				</span>
				<span title="分享功能暂不可用">
					<a href="javascript:void(0)"><i class="fas fa-share"></i>分享</a>
				</span>
			</div>
			<div class="journal-operation text-muted py-2 px-3 mt-3 d-md-block d-flex justify-content-between">
				<halo-comment id="${journal.id?c}" type="journal"/>
			</div>
        </div>
    </div>
	</#list>
    <#if journals.getTotalPages() gt 1>
        <div class="card card-transparent">
            <nav class="pagination is-centered" role="navigation" aria-label="pagination">
				<@paginationTag method="journals" page="${journals.number}" total="${journals.totalPages}" display="3">
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
        	<span class="text-muted none-text">还没有发布过日志，回<a class="font-weight-bold" href="${blog_url!}">主页</a>看看吧</span>
        </div>
    </div>
</div>
</#if>
</@layout>