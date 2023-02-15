<#if ((settings.music_mode!'playlist') == 'playlist' && settings.netease_playlist_id?? && settings.netease_playlist_id!='')
|| (settings.music_mode! == 'config' && settings.music_config?? && settings.music_config!='')>
    <div class="card widget music ${settings.hide_music!}">
        <div class="card-title">
            <i class="fa fa-music card-title-label"></i><span>音乐</span>
        </div>
        <div style="min-height: 90px;margin-top: -0.5rem;">
            <#if (settings.music_mode!'playlist') == 'playlist'>
                <meting-js list-folded="true" server="netease" type="playlist" id="${settings.netease_playlist_id!}"></meting-js>
            <#elseif settings.music_mode! == 'config'>
                <meting-js ${settings.music_config!}></meting-js>
            </#if>
        </div>
    </div>
</#if>