<#include "layout.ftl">
<#include "common/article_list.ftl">
<#macro errorpage etitle,desc,status,content,message>
    <@layout title="${status!}错误 - ${blog_title!}" canonical="${blog_url!}/${status!}">
        <link rel="stylesheet" type="text/css"
              href="${theme_base!}/source/plugins/highlightjs/styles/${settings.code_pretty!'atom-one-light'}.min.css">
        <link rel="stylesheet" type="text/css" href="${theme_base!}/src/css/post.css"/>
        <div class="card">
            <div class="card-content">
                <h2 class="title is-size-4 is-size-5-mobile has-text-weight-normal">${status!}错误 - ${etitle!}</h2>
            </div>
        </div>
        <div class="card">
            <div class="card-content">
                <div class="main-content">
                    <div style="margin: 20px 0; text-align: center; ">
                        <i style="font-size: 7rem">${status!}</i>
                        <p style="font-size: 1.4em;text-indent: 2em;">${desc!}</p>
                    </div>
                    <pre><code class="|异常信息">${content!}: ${message!}</code></pre>
                </div>
            </div>
            <script src="${theme_base!}/source/plugins/highlightjs/highlight.min.js"></script>
            <script src="https://cdn.bootcss.com/clipboard.js/2.0.4/clipboard.min.js"></script>
            <script type="text/javascript" src="${theme_base!}/src/js/post.js"></script>
        </div>
        <@postTag method="latest" top="6">
            <#if posts?? && posts?size gt 0>
                <div class="card">
                    <div class="card-content">
                        <h2 class="title">最新文章推荐</h2>
                    </div>
                </div>
                <@article_list posts />
            </#if>
        </@postTag>
    </@layout>
</#macro>