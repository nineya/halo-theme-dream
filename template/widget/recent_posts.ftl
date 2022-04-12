<div class="card widget">
    <div class="card-title">
        <i class="fa fa-clock-o card-title-label"></i><span>最新文章</span>
    </div>
    <div class="card-content recent-post">
        <@postTag method="latest" top="5">
            <#if posts?size gt 0>
                <ul class="list">
                    <#list posts as post>
                        <li class="item">
                            <a class="link" href="${post.fullPath!}" title="${post.title!}">${post.title!}</a>
                            <i class="fa fa-link"></i>
                        </li>
                    </#list>
                </ul>
            <#else>
                <div><p>&emsp;&emsp;欢迎来访${blog_title!}，最近${user.nickname!}没有更新过文章呢。</p></div>
            </#if>
        </@postTag>
    </div>
</div>