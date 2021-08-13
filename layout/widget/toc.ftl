<div class="card widget" id="toc">
    <div class="card-content">
        <h3 class="menu-label">目录</h3>
        <div class="menu">
        </div>
    </div>
<script src="${theme_base!}/source/js/btoc.js"></script>
<script>
Btoc.init({
    tocList: ['h1','h2','h3','h4','h5'],
	contentElement: $('.content')[0],
	tocElement: $('#toc .menu')[0]
});
 if($('#toc .menu ul').length===0){
 	$('#toc').remove();
    $('.navbar-main .catalogue').remove();
 }else{
	$('#toc .menu ul').addClass("menu-list");
	$('#toc .menu a').addClass("is-flex").prepend(`<i class="fas fa-paperclip"></i><span class="has-mr-6"></span>`);
 }
</script>
</div>