<div class="social-share"></div>
<link rel="stylesheet" href="https://unpkg.com/social-share.js@1.0.16/dist/css/share.min.css">
<script async src="https://unpkg.com/social-share.js@1.0.16/dist/js/social-share.min.js"></script>

<link rel="stylesheet" href="${theme_base!}/source/css/dshare.min.css">
<script data-pjax src="${theme_base!}/source/lib/clipboard@2.0.10/clipboard.min.js"></script>
<script data-pjax src="${theme_base!}/source/js/dshare.min.js"></script>
<div class="dshare"></div>
<script>
    let imageUrl = $('.cover-image').css('background-image');
    imageUrl && ( imageUrl = imageUrl.substring(5,imageUrl.length -2));
    console.log(imageUrl)
    DShare.create('.dshare', {image: imageUrl, imageSelector: '.main-content'})
</script>