<#assign num= settings.categories_num!10 />
<div class="card widget ${settings.hide_categories!}">
    <@categoryTag method="list">
        <div class="card-title">
            <i class="fa fa-th-large card-title-label"></i><span>分类</span>
            <#if settings.categories_more?? && settings.categories_more== true && categories?size gt num?number>
                <a class="card-more" href="${categories_url!}">更多<i class="fa fa-angle-double-right"></i></a>
            </#if>
        </div>
        <#if categories?? && categories?size gt 0>
            <div class="card-content">
                <ul class="menu-list">
                    <#assign size= (categories?size > num?number)?string(num, categories?size)?number - 1 />
                    <#list 0..size as i>
                        <#assign category= categories[i] />
                        <li>
                            <a class="level is-marginless" href="${category.fullPath!}">
                                <span class="level-item">${category.name}</span>
                                <span class="level-item tag">${category.postCount}</span>
                            </a>
                        </li>
                    </#list>
                </ul>
            </div>
        <#else>
            <div class="card-empty">暂无分类</div>
        </#if>
    </@categoryTag>
</div>