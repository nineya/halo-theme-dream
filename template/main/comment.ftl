<#macro comment id,type>
    <#assign imageUploadApi = (settings.image_upload_api?? && settings.image_upload_api!='')?then(', "imageUploadApi": "${settings.image_upload_api!}"', '') >
    <#assign avatarLoading = (settings.avatar_loading?? && settings.avatar_loading!='')?then(', "avatarLoading": "${settings.avatar_loading!}"', '') >
    <#assign defaultAvatar = (settings.default_avatar?? && settings.default_avatar!='')?then(', "defaultAvatar": "${settings.default_avatar!}"', '') >
    <#assign anonymousUserName = (settings.anonymous_user_name?? && settings.anonymous_user_name!='')?then(', "anonymousUserName": "${settings.anonymous_user_name!}"', '') >
    <#assign enableBulletScreen = (is_journals??)?then("false", (metas?? && metas.enable_bullet_screen?? && metas.enable_bullet_screen?trim!="")?then(metas.enable_bullet_screen?trim, (settings.enable_bullet_screen!false)?c))>
    <#assign configs= '{"autoLoad": ${(settings.autoload_comment!true)?c
    }, "showUserAgent": ${(settings.show_comment_ua!true)?c
    }, "priorityQQAvatar": ${(settings.priority_qq_avatar!false)?c
    }, "getQQInfo": ${(settings.enable_qq_info!false)?c
    }, "commentHtml": ${(settings.enable_comment_html!false)?c
    }, "loadingStyle": "${settings.comment_loading_style!"default"
    }", "unfoldReplyNum": ${settings.unfold_reply_num!6
    }, "replyDescSoft": ${(settings.reply_desc_soft!false)?c
    }, "enableImageUpload": ${(settings.enable_image_upload!false)?c
    }, "enableBulletScreen": ${enableBulletScreen
    }${imageUploadApi!
    }${anonymousUserName!
    }, "enableBloggerOperation": ${(settings.enable_blogger_operation!true)?c
    }${avatarLoading!
    }${defaultAvatar!
    }}'>
  <halo-comment ${(enableBulletScreen == 'true')?then('bullet-screen="true"', '')} id="${id}" type="${type}" configs='${configs}'/>
</#macro>