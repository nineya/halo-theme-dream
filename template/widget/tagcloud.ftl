<#assign num= settings.tagcloud_num!32 />
<@tagTag method="list">
    <#if tags?? && tags?size gt 0>
        <div class="card widget ${settings.hide_tagcloud!}">
            <div class="card-title">
                <i class="fa fa-cloud card-title-label"></i><span>标签云</span>
                <#if settings.tagcloud_more?? && settings.tagcloud_more== true && tags?size gt num?number>
                    <a class="card-more" href="${tags_url!}">更多<i class="fa fa-angle-double-right"></i></a>
                </#if>
            </div>
            <div class="card-content">
                <#assign size= (tags?size > num?number)?string(num, tags?size)?number - 1 />
                <#list 0..size as i>
                    <#assign tag= tags[i] />
                    <#assign size= tag.name?length + tag.slug?length + tag.postCount />
                    <a href="${tag.fullPath!}"
                       style="font-size:${(size < 14)?string('14',(size > 32)?string('32',size?string))}px">${tag.name!}</a>
                </#list>
            </div>
        </div>
    </#if>
</@tagTag>