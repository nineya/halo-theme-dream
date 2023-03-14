<#macro articleLiterature post,commentType>
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
                        <#if !is_sheet??><li><i class="fa fa-thumbs-o-up"></i>${post.likes?c}</li></#if>
                        <li><i class="fa fa-pencil"></i>${post.wordCount?c}</li>
                    </ul>
                </div>
            </div>
        </div>
    </#if>
    <#assign updateInterval = ((.now?long - post.updateTime?long)/86400000)?floor >
    <#if updateInterval gt (settings.invalid_tips_day!'99999999')?number >
        <div class="card tips brightness"><i class="fa fa-times click-close" data-close=".tips"></i>本文最后更新于 ${post.updateTime?string('yyyy-MM-dd')}，距今已有 ${updateInterval} 天，若文章内容或图片链接失效，请留言反馈。</div>
    </#if>
    <#if (metas?? && metas.tips?? && metas.tips!='')>
        <div class="card tips brightness"><i class="fa fa-times click-close" data-close=".tips"></i>${metas.tips}</div>
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
                        <#if !is_sheet??><li><i class="fa fa-thumbs-o-up"></i>${post.likes?c}</li></#if>
                        <li><i class="fa fa-pencil"></i>${post.wordCount?c}</li>
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
            <div data-id="${post.id?c}" data-target="${commentType}s" class="main-content literature-content article">${post.formatContent!}</div>

            <#include "admire.ftl">

            <#if tags?? && (tags?size gt 0)>
                <div class="article-operation">
                    <div class="level-item">
                        <#list tags as tag>
                            <a href="${tag.fullPath!}">${tag.name!}</a>&nbsp;
                        </#list>
                    </div>
                </div>
            </#if>
            <#assign enable_copyright = (metas?? && metas.enable_copyright?? && metas.enable_copyright?trim!='')?then(metas.enable_copyright?trim, (settings.enable_copyright!true)?c)>
            <#if enable_copyright == 'true' || enable_share>
                <hr/>
                <#if enable_copyright == 'true'>
                    <#include "copyright.ftl">
                </#if>
                <#if enable_share>
                    <div class="dshare"></div>
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
    <#if (!post.disallowComment!false) && (!settings.close_post_comment!false)>
        <div class="card card-content" id="comment-wrapper">
            <h3 class="comment-title">评论</h3>
            <#include "comment.ftl">
            <@comment post.id?c, commentType />
        </div>
    </#if>
</#macro>