<#include "template/layout.ftl">
<#include "template/common/article.ftl">
<@layout title="归档 - ${blog_title!}" canonical="${archives_url!}">
    <#if (archives)?? && archives?size gt 0>
        <#list archives as archive>
            <div class="card widget">
                <div class="card-content">
                    <h3 class="timeline-title">${archive.year?c}</h3>
                    <div class="timeline">
                        <#list archive.posts as post>
                            <article class="media">
                                <#if post.thumbnail?? && post.thumbnail!=''>
                                    <a href="${post.thumbnail}" class="media-left">
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
            </div>
        </#list>
        <#include "template/common/pagination.ftl">
        <@pagination method="archives" datas=posts display="${settings.page_number!5}" />
    <#else>
        <div class="card widget none">
            <div class="card-content">
                <div class="none-content">
                    <span class="text-muted"><i class="fas fa-inbox fa-7x"></i></span>
                    <span class="text-muted none-text">还没有发表过文章呢，回<a class="font-weight-bold" href="${blog_url!}">主页</a>看看吧</span>
                </div>
            </div>
        </div>
    </#if>
</@layout>