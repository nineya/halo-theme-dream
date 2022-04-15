<#macro article post,commentType,index>
    <#include "comment.ftl">
    <div class="card">
        <#if post.thumbnail?? && post.thumbnail!=''>
            <div class="card-image">
                <div class="thumbnail" style="background-image: url(${post.thumbnail!})">
                </div>
            </div>
        </#if>
        <div class="card-content main article">
            <h1 class="title">${post.title!}</h1>
            <div class="level article-meta is-size-7 is-uppercase is-mobile is-overflow-x-auto">
                <div class="level-left">
                    <#if index && post.topPriority==1>
                        <span class="level-item">置顶</span>
                    </#if>
                    <time class="level-item has-text-grey"
                          datetime="${post.createTime!}"><@global.timeline datetime=post.createTime/></time>
                    <#if categories?? && categories?size gt 0>
                        <div class="level-item">
                            <#list categories as category>
                                <a class="has-link-grey" href="${category.fullPath!}">${category.name!}</a>&nbsp;
                            </#list>
                        </div>
                    </#if>
                    <#assign words= post.formatContent?replace('</?[a-z][^>]*>','','ri')?matches('[\\u00ff-\\uffff]|[a-zA-Z]+')?size />
                    <div class="level-item has-text-grey">${(words/150)?int} 分钟 读完 (大约 ${words?c} 个字)</div>
                </div>
            </div>
            <div class="main-content">${post.formatContent!}</div>

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

    <#if (settings.donate_alipay?? && settings.donate_alipay!='') || (settings.donate_wechat?? && settings.donate_wechat!='')>
        <div class="card">
            <div class="card-content">
                <h3 class="menu-label has-text-centered">喜欢这篇文章？打赏一下作者吧</h3>
                <div class="buttons is-centered">
                    <#if settings.donate_alipay?? && settings.donate_alipay!=''>
                        <#include "../donate/alipay.ftl">
                    </#if>
                    <#if settings.donate_wechat?? && settings.donate_wechat!=''>
                        <#include "../donate/wechat.ftl">
                    </#if>
                </div>
            </div>
        </div>
    </#if>

    <#if nextPost?? || prevPost??>
        <div class="card">
            <div class="level post-navigation is-flex-wrap is-mobile card-content">
                <#if prevPost??>
                    <div class="level-start">
                        <a class="level level-item has-link-grey article-nav-prev" href="${prevPost.fullPath!}">
                            <i class="level-item fas fa-chevron-left"></i>
                            <span class="level-item">${prevPost.title!}</span>
                        </a>
                    </div>
                </#if>
                <#if nextPost??>
                    <div class="level-end">
                        <a class="level level-item has-link-grey article-nav-next" href="${nextPost.fullPath!}">
                            <span class="level-item">${nextPost.title!}</span>
                            <i class="level-item fas fa-chevron-right"></i>
                        </a>
                    </div>
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