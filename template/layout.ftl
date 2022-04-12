<#macro layout title,canonical>
<#include "common/widget.ftl">
<#import "common/navbar.ftl" as nav>
<!DOCTYPE html>
<html lang="zh">
<head>
    <#include "common/head.ftl">
</head>
<body>
    <@nav.navbar/>

    <!-- night mode -->
    <script type="text/javascript" src="${theme_base!}/src/js/night.js"></script>
    <canvas id="universe"></canvas>
    <script type="text/javascript" src="${theme_base!}/src/js/universe.js"></script>
    <!-- night mode -->
    <section class="section">
        <div class="container">
            <div class="columns">
                <div class="column column-main">
                    <#nested />
                </div>
                <@widget 'left' />
                <@widget 'right' />
            </div>
        </div>
    </section>
    <#include "common/footer.ftl">
    <#include "common/actions.ftl">
    <#include "common/scripts.ftl">
</body>
</html>
</#macro>