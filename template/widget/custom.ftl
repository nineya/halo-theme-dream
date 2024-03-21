<div class="card widget ${sidebar.hide!}">
    <#if sidebar.title?? && sidebar.title != '' && sidebar.icon?? && sidebar.icon != ''>
      <div class="card-title">
        <i class="${sidebar.icon} card-title-label"></i><span>${sidebar.title}</span>
      </div>
    </#if>
    ${sidebar.content!}
</div>