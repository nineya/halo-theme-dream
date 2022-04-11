$(document).pjax("a[target!=_blank]", "body", {
	scrollTo: $("body").offsetTop - 60,
	fragment: "body",
	timeout: 5000,
});

// NProgress.configure({
// 	showSpinner: true,
// 	easing: "ease-out",
// 	speed: 1000,
// });

// pjax开始
$(document).on("pjax:send", function () {
	// NProgress.start();
	if ($("#js-toc").length) tocbot.destroy();
	$("html, body").animate(
		{
			scrollTop: $("body").position().top - 60,
		},
		500
	);
});

// pjax结束
$(document).on("pjax:complete", function () {
	// NProgress.done();
	$("script[data-pjax]").each(function () {
		$(this).parent().append($(this).remove());
	});
});
