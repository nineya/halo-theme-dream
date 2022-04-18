<#include "template/layout.ftl">
<@layout title="分类：${category.name!} - ${blog_title!}" canonical="${category.fullPath!}">
    <#if (posts.content)?? && posts.content?size gt 0>
        <div class="card">
            <div class="card-content main-title">
                <ul class="breadcrumb">
                    <li><a href="${categories_url!}"><i class="fa fa-tags"></i>分类</a></li>
                    <li>${category.name}</li>
                </ul>
            </div>
        </div>
        <#include "template/common/article_list.ftl">
        <@article_list posts.content/>
        <#include "template/common/pagination.ftl">
        <@pagination method="categoryPosts" datas=posts slug="${category.slug!}" display="${settings.page_number!5}" />
    <#else>
        <div class="card widget none">
            <div class="card-content">
                <div class="none-content">
                    <span class="text-muted"><i class="fas fa-inbox fa-7x"></i></span>
                    <span class="text-muted none-text">该分类下没有文章，回<a class="font-weight-bold" href="${blog_url!}">主页</a>看看吧</span>
                </div>
            </div>
        </div>
    </#if>
</@layout>
