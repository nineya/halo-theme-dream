<#macro comment id,type>
    <#assign imageToken = (settings.image_token?? && settings.image_token!='')?then(', "imageToken": "${settings.image_token!}"', '') >
    <#assign avatarLoading = (settings.avatar_loading?? && settings.avatar_loading!='')?then(', "avatarLoading": "${settings.avatar_loading!}"', '') >
    <#assign defaultAvatar = (settings.default_avatar?? && settings.default_avatar!='')?then(', "defaultAvatar": "${settings.default_avatar!}"', '') >
    <#assign configs= '{"autoLoad": ${(settings.autoload_comment!true)?c
    }, "showUserAgent": ${(settings.show_comment_ua!true)?c
    }, "priorityQQAvatar": ${(settings.priority_qq_avatar!false)?c
    }, "getQQInfo": ${(settings.enable_qq_info!false)?c
    }, "commentHtml": ${(settings.enable_comment_html!false)?c
    }, "loadingStyle": "${settings.comment_loading_style!"default"
    }", "unfoldReplyNum": ${settings.unfold_reply_num!6
    }, "replyDescSoft": ${(settings.reply_desc_soft!false)?c
    }${imageToken!
    }${avatarLoading!
    }${defaultAvatar!
    }}'>
  <halo-comment id="${id}" type="${type}" configs='${configs}'/>
</#macro>