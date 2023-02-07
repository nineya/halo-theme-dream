<div class="card widget love ${settings.hide_love!}">
    <div class="card-title">
        <i class="fa fa-heart card-title-label"></i><span>恋爱墙</span>
    </div>
    <div class="card-content">
        <div class="level">
            <div class="level-item">
                <a class="avatar" target="_blank"${(settings.love_oneself_url?? && settings.love_oneself_url!='')?then(' href="${settings.love_oneself_url!}"','')}>
                    <img class="avatar-image" src="${settings.love_oneself_avatar!user.avatar!}" alt="自己的头像">
                </a>
            </div>
            <div class="level-item">
                <i class="fa fa-bolt"></i>
            </div>
            <div class="level-item">
                <a class="avatar" target="_blank"${(settings.love_opposite_url?? && settings.love_opposite_url!='')?then(' href="${settings.love_opposite_url!}"','')}>
                    <img class="avatar-image" src="${settings.love_opposite_avatar!}" alt="对方的头像">
                </a>
            </div>
        </div>
        <p class="love-time">${settings.love_time!}</p>
    </div>
</div>