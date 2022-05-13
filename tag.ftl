<#include "template/layout.ftl">
<@layout title="标签：${tag.name!} - ${blog_title!}" canonical="${tag.fullPath!}">
    <#if (posts.content)?? && posts.content?size gt 0>
        <div class="card card-content main-title">
            <ul class="breadcrumb">
                <li><a href="${tags_url!}"><i class="fa fa-tags"></i>标签</a></li>
                <li>${tag.name}</li>
            </ul>
        </div>
        <#include "template/main/article_list.ftl">
        <@article_list posts.content/>
        <#include "template/main/pagination.ftl">
        <@pagination method="tagPosts" datas=posts slug="${tag.slug!}" display="${settings.page_number!5}" />
    <#else>
        <div class="card card-empty">
            <i class="fa fa-inbox"></i>
            该标签下没有文章，回<a href="${context!}">主页</a>看看吧
        </div>
    </#if>
</@layout>