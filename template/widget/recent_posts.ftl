<div class="card widget recent-posts ${sidebar.hide!}">
    <div class="card-title">
      <i class="${(sidebar.icon?? && sidebar.icon != "")?then(sidebar.icon, "ri-history-line")} card-title-label"></i><span>${(sidebar.title?? && sidebar.title != "")?then(sidebar.title, "最新文章")}</span>
    </div>
    <@postTag method="latest" top="${settings.recent_posts_num!5}">
        <#if posts?size gt 0>
            <div class="card-content">
                <ul class="list">
                    <#list posts as post>
                        <li class="item">
                            <a class="link" href="${post.fullPath!}" title="${post.title!}">${post.title!}</a>
                            <i class="ri-link"></i>
                        </li>
                    </#list>
                </ul>
            </div>
        <#else>
            <div class="card-empty">暂无文章</div>
        </#if>
    </@postTag>
</div>