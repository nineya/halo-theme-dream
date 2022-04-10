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
                <div class="column is-8-tablet is-8-desktop is-6-widescreen has-order-2 column-main">
                    <#nested />
                </div>
                <@widget 'left' />
                <@widget 'right' />
            </div>
        </div>
    </section>
    <#include "common/footer.ftl">

    <#include "search/local.ftl">
    <#include "common/scripts.ftl">
</body>
</html>
</#macro>