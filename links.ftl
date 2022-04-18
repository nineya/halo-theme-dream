<#include "template/layout.ftl">
<@layout title="友链 - ${blog_title!}" canonical="${links_url!}">
    <div class="card">
        <#if settings.links_thumbnail?? && settings.links_thumbnail!=''>
            <div class="card-image cover" style="background-image: url(${settings.links_thumbnail!})">
            </div>
        </#if>
        <div class="card-content main">
            <h1 class="title">友情链接 - ${user.nickname!}的小伙伴们</h1>
            <div class="main-content">
                <@linkTag method="listTeams">
                    <#assign defaultAvatar= (settings.links_default_avatar?? && settings.links_default_avatar!='')?string(settings.links_default_avatar!, static + "/source/img/avatar.svg") />
                    <#list teams as item>
                        <div class="links">
                            <#if item.team?? && item.team!=''>
                                <h2 class="link-title" id="toc${item_index}"><span
                                            class="fake-title">${item.team}</span></h2>
                            <#else>
                                <h2 class="link-title" id="toc${item_index}"><span class="fake-title">小伙伴们</span></h2>
                            </#if>
                            <ul class="link-items">
                                <#list item.links as link>
                                    <li>
                                        <a class="links-item" href="${link.url!}" rel="noopener" target="_blank"
                                           title="${link.description!}">
                                            <#if link.logo?? && link.logo!=''>
                                                <img class="not-gallery" title="${link.name!}" src="${defaultAvatar!}"
                                                     onload="if(!this.finish){this.finish=true;this.src='${link.logo!}'}"
                                                     onerror="this.onerror='';this.finish=true;this.src='${defaultAvatar!}'">
                                            <#else>
                                                <img class="not-gallery" title="${link.name!}" src="${defaultAvatar!}">
                                            </#if>

                                            <span class="link-name">${link.name!}</span>
                                            <#if link.description?? && link.description!=''>
                                                <div class="link-desc">${link.description!}</div>
                                            <#else>
                                                <div class="link-desc">他还没有自我介绍呢</div>
                                            </#if>
                                        </a>
                                    </li>
                                </#list>
                            </ul>
                        </div>
                    </#list>
                </@linkTag>
                申请友链的方法：
                <#assign bloggerAvatar= (settings.links_blogger_avatar?? && settings.links_blogger_avatar!='')?string(settings.links_blogger_avatar!, user.avatar!) />
                <ul>
                    <li>名称：${blog_title!}</li>
                    <li>地址：<a href="${context!}">${context!}</a></li>
                    <li>图标：<a href="${bloggerAvatar!}">${bloggerAvatar!}</a></li>
                    <li>描述：${user.description!}</li>
                </ul>
                <div>${settings.links_info!}</div>
            </div>
            <#if settings.share_type?? && settings.share_type!=''>
                <#include "template/share/${settings.share_type}.ftl">
            </#if>
        </div>
    </div>
    <#if settings.link_comment_id?? && settings.link_comment_id!=''>
        <div class="card" id="comment-wrapper">
            <div class="card-content">
                <h3 class="title is-5 has-text-weight-normal">评论</h3>
                <script src="//cdn.jsdelivr.net/npm/vue@2.6.10/dist/vue.min.js"></script>
                <script src="${options.comment_internal_plugin_js!'//cdn.jsdelivr.net/gh/halo-dev/halo-comment@latest/dist/halo-comment.min.js'}"></script>
                <halo-comment id="${settings.link_comment_id!}" type="sheet"/>
            </div>
        </div>
    </#if>
</@layout>