<#include "template/layout.ftl">
<@layout title="标签 - ${blog_title!}" canonical="${tags_url!}">
    <div class="card">
        <div class="card-content">
            <@tagTag method="list">
                <#if tags?? && tags?size gt 0>
                    <h3 class="menu-label">
                        标签
                    </h3>
                    <div class="tags-field">
                        <#list tags as tag>
                            <a class="tags" href="${tag.fullPath!}">
                                <span class="tag">${tag.name}</span>
                                <span class="tag is-grey">${tag.postCount!}</span>
                            </a>
                        </#list>
                    </div>
                <#else>
                    <span class="text-muted"><i class="fas fa-inbox fa-7x"></i></span>
                    <span class="text-muted none-text">还没有任何标签，回<a class="font-weight-bold" href="${blog_url!}">主页</a>看看吧</span>
                </#if>
            </@tagTag>
        </div>
    </div>
</@layout>