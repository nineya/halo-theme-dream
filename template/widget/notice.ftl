<div class="card widget notice">
    <div class="card-content">
        <h3 class="menu-label">
            公告
        </h3>
        <div>${settings.notice_content!'<p>&emsp;&emsp;欢迎来访${blog_title!}，博主无话可说，没有发布任何公告！</p>'}</div>
    </div>
    <script>
        if ($('#toc .menu ul').length !== 0) {
            $('.notice').remove();
        }
    </script>
</div>