<#include "template/layout.ftl">
<@layout title="${photos_title!'我的相册'} - ${blog_title!}" canonical="${photos_url!}">
    <#if (photos.content)?? && photos.content?size gt 0>
        <div class="card card-content photos">
            <div class="card-tab"><div>${photos_title!'我的相册'}</div></div>
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
            <i class="ri-inbox-2-fill"></i>
            内容为空，回<a href="${context!}">主页</a>看看吧
        </div>
    </#if>
</@layout>