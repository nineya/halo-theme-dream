<#macro article post,commentType>
    <#if post.thumbnail?? && post.thumbnail!=''>
        <div class="card widget">
            <div class="cover-image" style="background-image: url(${post.thumbnail!})">
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
                        <#if !post.disallowComment!false><li><i class="fa fa-comments-o"></i>${post.commentCount?c}</li></#if>
                        <li><i class="fa fa-thumbs-o-up"></i>${post.likes?c}</li>
                        <li><i class="fa fa-pencil"></i>${post.wordCount?c}</li>
                    </ul>
                </div>
            </div>
        </div>
    </#if>
    <#if (metas?? && metas.tips?? && metas.tips!='')>
        <div class="tips"><i class="fa fa-times click-close" data-close=".tips"></i>${metas.tips}</div>
    </#if>
    <div class="card">
        <div class="card-content main">
            <#if !post.thumbnail?? || post.thumbnail==''>
                <h1 class="title">${post.title!}</h1>
                <div class="meta">
                    <ul class="breadcrumb">
                        <li><@global.timeline datetime=post.createTime/></li>
                        <li><i class="fa fa-eye"></i>${post.visits?c}</li>
                        <#if !post.disallowComment!false><li><i class="fa fa-comments-o"></i>${post.commentCount?c}</li></#if>
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
            <div class="main-content article">${post.formatContent!}</div>

            <#include "admire.ftl">

            <#if tags?? && (tags?size gt 0)>
                <div class="level article-operation">
                    <div class="level-item">
                        <#list tags as tag>
                            <a href="${tag.fullPath!}">${tag.name!}</a>&nbsp;
                        </#list>
                    </div>
                </div>
            </#if>
            <#assign enable_copyright = (metas?? && metas.enable_copyright?? && metas.enable_copyright?trim!='')?then(metas.enable_copyright?trim, (settings.enable_copyright!true)?c)>
            <#assign enable_share = (metas?? && metas.enable_share?? && metas.enable_share?trim!='')?then(metas.enable_share?trim, (settings.enable_post_share!true)?c)>
            <#if enable_copyright == 'true' || enable_share == 'true'>
                <hr/>
                <#if enable_copyright == 'true'>
                    <#include "copyright.ftl">
                </#if>
                <#if enable_share == 'true'>
                    <#include "share.ftl">
                </#if>
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
    <#if !post.disallowComment!false>
        <div class="card card-content" id="comment-wrapper">
            <h3 class="comment-title">评论</h3>
            <#include "comment.ftl">
            <@comment post.id?c, commentType />
        </div>
    </#if>
</#macro>