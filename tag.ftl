<#include "layout/layout.ftl">
<#include "layout/common/article.ftl">
<@layout title="标签：${tag.name!} - ${blog_title!}" canonical="${tag.fullPath!}">
<#if (posts.content)?? && posts.content?size gt 0>
    <#include "layout/tag.ftl">
<#else>
<div class="card widget none">
	<div class="card-content">
		<div class="none-content">
			<span class="text-muted"><i class="fas fa-inbox fa-7x"></i></span>
			<span class="text-muted none-text">该标签下没有文章，回<a class="font-weight-bold" href="${blog_url!}">主页</a>看看吧</span>
		</div>
	</div>
</div>
</#if>
</@layout>