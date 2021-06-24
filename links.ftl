<#include "layout/layout.ftl">
<@layout title="友链 - ${blog_title!}" canonical="${links_url!}">
<div class="card">
	<div class="card-image"><span class="image is-7by1"><img class="thumbnail" src="${static!}/source/images/thumbnail/2.jpg" alt="友情链接 - ${user.nickname!}的小伙伴们"></span></div>
  	<div class="card-content">
      	<h1 class="title is-size-3 is-size-4-mobile has-text-weight-normal">友情链接 - ${user.nickname!}的小伙伴们</h1>
    	<div class="content">
      	<@linkTag method="listTeams">
  		<#list teams as item>
        <div class="friend column">
			<#if item.team?? && item.team!=''>
    	  	<h2 class="friend-class" id="toc${item_index}">${item.team}</h2>
            <#else>
    		<h2 class="friend-class" id="toc${item_index}">小伙伴们</h2>
            </#if>
    		<#list item.links as link>
            <a class="column is-12-mobile is-6-tablet is-4-desktop is-4-widescreen is-4-fullhd" href="${link.url!}" target="_blank">
      			<#if link.logo?? && link.logo!=''>
              		<img src="${link.logo!}">
                <#else>
              		<img src="${static!}/source/images/comimg/0.png">
                </#if>
          		<p class="title">${link.name!}</p>
                <#if link.description?? && link.description!=''>
          			<p class="describe">${link.description!}</p>
                <#else>
          			<p class="describe">他还没有自我介绍呢</p>
                </#if>
              </a>
    		</#list>
      		<div style="clear:both"></div>
    	</div>
  		</#list>
		</@linkTag><br>
          申请友链的方法：
          <ul>
            <li>名称：${blog_title!}</li>
            <li>地址：<a href="${context!}">${context!}</a></li>
            <li>图标：<a href="${static!}/source/images/favicon.png">${static!}/source/images/favicon.png</a></li>
            <li>描述：童话梦境，望仔的秘密基地</li>
          </ul>
          <p>添加友链后按以上格式在本帖留言即可,留言后看到会立即添加友链，一般和同样的博客类网站交换。</p>
          <p>如果要更换友链信息，也按以上格式留言，或者<a href="http://sighttp.qq.com/msgrd?v=1&amp;uin=361654768" target="_blank">QQ滴滴我</a>。</p>
      </div>
		<#if settings.share_type?? && settings.share_type!=''>
            <#include "layout/share/${settings.share_type}.ftl">
        </#if>
	</div>
</div>
<div class="card" id="comment-wrapper">
    <div class="card-content">
        <h3 class="title is-5 has-text-weight-normal">评论</h3>
        <script src="//cdn.jsdelivr.net/npm/vue@2.6.10/dist/vue.min.js"></script>
        <script src="${options.comment_internal_plugin_js!'//cdn.jsdelivr.net/gh/halo-dev/halo-comment@latest/dist/halo-comment.min.js'}"></script>
        <halo-comment id="2" type="sheet"/>
    </div>
</div>
</@layout>