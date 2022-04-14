<#include "template/layout.ftl">
<@layout title="${blog_title!}" canonical="${blog_url!}">
<#if posts.content?? && posts.content?size gt 0>
    <#include "template/common/article_list.ftl">
    <@article_list posts/>
	<#include "template/common/pagination.ftl">
	<@pagination method="index" datas=posts display="${settings.page_number!5}" />
<#else>
<div class="card widget none">
	<div class="card-content">
		<div class="none-content">
			<span class="text-muted"><i class="fas fa-inbox fa-7x"></i></span>
			<span class="text-muted none-text">博主非常懒，还没有发表过文章</span>
		</div>
	</div>
</div>
</#if>
</@layout>