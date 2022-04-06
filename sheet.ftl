<#include "template/layout.ftl">
<#include "template/common/article.ftl">
<@layout title="${sheet.title} - ${blog_title!}" canonical="${sheet.fullPath!}">
    <@article sheet,"sheet",false />
</@layout>