<#include "layout.ftl">
<#include "main/article_list.ftl">
<#global is_error = true>
<#macro errorpage etitle,desc,status,content,message>
    <@layout title="${status!}错误 - ${blog_title!}" canonical="${blog_url!}/${status!}">
        <div class="card">
            <div class="title card-content main-title">${status!}错误 - ${etitle!}</div>
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
        </div>
        <@postTag method="latest" top="6">
            <#if posts?? && posts?size gt 0>
                <div class="card">
                    <div class="title card-content main-title">最新文章推荐</div>
                </div>
                <@article_list posts />
            </#if>
        </@postTag>
    </@layout>
</#macro>