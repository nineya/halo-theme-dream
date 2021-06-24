<#include "layout/layout.ftl">
<#include "layout/common/article.ftl">
<@layout title="分类 - ${blog_title!}" canonical="${categories_url!}">
<@categoryTag method="list">
<#if categories?? && categories?size gt 0>
    <#include "layout/categories.ftl">
<#else>
<div class="card widget none">
	<div class="card-content">
		<div class="none-content">
			<span class="text-muted"><i class="fas fa-inbox fa-7x"></i></span>
			<span class="text-muted none-text">还没有任何分类，回<a class="font-weight-bold" href="${blog_url!}">主页</a>看看吧</span>
		</div>
	</div>
</div>
</#if>
 </@categoryTag>
</@layout>