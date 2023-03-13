<#include "template/layout.ftl">
<#macro categoriesTree categories>
    <#list categories as category>
        <li>
            <a class="level is-marginless" href="${category.fullPath!}">
                <span class="level-item">${category.name}</span>
                <span class="level-item tag">${postCounts[category.id?c]!}</span>
            </a>
            <#if category.children?? && category.children?size gt 0>
                <ul>
                    <@categoriesTree category.children/>
                </ul>
            </#if>
        </li>
    </#list>
</#macro>
<@layout title="分类 - ${blog_title!}" canonical="${categories_url!}">
    <#assign postCounts = {}>
    <@categoryTag method="list">
        <#list categories as category>
            <#assign postCounts += {category.id: category.postCount}>
        </#list>
    </@categoryTag>
    <@categoryTag method="tree">
        <#if categories?? && categories?size gt 0>
            <div class="card card-content">
                <div class="card-tab"><div>文章分类</div></div>
                <ul class="menu-list">
                    <@categoriesTree categories/>
                </ul>
            </div>
        <#else>
            <div class="card card-empty">
                <i class="fa fa-inbox"></i>
                还没有创建过分类，回<a href="${context!}">主页</a>看看吧
            </div>
        </#if>
    </@categoryTag>
</@layout>