<#include "template/layout.ftl">
<@layout title="相册 - ${blog_title!}" canonical="${photos_url!}">
    <#if (photos.content)?? && photos.content?size gt 0>
        <div class="card card-content photos">
            <div class="card-tab"><div>我的相册</div></div>
            <ul class="photos-teams">
                <li class="item">全部</li>
                <@photoTag method="listTeams">
                    <#list teams as item>
                        <li class="item" data-team="p-${item.team}">${((item.team)?length>0)?then(item.team?trim,'默认图库')}</li>
                    </#list>
                </@photoTag>
            </ul>
        </div>
        <div class="photos-gallery load-block"></div>
    <#else>
        <div class="card card-empty">
            <i class="fa fa-inbox"></i>
            还没有上传过相册，回<a href="${context!}">主页</a>看看吧
        </div>
    </#if>
</@layout>