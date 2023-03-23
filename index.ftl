<#include "template/layout.ftl">
<#global is_first_index=(posts.number == 0) >
<#macro model_build content>
    <#if content == ''>
        <#return>
    </#if>
    <#local content_option=content?split('|')>
    <#local tag=(content_option[0]!'')?trim>
    <#local content=((content_option[1]!'')?trim != '')?then('<div class="title">${content_option[1]?trim}</div>', '')>
    <#local target=((content_option[2]!'false')?trim == 'true')?then('target="_blank"', '')>
    <#local imageUrl=((content_option[3]!'')?trim != '')?then('style="background-image: url(${content_option[3]?trim})"', '')>
    <#local targetUrl=((content_option[4]!'')?trim != '')?then('href="${content_option[4]?trim}"', '')>
    <a class="card widget brightness ${(content!='')?then('bg-shadow', '')}" ${target} ${imageUrl} ${targetUrl}>${content}<div class="tag">${tag}</div></a>
</#macro>
<@layout title="${blog_title!}" canonical="${blog_url!}">
    <#if posts.content?? && posts.content?size gt 0>
        <#if is_first_index!false>
            <#assign carousel_content>
                <#list posts.content as post>
                    <#if post.topPriority!=1>
                        <#break>
                    </#if>
                    <#if !post.metas?? || (post.metas.index_carousel!'false')=='false'>
                        <#continue>
                    </#if>
                    <#assign thumbnail = (post.thumbnail?? && post.thumbnail!='')?then(post.thumbnail!, (settings.default_thumbnail?? && settings.default_thumbnail!='')?then(settings.default_thumbnail + settings.default_thumbnail?contains('?')?then("&","?") + "postId=" + post.id?c, ''))>
                    <#if thumbnail != ''>
                        <a class="swiper-slide bg-shadow cover-image" style="background-image: url(${thumbnail})" href="${post.fullPath!}">
                            <div class="swiper-slide-details" data-swiper-parallax="200" data-swiper-parallax-duration="600">
                                <p class="swiper-slide-details-title">${post.title!}</p>
                                <ul class="breadcrumb">
                                    <li><@global.timeline datetime=post.createTime/></li>
                                    <li><i class="fa fa-eye"></i>${post.visits?c}</li>
                                    <#if !post.disallowComment!false>
                                        <li><i class="fa fa-comments-o"></i>${post.commentCount?c}</li></#if>
                                    <li><i class="fa fa-thumbs-o-up"></i>${post.likes?c}</li>
                                    <#assign heat= (24+post.visits*0.1+post.likes*2+post.commentCount*3) />
                                    <#assign heatColor= '#'+(heat < 37)?string('ffa87e',(heat < 120)?string('fb734a','e0081c')) />
                                    <li style="color: ${heatColor}">${heat}℃</li>
                                </ul>
                            </div>
                        </a>
                    </#if>
                </#list>
            </#assign>
            <#if settings.sidebar_column=='module-left' || settings.sidebar_column=='module-right'>
                <#if settings.module_links?? && settings.module_links?trim != ''>
                    <#assign module_links=settings.module_links?split('\n')>
                <#else>
                    <#assign module_links=[]>
                    <#list 0..1 as i>
                        <#assign post=posts[i]>
                        <#assign module_links=module_links+["推荐|${post.title!}|false|${post.thumbnail!}|${post.fullPath!}"]>
                    </#list>
                </#if>
                <div class="model model-index">
                    <div class="card widget swiper">
                        <div class="swiper-wrapper">${carousel_content}</div>
                        <div class="swiper-pagination"></div>
                        <div class="swiper-button-prev"></div>
                        <div class="swiper-button-next"></div>
                    </div>
                    <div class="model model-index-side">
                        <#list 0..1 as i>
                            <#if i &lt; module_links?size >
                                <@model_build module_links[i]/>
                            </#if>
                        </#list>
                    </div>
                </div>
                <#if module_links?size &gt; 2 && module_links?size&lt;=6>
                    <div class="model model-attach model-attach-${module_links?size-2}">
                        <#list 2..5 as i>
                            <#if i &lt; module_links?size >
                                <@model_build module_links[i]/>
                            </#if>
                        </#list>
                    </div>
                </#if>
                <#assign is_carousel=true />
            <#elseif carousel_content != ''>
                <div class="card widget swiper">
                    <div class="swiper-wrapper">${carousel_content}</div>
                    <div class="swiper-pagination"></div>
                    <div class="swiper-button-prev"></div>
                    <div class="swiper-button-next"></div>
                </div>
                <#assign is_carousel=true />
            </#if>
            <#if settings.index_inform?? && settings.index_inform != ''>
                <div class="card tips brightness">${settings.index_inform}</div>
            </#if>
        </#if>
        <#include "template/main/article_list.ftl">
        <@article_list posts.content/>
        <#include "template/main/pagination.ftl">
        <@pagination method="index" datas=posts display="${settings.page_number!5}" />
    <#else>
        <div class="card card-empty">
            <i class="fa fa-inbox"></i>
            还没有发表过文章
        </div>
    </#if>
</@layout>