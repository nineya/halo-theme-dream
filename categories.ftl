<#include "template/layout.ftl">
<#include "template/common/article.ftl">
<@layout title="分类 - ${blog_title!}" canonical="${categories_url!}">
<@categoryTag method="list">
<#if categories?? && categories?size gt 0>
	<div class="card widget">
		<div class="card-content">
			<h3 class="menu-label">分类</h3>
			<ul class="menu-list">
				<#list categories as category>
					<li>
						<a class="level" href="${category.fullPath!}">
							<span class="level-item">${category.name}</span>
							<span class="level-item tag">${category.postCount}</span>
						</a>
					</li>
				</#list>
			</ul>
		</div>
	</div>
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