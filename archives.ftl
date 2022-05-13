<#include "template/layout.ftl">
<@layout title="归档 - ${blog_title!}" canonical="${archives_url!}">
    <#if (archives)?? && archives?size gt 0>
        <#list archives as archive>
            <div class="card card-content">
                <div class="timeline-title">${archive.year?c}</div>
                <div class="timeline">
                    <#list archive.posts as post>
                        <article class="media">
                            <#if post.thumbnail?? && post.thumbnail!=''>
                                <a href="${post.fullPath}" class="media-left">
                                    <img class="not-gallery" src="${post.thumbnail!}" alt="${post.title!}">
                                </a>
                            </#if>
                            <div class="media-content">
                                <time datetime="${post.createTime!}">${post.createTime?string('yyyy-MM-dd')}</time>
                                <a href="${post.fullPath!}" class="title has-link-grey">${post.title!}</a>
                                <#if post.categories?? && post.categories?size gt 0>
                                    <p>
                                        <#list post.categories as category>
                                            <a class="has-link-grey"
                                               href="${category.fullPath!}">${category.name!}</a>&nbsp;
                                        </#list>
                                    </p>
                                </#if>
                            </div>
                        </article>
                    </#list>
                </div>
            </div>
        </#list>
        <#include "template/main/pagination.ftl">
        <@pagination method="archives" datas=posts display="${settings.page_number!5}" />
    <#else>
        <div class="card card-empty">
            <i class="fa fa-inbox"></i>
            还没有发表过文章，回<a href="${context!}">主页</a>看看吧
        </div>
    </#if>
</@layout>