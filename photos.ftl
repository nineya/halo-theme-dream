<#include "template/layout.ftl">
<@layout title="相册 - ${blog_title!}" canonical="${photos_url!}">
    <@photoTag method="count">
        <#if count!=0>
            <div class="main-content photos">
                <@photoTag method="listTeams">
                    <#list teams as item>
                        <div class="card">
                            <#if item.team?? && item.team!=''>
                                <h2 class="title card-content main-title"
                                    id="toc${item_index}">${item.team}</h2>
                            <#else>
                                <h2 class="title card-content main-title" id="toc${item_index}">图库</h2>
                            </#if>
                        </div>
                        <div class="photo">
                            <#list item.photos as photo>
                                <div class="column">
                                    <div class="card widget">
                                        <div class="picture-details" href="${photo.url}" data-fancybox="gallery" data-caption="${photo.description!}">
                                            <img src="${photo.thumbnail}"
                                                 alt="${photo.description!}">
                                            <#if photo.description?? && photo.description!=''>
                                                <div class="picture-description">${photo.description!}</div>
                                            </#if>
                                        </div>
                                        <div class="picture-bottom">
                                            <b>${photo.name!}</b>
                                            <div class="picture-info">
                                                <div>${photo.takeTime?string('yyyy年MM月dd日 hh:mm')}</div>
                                                <#if photo.location?? && photo.location!=''>
                                                    <div class="location"><i class="fa fa-map-marker"></i>${photo.location!}</div>
                                                <#else>
                                                    <div class="location"><i class="fa fa-map-marker"></i>未知地带</div>
                                                </#if>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </#list>
                        </div>
                        <div style="clear:both"></div>
                    </#list>
                </@photoTag>
            </div>
        <#else>
            <div class="card card-empty">
                <i class="fa fa-inbox"></i>
                还没有上传过相册，回<a href="${context!}">主页</a>看看吧
            </div>
        </#if>
    </@photoTag>
</@layout>