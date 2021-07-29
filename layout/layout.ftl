<#macro layout title,canonical>
<#include "common/navbar.ftl">
<#include "common/widget.ftl">
<!DOCTYPE html>
<html lang="zh">
<head>
    <#include "common/head.ftl">
</head>
<body class="is-3-column">

    <!-- night mode -->
    <script type="text/javascript" src="${theme_base!}/source/js/night.js"></script>
    <canvas id="universe"></canvas>
    <script type="text/javascript" src="${theme_base!}/source/js/universe.js"></script>
    <!-- night mode -->
    <@navbar/>
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
    <#include "common/scripts.ftl">

    <#include "search/local.ftl">
</body>
</html>
</#macro>