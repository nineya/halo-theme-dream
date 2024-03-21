<#if ((settings.music_mode!'playlist') == 'playlist' && settings.netease_playlist_id?? && settings.netease_playlist_id!='')
|| (settings.music_mode! == 'config' && settings.music_config?? && settings.music_config!='')>
    <#assign sidebar_music = true>
    <div class="card widget music ${sidebar.hide!}">
        <div class="card-title">
          <i class="${(sidebar.icon?? && sidebar.icon != "")?then(sidebar.icon, "ri-music-2-line")} card-title-label"></i><span>${(sidebar.title?? && sidebar.title != "")?then(sidebar.title, "音乐")}</span>
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