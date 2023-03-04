<div class="copyright">
    <div class="copyright-title">
        <p>${post.title!}</p>
        <a href="${post.fullPath!}">${(context == '/')?then(blog_url + post.fullPath, post.fullPath)}</a>
    </div>
    <div class="copyright-meta level">
        <div class="level-item">
            <h6>作者</h6>
            <p>${user.nickname!}</p>
        </div>
        <div class="level-item">
            <h6>发布于</h6>
            <p>${post.createTime?string('yyyy-MM-dd')}</p>
        </div>
        <div class="level-item">
            <h6>更新于</h6>
            <p>${post.updateTime?string('yyyy-MM-dd')}</p>
        </div>
        <div class="level-item">
            <h6>许可协议</h6>
            <a rel="noopener" target="_blank" title="CC BY 4.0"
               href="https://creativecommons.org/licenses/by/4.0/deed.zh"><i class="icon fa fa-creative-commons"></i>CC BY 4.0</a>
        </div>
    </div>
</div>