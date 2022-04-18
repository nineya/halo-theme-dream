<div class="card widget${settings.hide_categories!}">
    <div class="card-title">
        <i class="fa fa-th-large card-title-label"></i><span>分类</span>
    </div>
    <div class="card-content">
        <@categoryTag method="list">
            <#if categories?? && categories?size gt 0>
                <ul class="menu-list">
                    <#list categories as category>
                        <li>
                            <a class="level is-marginless" href="${category.fullPath!}">
                                <span class="level-item">${category.name}</span>
                                <span class="level-item tag">${category.postCount}</span>
                            </a>
                        </li>
                    </#list>
                </ul>
            <#else>
                <div><p>&emsp;&emsp;欢迎来访${blog_title!}，目前还没有任何分类呢。</p></div>
            </#if>
        </@categoryTag>
    </div>
</div>