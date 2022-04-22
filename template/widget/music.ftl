<#if settings.music_config?? && settings.music_config!=''>
    <div class="card widget ${settings.hide_music!}">
        <div class="card-title">
            <i class="fa fa-music card-title-label"></i><span>音乐</span>
        </div>
        <div style="min-height: 90px;margin-top: -0.5rem;">
            <meting-js ${settings.music_config!}>
            </meting-js>
        </div>
    </div>
</#if>