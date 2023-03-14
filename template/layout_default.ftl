<#macro layout_default title,canonical>
    <#include "common/widget.ftl">
    <#import "common/navbar.ftl" as nav>
    <!DOCTYPE html>
    <html lang="zh" class="${settings.theme_style!'default'}">
    <head>
        <#include "common/head.ftl">
    </head>
    <body>
    <@nav.navbar/>
    <#if settings.enable_banner!false ><#include "common/banner.ftl"></#if>
    <section class="section">
        <div class="container<#if settings.sidebar_column?? && settings.sidebar_column!='all'> two-column</#if>">
            <#if settings.index_inform?? && settings.index_inform != '' >
                <div class="card tips brightness ${(is_index?? && posts.number == 0)?then("", "is-hidden-all")}">${settings.index_inform}</div>
            </#if>
            <div class="columns">
                <div class="column column-main">
                    <#nested />
                </div>
                <#if !settings.sidebar_column?? || settings.sidebar_column!='only-right'>
                    <@widget 'left' />
                </#if>
                <#if !settings.sidebar_column?? || settings.sidebar_column!='only-left'>
                    <@widget 'right' />
                </#if>
            </div>
        </div>
    </section>
    <#include "common/actions.ftl">
    <#include "common/footer.ftl">
    <#include "common/scripts.ftl">
    </body>
    </html>
</#macro>