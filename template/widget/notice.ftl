<div class="card widget notice ${sidebar.hide!} is-hidden-all">
    <div class="card-title">
        <i class="${(sidebar.icon?? && sidebar.icon != "")?then(sidebar.icon, "ri-volume-up-line")} card-title-label"></i><span>${(sidebar.title?? && sidebar.title != "")?then(sidebar.title, "公告")}</span>
    </div>
    <div class="card-content">
        <div>${settings.notice_content!'<p>&emsp;&emsp;欢迎来访${blog_title!}，博主还没有发布任何公告！</p>'}</div>
    </div>
</div>