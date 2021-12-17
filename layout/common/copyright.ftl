<div class="article-copyright">
    <div class="copyright-title">
        <p>${post.title!}</p>
        <p><a href="${post.fullPath!}">${post.fullPath!}</a></p>
    </div>
    <div class="copyright-meta level is-mobile">
        <div class="level-left">
            <div class="level-item is-narrow">
                <div>
                    <h6>作者</h6>
                    <p>${user.nickname!}</p>
                </div>
            </div>
            <div class="level-item is-narrow">
                <div>
                    <h6>发布于</h6>
                    <p>${post.createTime?string('yyyy-MM-dd')}</p>
                </div>
            </div>
            <div class="level-item is-narrow">
                <div>
                    <h6>更新于</h6>
                    <p>${post.updateTime?string('yyyy-MM-dd')}</p>
                </div>
            </div>
            <div class="level-item is-narrow">
                <div>
                    <h6>许可协议</h6>
                    <p>
                        <a class="icons" rel="noopener" target="_blank" title="Creative Commons"
                           href="https://creativecommons.org/">
                            <i class="icon fab fa-creative-commons"></i>
                        </a>
                        <a class="" rel="noopener" target="_blank" title="CC BY 4.0"
                           href="https://creativecommons.org/licenses/by/4.0/deed.zh">CC BY 4.0</a>
                    </p>
                </div>
            </div>
        </div>
    </div>
</div>