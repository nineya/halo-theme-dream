<#macro layout_default title,canonical>
    <#include "common/widget.ftl">
    <#import "common/navbar.ftl" as nav>
    <!DOCTYPE html>
    <html lang="zh">
    <head>
        <#include "common/head.ftl">
    </head>
    <body>
    <#if settings.background_effects?? && settings.background_effects!='none'>
        <canvas id="background_effects" class="${settings.background_effects_mode} ${settings.background_effects}"></canvas>
    </#if>
    <@nav.navbar/>
    <section class="section">
        <div class="container<#if settings.sidebar_column?? && settings.sidebar_column!='all'> two-column</#if>">
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
    <#if settings.foreground_effects?? && settings.foreground_effects!='none'>
        <canvas id="foreground_effects" class="${settings.foreground_effects_mode} ${settings.foreground_effects}"></canvas>
    </#if>
    <#include "common/scripts.ftl">
    </body>
    </html>
</#macro>