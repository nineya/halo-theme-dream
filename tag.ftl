<#include "template/layout.ftl">
<@layout title="标签：${tag.name!} - ${blog_title!}" canonical="${tag.fullPath!}">
    <#if (posts.content)?? && posts.content?size gt 0>
        <div class="card">
            <div class="card-content main-title">
                <ul class="breadcrumb">
                    <li><a href="${tags_url!}"><i class="fa fa-tags"></i>标签</a></li>
                    <li>${tag.name}</li>
                </ul>
            </div>
        </div>
        <#include "template/common/article_list.ftl">
        <@article_list posts/>
        <#include "template/common/pagination.ftl">
        <@pagination method="tagPosts" datas=posts slug="${tag.slug!}" display="${settings.page_number!5}" />
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