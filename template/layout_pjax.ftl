<#macro layout_pjax title,canonical>
    <!DOCTYPE html>
    <html lang="zh">
    <head>
        <#include "common/head.ftl">
    </head>
    <body>
    <div class="column-main">
        <#nested />
    </div>
    <#include "common/scripts.ftl">
    </body>
    </html>
</#macro>