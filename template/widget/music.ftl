<#if settings.music_config?? && settings.music_config!=''>
    <div class="card widget">
        <div class="card-content">
            <h3 class="menu-label">音乐</h3>
        </div>
        <div style="min-height: 90px;margin-top: -0.5rem;">
            <meting-js ${settings.music_config!}>
            </meting-js>
        </div>
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/aplayer/dist/APlayer.min.css">
        <link rel="stylesheet" href="${theme_base!}/src/css/music.css">
        <script src="https://cdn.jsdelivr.net/npm/aplayer/dist/APlayer.min.js"></script>
        <script src="https://cdn.jsdelivr.net/npm/meting@2.0.1/dist/Meting.min.js"></script>
    </div>
</#if>