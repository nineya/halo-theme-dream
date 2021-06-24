<#include "../layout.ftl">
<#include "article.ftl">
<#macro errorpage etitle,desc,status,content,message>
<@layout title="${status!}警报 - ${blog_title!}" canonical="${blog_url!}/500">
<style>
.content code .number{
	background-color: transparent;
	border-radius: 0;
	display: unset;
	font-size: .85em;
	margin-right: 0;
	padding:0;
	vertical-align: unset;
}
html{
	-webkit-filter: sepia(60%);    /* webkit内核支持程度较好 */  
    -moz-filter: sepia(60%);    /* 其他内核现在并不支持，为了将来兼容性书写 */  
    -ms-filter: sepia(60%);  
    -o-filter: sepia(60%);  
    filter: sepia(60%);  
}
.errorcontent{
	color:#FF2629;
}
.errorcontent>.errorsign{
	text-align: center
}
.errorcontent>.desc{
  font-size: 1.4em;
  text-indent: 2em;
}
</style>
<link rel="stylesheet" type="text/css" href="${theme_base!}/source/highlightjs/styles/${settings.code_pretty!'atom-one-light'}.min.css">
<link rel="stylesheet" type="text/css" href="${theme_base!}/source/css/post.css" />
<script src="${theme_base!}/source/highlightjs/highlight.min.js"></script>
<script src="https://cdn.bootcss.com/clipboard.js/2.0.4/clipboard.min.js"></script>  
<script type="text/javascript" src="${theme_base!}/source/js/post.js"></script>
<div class="card">
  	<div class="card-content">
      	<h2 class="title is-size-3 is-size-4-mobile has-text-weight-normal">${status!}警报 - ${etitle!}</h2>
	</div>
</div>
<div class="card">
  	<div class="card-content">
    	<div class="content errorcontent">
          	<div class="errorsign">
          		<i class="fa fa-exclamation-triangle fa-7x"></i>
          	</div>	
			<p class="desc">${desc!}</p>
			<p><b>警报代号：</b>${content!}.</p>
          	<p><b>警报编码：</b>${status!}</p>
			<p><b>警报内容：</b></p>
			<pre><code class="|绝密报告">${message!}</code></pre>
		</div>
	</div>
</div>
<@postTag method="latest" top="6">
<#if posts?? && posts?size gt 0>
<div class="card">
  	<div class="card-content">
      	<h2 class="title is-size-3 is-size-4-mobile has-text-weight-normal">最新文章推荐</h2>
	</div>
</div>
<#list posts as post>
    <@article post,'index','null',true />
</#list>
</#if>
</@postTag>
</@layout>
</#macro>