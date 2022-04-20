<#macro article post,commentType,index>
    <#include "comment.ftl">
    <#if post.thumbnail?? && post.thumbnail!=''>
        <div class="card">
            <div class="cover" style="background-image: url(${post.thumbnail!})">
                <#if categories?? && categories?size gt 0>
                    <div class="category">
                        <#list categories as category>
                            <a href="${category.fullPath!}">${category.name!}</a>
                        </#list>
                    </div>
                </#if>
                <div class="details">
                    <h1 class="title">${post.title!}</h1>
                    <ul class="breadcrumb">
                        <li><@global.timeline datetime=post.createTime/></li>
                        <li><i class="fa fa-eye"></i>${post.visits?c}</li>
                        <li><i class="fa fa-comments-o"></i>${post.commentCount?c}</li>
                        <li><i class="fa fa-thumbs-o-up"></i>${post.likes?c}</li>
                        <#assign words= post.formatContent?replace('</?[a-z][^>]*>','','ri')?matches('[\\u00ff-\\uffff]|[a-zA-Z]+')?size />
                        <li><i class="fa fa-pencil"></i>${words?c}</li>
                    </ul>
                </div>
            </div>
        </div>
    </#if>
    <div class="card">
        <div class="card-content main">
            <#if !post.thumbnail?? || post.thumbnail==''>
                <h1 class="title">${post.title!}</h1>
                <div class="meta">
                    <ul class="breadcrumb">
                        <li><@global.timeline datetime=post.createTime/></li>
                        <li><i class="fa fa-eye"></i>${post.visits?c}</li>
                        <li><i class="fa fa-comments-o"></i>${post.commentCount?c}</li>
                        <li><i class="fa fa-thumbs-o-up"></i>${post.likes?c}</li>
                        <#assign words= post.formatContent?replace('</?[a-z][^>]*>','','ri')?matches('[\\u00ff-\\uffff]|[a-zA-Z]+')?size />
                        <li><i class="fa fa-pencil"></i>${words?c}</li>
                    </ul>
                    <#if post.categories?? && post.categories?size gt 0>
                        <div class="level-item">
                            <#list post.categories as category>
                                <a href="${category.fullPath!}">${category.name!}</a>&nbsp;
                            </#list>
                        </div>
                    </#if>
                </div>
                <hr/>
            </#if>
            <div class="main-content">${post.formatContent!}</div>

            <#include "admire.ftl">

            <#if settings.copyright!true>
                <!-- 版权界面 -->
                <#include "copyright.ftl">
            </#if>
            <#if tags?? && (tags?size gt 0)>
                <div class="level is-size-7 is-uppercase">
                    <div class="level-start">
                        <div class="level-item">
                            <span class="is-size-6 has-text-grey has-mr-7 fa fa-tag"></span>
                            <#list tags as tag>
                                <a class="has-link-grey -link" href="${tag.fullPath!}">${tag.name!}</a>&nbsp;
                            </#list>
                        </div>
                    </div>
                </div>
            </#if>
            <#if settings.share_type?? && settings.share_type!=''>
                <#include "../share/${settings.share_type}.ftl">
            </#if>
        </div>
    </div>

    <#if nextPost?? || prevPost??>
        <div class="card">
            <div class="level post-navigation card-content">
                <#if prevPost??>
                    <a class="level-item" href="${prevPost.fullPath!}">
                        <i class="fa fa-angle-left"></i>
                        <span>${prevPost.title!}</span>
                    </a>
                </#if>
                <#if nextPost??>
                    <a class="level-item" href="${nextPost.fullPath!}">
                        <span>${nextPost.title!}</span>
                        <i class="fa fa-angle-right"></i>
                    </a>
                </#if>
            </div>
        </div>
    </#if>
    <#if commentType == 'post'>
        <@comment post,"post" />
    <#else>
        <@comment post,"sheet" />
    </#if>
    <script src="//cdn.jsdelivr.net/gh/highlightjs/cdn-release@11.2.0/build/highlight.min.js"></script>
    <script src="//cdn.bootcss.com/clipboard.js/2.0.4/clipboard.min.js"></script>
    <script type="text/javascript" src="${theme_base!}/source/js/post.min.js"></script>
</#macro>