<@tagTag method="list">
    <#if tags?? && tags?size gt 0>
        <div class="card widget${settings.hide_tagcloud!}">
            <div class="card-title">
                <i class="fa fa-cloud card-title-label"></i><span>标签云</span>
            </div>
            <div class="card-content">
                <#list tags as tag>
                    <#assign size= tag.name?length + tag.slug?length + tag.postCount />
                    <a href="${tag.fullPath!}"
                       style="font-size:${(size < 14)?string('14',(size > 32)?string('32',size?string))}px">${tag.name!}</a>
                </#list>
            </div>
        </div>
    </#if>
</@tagTag>