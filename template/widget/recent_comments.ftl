<div class="card widget recent-comments ${sidebar.hide!}">
    <div class="card-title">
      <i class="${(sidebar.icon?? && sidebar.icon != "")?then(sidebar.icon, "ri-message-2-line")} card-title-label"></i><span>${(sidebar.title?? && sidebar.title != "")?then(sidebar.title, "最新评论")}</span>
    </div>
    <@commentTag method="latest" top="${settings.recent_comments_num!5}">
        <#if comments.content?size gt 0>
            <div class="card-content">
                <ul class="widget-comment">
                    <#list comments.content as comment>
                        <li class="item">
                            <div class="user">
                                <img width="35" height="35" class="avatar" src="${(settings.priority_qq_avatar!false)?then(comment.avatar?replace('^.*(\\w{32}\\?)', 'https://cravatar.cn/avatar/$1', 'r'),comment.avatar!)}"
                                     alt="${comment.author!}">
                                <div class="info">
                                    <div class="author">${comment.author!}</div>
                                    <span class="date">${comment.createTime?string("yyyy-MM-dd")}</span>
                                </div>
                            </div>
                            <div class="reply">
                                <a class="link" href="${comment.post.fullPath!}#comment-wrapper">${comment.content!}</a>
                            </div>
                        </li>
                    </#list>
                </ul>
            </div>
        <#else>
            <div class="card-empty">暂无评论</div>
        </#if>
    </@commentTag>
</div>