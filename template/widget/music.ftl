<#if settings.music_config?? && settings.music_config!=''>
    <div class="card widget">
        <div class="card-title">
            <i class="fa fa-music card-title-label"></i><span>音乐</span>
        </div>
        <div style="min-height: 90px;margin-top: -0.5rem;">
            <meting-js ${settings.music_config!}>
            </meting-js>
        </div>
        <link rel="stylesheet" href="//cdn.jsdelivr.net/npm/aplayer/dist/APlayer.min.css">
        <link rel="stylesheet" href="${theme_base!}/src/css/music.css">
        <script src="//cdn.jsdelivr.net/npm/aplayer/dist/APlayer.min.js"></script>
        <script src="//cdn.jsdelivr.net/npm/meting@2.0.1/dist/Meting.min.js"></script>
    </div>
</#if>