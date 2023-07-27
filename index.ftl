<#include "template/layout.ftl">
<#global is_first_index=(posts.number == 0) >
<#macro model_build option>
    <#if !option??>
        <#return>
    </#if>
    <#local tag=((option.tag!'')?trim != '')?then('<div class="tag">${option.tag?trim}</div>', '')>
    <#local title=((option.title!'')?trim != '')?then('<div class="title">${option.title?trim}</div>', '')>
    <#local target=((option.target!'')?trim != '')?then(' target="${option.target?trim}"', ' target="_blank"')>
    <#local imageUrl=((option.image!'')?trim != '')?then(' style="background-image: url(${option.image?trim})"', '')>
    <#local targetUrl=((option.url!'')?trim != '')?then(' href="${option.url?trim}"', '')>
    <a class="card widget brightness ${(title!='')?then('bg-shadow', '')}"${target}${imageUrl}${targetUrl}>${title}${tag}</a>
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
                <div class="model model-index">
                    <div class="card widget swiper">
                        <div class="swiper-wrapper">${carousel_content}</div>
                        <div class="swiper-pagination"></div>
                        <div class="swiper-button-prev"></div>
                        <div class="swiper-button-next"></div>
                    </div>
                    <div class="model model-index-side">
                        <#if settings.module_options?? && settings.module_options?size &gt; 0>
                            <#list 0..1 as i>
                                <#if i &lt; settings.module_options?size >
                                    <@model_build settings.module_options[i]/>
                                </#if>
                            </#list>
                        <#else>
                            <#list 0..1 as i>
                                <#if i &lt; posts.content?size >
                                    <#assign postOption=posts.content[i]>
                                    <@model_build {"tag": "推荐", "title": "${postOption.title!}", "url": "${postOption.fullPath}", "image": "${postOption.thumbnail}", "target": "_self"}/>
                                </#if>
                            </#list>
                        </#if>
                    </div>
                </div>
                <#if settings.module_options?? && settings.module_options?size &gt; 2 && settings.module_options?size&lt;=6>
                    <div class="model model-attach model-attach-${settings.module_options?size-2}">
                        <#list 2..5 as i>
                            <#if i &lt; settings.module_options?size >
                                <@model_build settings.module_options[i]/>
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