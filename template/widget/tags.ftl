<#assign num= settings.tags_num!18 />
<div class="card widget tags ${settings.hide_tags!}">
    <@tagTag method="list">
        <div class="card-title">
            <i class="fa fa-tags card-title-label"></i><span>标签</span>
            <#if settings.tags_more?? && settings.tags_more== true && tags?size gt num?number>
                <a class="card-more" href="${tags_url!}">更多<i class="fa fa-angle-double-right"></i></a>
            </#if>
        </div>
        <#if tags?? && tags?size gt 0>
            <div class="card-content">
                <#assign size= (tags?size > num?number)?string(num, tags?size)?number - 1 />
                <#list 0..size as i>
                    <#assign tag= tags[i] />
                    <a href="${tag.fullPath!}"<#if settings.enable_tags_color!false > style="color: ${tag.color}; border-color: ${tag.color}; background: ${tag.color!}20" </#if>>${tag.name!}</a>
                </#list>
            </div>
        <#else>
            <div class="card-empty">暂无标签</div>
        </#if>
    </@tagTag>
</div>