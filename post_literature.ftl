<#include "template/layout.ftl">
<#include "template/main/article_literature.ftl">
<@layout title="${post.title!} - ${blog_title!}" canonical="${post.fullPath!}">
    <@articleLiterature post,"post" />
</@layout>