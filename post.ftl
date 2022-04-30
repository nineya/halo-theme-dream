<#include "template/layout.ftl">
<#include "template/main/article.ftl">
<@layout title="${post.title!} - ${blog_title!}" canonical="${post.fullPath!}">
    <@article post,"post" />
</@layout>