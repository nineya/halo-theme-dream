<#macro toc position>
<div class="card widget ${position}toc" id="toc">
    <div class="card-content">
        <div class="menu">
        </div>
    </div>
<script src="${theme_base!}/source/js/btoc.js"></script>
<script>
Btoc.init({
    tocList: ['h1','h2','h3','h4','h5'],
	contentElement: $('.content')[0],
	tocElement: $('.${position}toc .menu')[0],
	scrollSpeed: 20,
	headingsOffset: 50
});
 if($('.${position}toc .menu ul').length==0){
 	$('.${position}toc').remove();
 }else{
 	$('.notice').remove();
	$('.${position}toc .menu').prepend(`<h3 class="menu-label">目录</h3>`);
	$('.${position}toc .menu ul').addClass("menu-list");
	$('.${position}toc .menu a').addClass("is-flex").prepend(`<i class="fas fa-paperclip"></i><span class="has-mr-6"></span>`);
 }
</script>
<style>.menu-list>li>a.is-active+.menu-list{display:block}.menu-list>li>a+.menu-list{display:none}</style>
<script src="${theme_base!}/source/js/toc.js"></script>
</div>
</#macro>