<#include "template/layout.ftl">
<#include "template/page/article.ftl">
<@layout title="${post.title!} - ${blog_title!}" canonical="${post.fullPath!}">
    <@article post,"post",false />
</@layout>