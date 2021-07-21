<#include "layout/layout.ftl">
<@layout title="相册 - ${blog_title!}" canonical="${photos_url!}">
<link rel="stylesheet" href="${theme_base!}/source/css/photos.css">
<script>
document.addEventListener('DOMContentLoaded', function () {
    if (typeof ($.fn.lightGallery) === 'function') {
        $('.photos').lightGallery({ selector: '.picture-item>a' });
    }
});
</script>
<@photoTag method="count">
<#if count!=0>
<div class="content">
<@photoTag method="listTeams">
<#list teams as item>
<div class="photos">
  	<div class="photo column">
    <#if item.team?? && item.team!=''>
  		<h2 class="card" id="toc${item_index}">${item.team}</h2>
    <#else>
  		<h2 class="card" id="toc${item_index}">图库</h2>
    </#if>
    <#list item.photos as photo>
    	<div class="column is-12-mobile is-6-tablet is-4-desktop is-4-widescreen is-4-fullhd">
        	<div class="picture-item card">
              	<a href="${photo.url}">
                	<div class="picture-details">
                      	<img class="picture" src="${photo.thumbnail}" alt="${photo.description!}">
                      	<#if photo.description?? && photo.description!=''>
                      	<div class="picture-description">${photo.description!}</div>
                        </#if>
                    </div>
                </a>
            	<div class="picture-bottom">
                <b title="${photo.name!}" class="picture-title">${photo.name!}</b>
                <div class="picture-info">
                  	<div>${photo.takeTime?string('yyyy年MM月dd日 hh:mm')}</div>
                    <#if photo.location?? && photo.location!=''>
                    <div class="location"><i class="fas fa-map-marker-alt has-mr-7"></i>${photo.location!}</div>
                    <#else>
                    <div class="location"><i class="fas fa-map-marker-alt has-mr-7"></i>未知地带</div>
                    </#if>
                </div>
                </div>
            </div>
        </div>
    </#list>
  	</div>
	<div style="clear:both"></div>
</div>
</#list>
</@photoTag>
</div>
<#else>
<div class="card widget none">
    <div class="card-content">
        <div class="none-content">
        	<span class="text-muted"><i class="fas fa-inbox fa-7x"></i></span>
        	<span class="text-muted none-text">相册空空如也，回<a class="font-weight-bold" href="${blog_url!}">主页</a>看看吧</span>
        </div>
    </div>
</div>
</#if>
</@photoTag>
</@layout>