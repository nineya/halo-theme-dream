<div class="card widget recent-posts ${settings.hide_recent_posts!}">
    <div class="card-title">
        <i class="fa fa-history card-title-label"></i><span>最新文章</span>
    </div>
    <@postTag method="latest" top="${settings.recent_posts_num!5}">
        <#if posts?size gt 0>
            <div class="card-content">
                <ul class="list">
                    <#list posts as post>
                        <li class="item">
                            <a class="link" href="${post.fullPath!}" title="${post.title!}">${post.title!}</a>
                            <i class="fa fa-link"></i>
                        </li>
                    </#list>
                </ul>
            </div>
        <#else>
            <div class="card-empty">暂无文章</div>
        </#if>
    </@postTag>
</div>