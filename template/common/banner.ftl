<div class="banner" ${(settings.banner_image ??&& settings.banner_image != '')?then('style="background-image: url(${settings.banner_image})"', '')}>
    <div class="banner-info">
        <div class="banner-info-title">${blog_title!}</div>
        <div class="banner-info-desc">${settings.banner_description!user.description!}</div>
    </div>
    <svg class="banner-waves" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 24 150 28" preserveAspectRatio="none" shape-rendering="auto">
        <defs>
            <path id="gentle-wave" d="M -160 44 c 30 0 58 -18 88 -18 s 58 18 88 18 s 58 -18 88
                    -18 s 58 18 88 18 v 44 h -352 Z"></path>
        </defs>
        <g class="parallax">
            <use xlink:href="#gentle-wave" x="48" y="0"></use>
            <use xlink:href="#gentle-wave" x="48" y="3"></use>
            <use xlink:href="#gentle-wave" x="48" y="5"></use>
            <use xlink:href="#gentle-wave" x="48" y="7"></use>
        </g>
    </svg>
</div>