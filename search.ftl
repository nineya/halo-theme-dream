<#include "template/layout.ftl">
<@layout title="搜索：${keyword} - ${blog_title!}" canonical="${blog_url!}/search?keyword=${keyword}">
    <#if (posts.content)?? && posts.content?size gt 0>
        <#include "template/main/article_list.ftl">
        <@article_list posts.content/>
        <#include "template/main/pagination.ftl">
        <@pagination method="search" datas=posts keyword="${keyword!}" display="${settings.page_number!5}" />
    <#else>
        <div class="card card-empty">
            <i class="fa fa-inbox"></i>
            搜索结果为空，回<a href="${context!}">主页</a>看看吧
        </div>
    </#if>
</@layout>