<#macro comment id,type>
    <#assign configs= '{"autoLoad": ${(settings.autoload_comment!true)?c}, "showUserAgent": ${(settings.show_comment_ua!true)?c}, "loadingStyle": "${settings.comment_loading_style!"default"}", "priorityQQAvatar": ${(settings.priority_qq_avatar!false)?c}, "getQQInfo": ${(settings.enable_qq_info!false)?c}}'>
    <halo-comment id="${id}" type="${type}" configs='${configs}'/>
</#macro>