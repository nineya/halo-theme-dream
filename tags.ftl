<#include "template/layout.ftl">
<@layout title="标签 - ${blog_title!}" canonical="${tags_url!}">
    <@tagTag method="list">
        <#if tags?? && tags?size gt 0>
            <div class="card card-content">
                <div class="card-tab"><div>文章标签</div></div>
                <div class="tags-field">
                    <#list tags as tag>
                        <a class="tags" href="${tag.fullPath!}">
                            <#if settings.enable_tags_tag_color!false>
                                <span class="tag" style="color: ${tag.color}; background: ${tag.color!}20">${tag.name}</span>
                                <span class="tag is-grey" style="background: ${tag.color!}CC">${tag.postCount!}</span>
                            <#else>
                                <span class="tag">${tag.name}</span><span class="tag is-grey">${tag.postCount!}</span>
                            </#if>
                        </a>
                    </#list>
                </div>
            </div>
        <#else>
            <div class="card card-empty">
                <i class="fa fa-inbox"></i>
                还没有创建过标签，回<a href="${context!}">主页</a>看看吧
            </div>
        </#if>
    </@tagTag>
</@layout>