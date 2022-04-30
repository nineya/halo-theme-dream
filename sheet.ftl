<#include "template/layout.ftl">
<#include "template/main/article.ftl">
<@layout title="${sheet.title} - ${blog_title!}" canonical="${sheet.fullPath!}">
    <@article sheet,"sheet" />
</@layout>