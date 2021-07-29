<#macro article post,commentType,index>
<#include "../comment/comment.ftl">
<div class="card">
    <#if post.thumbnail?? && post.thumbnail!=''>
        <div class="card-image">
            <#if index>
                <a class="image is-7by1" href="${post.fullPath!}">
                    <img class="thumbnail" src="${post.thumbnail!}" alt="${post.title!}">
                </a>
            <#else>
                <span class="image is-7by1">
                    <img class="thumbnail" src="${post.thumbnail!}" alt="${post.title!}">
                </span>
            </#if>
        </div>
    </#if>
    <div class="card-content article">
        <div class="level article-meta is-size-7 is-uppercase is-mobile is-overflow-x-auto">
            <div class="level-left">
			    <#if index && post.topPriority==1>
					<span class="level-item">置顶</span>
				</#if>
                <time class="level-item has-text-grey" datetime="${post.createTime!}"><@global.timeline datetime=post.createTime/></time>
                <#if index>
                     <#if post.categories?? && post.categories?size gt 0>
                        <div class="level-item">
                            <#list post.categories as category>
                                <a class="has-link-grey" href="${category.fullPath!}">${category.name!}</a>&nbsp;
                            </#list>
                        </div>
                         <#assign heat= (24+post.visits*0.1+post.likes*2+post.commentCount*3) />
                         <#assign heatColor= (heat < 37)?string('ffa87e',(heat < 120)?string('fb734a','e0081c')) />
						<div class="level-item" style="color: #${heatColor}">
                        热度 ${heat}℃
                        </div>
                    </#if>
                <#else>
                    <#if categories?? && categories?size gt 0>
                        <div class="level-item">
                            <#list categories as category>
                                <a class="has-link-grey" href="${category.fullPath!}">${category.name!}</a>&nbsp;
                            </#list>
                        </div>
                    </#if>
					<#assign words= post.formatContent?replace('</?[a-z][^>]*>','','ri')?matches('[\\u00ff-\\uffff]|[a-zA-Z]+')?size />
					<div class="level-item has-text-grey">${(words/150)?int} 分钟 读完 (大约 ${words?c} 个字)</div>
                </#if>
            </div>
        </div>
        <h1 class="title is-size-3 is-size-4-mobile has-text-weight-normal">
            <#if index>
                <a class="has-link-black-ter" href="${post.fullPath!}">${post.title!}</a>
            <#else>
                ${post.title!}
            </#if>
        </h1>
        <div class="content">
            <#if index && post.summary?? && post.summary!=''>
                ${post.summary!}
            <#else>
                ${post.formatContent!}
            </#if>
        </div>

		<#if !index>
		<#if settings.article_end?? && settings.article_end!=''>
			<div style="text-align:center;color: #ccc;font-size:14px;font-family: '幼圆'">---------本文结束<i class="fa fa-paw"></i>${settings.article_end}---------</div>
		</#if>
		<#if settings.copyright!true>
			<!-- 版权界面 -->
            <#include "../common/copyright.ftl">
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
        </#if>
        <#if index && post.summary?? && post.summary!=''>
        <div class="level is-mobile">
            <div class="level-start">
                <div class="level-item">
                <a class="button is-size-7 is-light" href="${post.fullPath!}#more">阅读更多</a>
                </div>
            </div>
        </div>
        </#if>
        <#if !index && settings.share_type?? && settings.share_type!=''>
            <#include "../share/${settings.share_type}.ftl">
        </#if>
    </div>
</div>

<#if !index>
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
    <script src="${theme_base!}/source/plugins/highlightjs/highlight.min.js"></script>
    <script src="https://cdn.bootcss.com/clipboard.js/2.0.4/clipboard.min.js"></script>
    <script type="text/javascript" src="${theme_base!}/source/js/post.js"></script>
</#if>
</#macro>