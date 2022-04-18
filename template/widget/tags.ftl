<div class="card widget${settings.hide_tags!}">
    <div class="card-title">
        <i class="fa fa-tags card-title-label"></i><span>标签</span>
    </div>
    <div class="card-content tags">
        <@tagTag method="list">
            <#list tags as tag>
                <#if tag_index lt settings.tag_cloud_max?default(18)?number>
                    <a href="${tag.fullPath!}">${tag.name!}</a>
                </#if>
            </#list>
        </@tagTag>
    </div>
</div>