<div class="card widget love brightness ${settings.hide_love!}">
  <div class="card-title">
    <i class="fa fa-heart card-title-label"></i><span>恋爱墙</span>
  </div>
  <div class="card-content">
    <div class="love-content">
      <div class="level">
        <div class="level-item">
          <a class="avatar"
             target="_blank"${(settings.love_oneself_url?? && settings.love_oneself_url!='')?then(' href="${settings.love_oneself_url!}"','')}>
            <img class="avatar-image" src="${settings.love_oneself_avatar!user.avatar!}" alt="自己的头像">
          </a>
        </div>
        <div class="level-item">
          <svg viewBox="0 0 1024 1024" xmlns="http://www.w3.org/2000/svg"
               xmlns:xlink="http://www.w3.org/1999/xlink">
            <path fill="#ffd1da"
                  d="m629.4,576.5l117.6,-196.5l0.2,-0.3c64.7,-108.5 29.4,-248.9 -79,-313.8s-248.9,-29.7 -313.9,78.6l-4.9,-2.9c-108.5,-65 -249.1,-29.6 -314.1,78.9c-65,108.5 -29.6,249.1 78.9,314.1l4.9,2.9l191.6,114.7l201.4,120.5l117.3,-196.2z"/>
            <path fill="#ffa2b2"
                  d="m846.5,729.8l125,-125l0.2,-0.2c68.9,-69.1 68.8,-180.9 -0.2,-249.9s-180.8,-69 -249.9,-0.2l-3.1,-3.1c-69.1,-69.1 -181,-69.1 -250.1,0s-69.1,181 0,250.1l3.1,3.1l121.9,121.9l128.1,128.1l125,-124.8z"/>
          </svg>
        </div>
        <div class="level-item">
          <a class="avatar"
             target="_blank"${(settings.love_opposite_url?? && settings.love_opposite_url!='')?then(' href="${settings.love_opposite_url!}"','')}>
            <img class="avatar-image" src="${settings.love_opposite_avatar!}" alt="对方的头像">
          </a>
        </div>
      </div>
    </div>
    <p class="love-time" data-time="${settings.love_time!}"></p>
  </div>
</div>