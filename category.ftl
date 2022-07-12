<#include "template/layout.ftl">
<@layout title="分类：${category.name!} - ${blog_title!}" canonical="${category.fullPath!}">
    <#if (posts.content)?? && posts.content?size gt 0>
        <div class="card card-content main-title">
            <ul class="breadcrumb">
                <li><a href="${categories_url!}"><i class="fa fa-th-large"></i>分类</a></li>
                <li>${category.name}</li>
            </ul>
        </div>
        <#include "template/main/article_list.ftl">
        <@article_list posts.content/>
        <#include "template/main/pagination.ftl">
        <@pagination method="categoryPosts" datas=posts slug="${category.slug!}" display="${settings.page_number!5}" />
    <#else>
        <div class="card card-empty">
            <i class="fa fa-inbox"></i>
            该分类下没有文章，回<a href="${context!}">主页</a>看看吧
        </div>
    </#if>
</@layout>
