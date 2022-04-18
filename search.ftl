<#include "template/layout.ftl">
<@layout title="搜索：${keyword} - ${blog_title!}" canonical="${blog_url!}/search?keyword=${keyword}">
<#if (posts.content)?? && posts.content?size gt 0>
    <#include "template/common/article_list.ftl">
    <@article_list posts.content/>
    <#include "template/common/pagination.ftl">
    <@pagination method="search" datas=posts keyword="${keyword!}" display="${settings.page_number!5}" />
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