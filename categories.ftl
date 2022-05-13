<#include "template/layout.ftl">
<@layout title="分类 - ${blog_title!}" canonical="${categories_url!}">
    <@categoryTag method="list">
        <#if categories?? && categories?size gt 0>
            <div class="card widget card-content">
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
        <#else>
            <div class="card card-empty">
                <i class="fa fa-inbox"></i>
                还没有创建过分类，回<a href="${blog_url!}">主页</a>看看吧
            </div>
        </#if>
    </@categoryTag>
</@layout>