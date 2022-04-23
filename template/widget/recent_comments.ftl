<div class="card widget ${settings.hide_recent_comments!}" id="comment">
    <div class="card-title">
        <i class="fa fa-commenting-o card-title-label"></i><span>最新评论</span>
    </div>
    <@commentTag method="latest" top="${settings.recent_comments_num!5}">
        <#if comments.content?size gt 0>
            <div class="card-content">
                <ul class="widget-comment">
                    <#list comments.content as comment>
                        <li class="item">
                            <div class="user">
                                <img width="35" height="35" class="avatar" src="${comment.avatar!}"
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