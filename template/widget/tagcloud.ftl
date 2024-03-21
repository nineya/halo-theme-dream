<#assign num= settings.tagcloud_num!32 />
<div class="card widget tagcloud ${sidebar.hide!}">
    <@tagTag method="list">
        <div class="card-title">
            <i class="${(sidebar.icon?? && sidebar.icon != "")?then(sidebar.icon, "ri-cloud-line")} card-title-label"></i><span>${(sidebar.title?? && sidebar.title != "")?then(sidebar.title, "标签云")}</span>
            <#if settings.tagcloud_more?? && settings.tagcloud_more== true && tags?size gt num?number>
                <a class="card-more" href="${tags_url!}">更多<i class="ri-arrow-right-double-line"></i></a>
            </#if>
        </div>
        <#if tags?? && tags?size gt 0>
            <div class="card-content">
                <#assign size= (tags?size > num?number)?string(num, tags?size)?number - 1 />
                <#list 0..size as i>
                    <#assign tag= tags[i] />
                    <#assign size= tag.name?length + tag.slug?length + tag.postCount />
                    <a href="${tag.fullPath!}"
                       style="font-size:${(size < 14)?string('14',(size > 32)?string('32',size?string))}px;<#if settings.enable_tagcloud_color!false >color: ${tag.color}</#if>">${tag.name!}</a>
                </#list>
            </div>
        <#else>
            <div class="card-empty">暂无标签</div>
        </#if>
    </@tagTag>
</div>