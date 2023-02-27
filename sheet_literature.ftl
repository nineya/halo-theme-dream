<#include "template/layout.ftl">
<#include "template/main/article_literature.ftl">
<@layout title="${sheet.title} - ${blog_title!}" canonical="${sheet.fullPath!}">
    <@articleLiterature sheet,"sheet" />
</@layout>