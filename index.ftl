<#include "template/layout.ftl">
<@layout title="${blog_title!}" canonical="${blog_url!}">
    <#if posts.content?? && posts.content?size gt 0>
        <#include "template/main/article_list.ftl">
        <@article_list posts.content/>
        <#include "template/main/pagination.ftl">
        <@pagination method="index" datas=posts display="${settings.page_number!5}" />
    <#else>
        <div class="card card-empty">
            <i class="fa fa-inbox"></i>
            还没有发表过文章
        </div>
    </#if>
</@layout>