<#assign sidebar_toc = true>
<div class="card widget toc ${sidebar.hide!} is-hidden-all">
    <div class="card-title">
        <i class="${(sidebar.icon?? && sidebar.icon != "")?then(sidebar.icon, "ri-book-2-line")} card-title-label"></i><span>${(sidebar.title?? && sidebar.title != "")?then(sidebar.title, "目录")}</span>
    </div>
    <div class="card-content toc-content">
    </div>
</div>