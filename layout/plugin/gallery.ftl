<#if is_post?? || is_sheet??>
<script src="${theme_base!}/source/js/lightgallery.js" defer></script>
<script src="//cdn.jsdelivr.net/npm/justifiedGallery@3.7.0/dist/js/jquery.justifiedGallery.min.js" defer></script>
<#if settings.gallery_plus!true>
<script src="${theme_base!}/source/js/lg-fullscreen.js" defer></script>
<script src="${theme_base!}/source/js/lg-zoom.js" defer></script>
</#if>
</#if>