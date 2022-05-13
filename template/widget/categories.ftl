<#macro categoriesTree categories>
    <#list categories as category>
        <li>
            <a class="level is-marginless" href="${category.fullPath!}">
                <span class="level-item">${category.name}</span>
                <span class="level-item tag">${postCounts[category.id?c]!}</span>
            </a>
            <#assign num=num?number-1/>
            <#if num?number gt 0 && category.children?? && category.children?size gt 0>
                <ul>
                    <@categoriesTree category.children/>
                </ul>
            </#if>
        </li>
        <#if num?number = 0>
            <#break>
        </#if>
    </#list>
</#macro>
<#assign num= settings.categories_num!10 />
<div class="card widget ${settings.hide_categories!}">
    <#assign postCounts = {}>
    <@categoryTag method="list">
        <div class="card-title">
            <i class="fa fa-th-large card-title-label"></i><span>分类</span>
            <#if settings.categories_more?? && settings.categories_more== true && categories?size gt num?number>
                <a class="card-more" href="${categories_url!}">更多<i class="fa fa-angle-double-right"></i></a>
            </#if>
        </div>
        <#list categories as category>
            <#assign postCounts += {category.id: category.postCount}>
        </#list>
    </@categoryTag>
    <@categoryTag method="tree">
        <#if categories?? && categories?size gt 0>
            <div class="card-content">
                <ul class="menu-list">
                    <@categoriesTree categories/>
                </ul>
            </div>
        <#else>
            <div class="card-empty">暂无分类</div>
        </#if>
    </@categoryTag>
</div>