(function ($) {
    // 选中当前界面所对应的标签
    var url = location.href;
    var urlstatus = false;
    $(".navbar-start a").each(function () {
        if ((url + '/').indexOf($(this).attr('href')) > -1 && $(this).attr('href') != '/') {
            $(this).addClass('is-active');
            urlstatus = true;
        } else {
            $(this).removeClass('is-active');
        }
    });
    if (!urlstatus) {
        $(".navbar-start a").eq(0).addClass('is-active');
    }
    let initTop = 0
    // true：上划，false：下滑
    function scrollDirection (currentTop) {
        const result = currentTop > initTop
        initTop = currentTop
        return result
    }
    var flag = false;
    // 多行显示时，滚动折叠网站logo
    $(document).scroll(function() {
        var scrollTop = $(document).scrollTop()
        const direction = scrollDirection(scrollTop);
        if($(window).width() < 1024 && !flag) {
            if(scrollTop<=100){
                flag = true;
                $(".navbar-fixed>.container .navbar-brand").slideDown(200, function(){flag = false});
            }else if(scrollTop>150){
                flag = true;
                $(".navbar-fixed>.container .navbar-brand").slideUp(200, function(){flag = false});
            }
        }
        if (direction && scrollTop>150) {
            $(".navbar-dynamic").addClass("move-up");
        } else {
            $(".navbar-dynamic").removeClass("move-up");
        }
    });

    // 用链接和标题包装图像
    $('.article img:not(".not-gallery-item")').each(function () {
        if ($(this).parent('a').length === 0) {
            $(this).wrap('<a class="gallery-item" href="' + $(this).attr('src') + '"></a>');
            if (this.alt) {
                $(this).after('<div class="has-text-centered is-size-6 has-text-grey caption">' + this.alt + '</div>');
            }
        }
    });

    // 处理表格
    $('.article > .content > table').each(function () {
        if ($(this).width() > $(this).parent().width()) {
            $(this).wrap('<div class="table-overflow"></div>');
        }
    });

    // 折叠导航栏，在窗口界面不足时折叠
    function adjustNavbar() {
        const navbarWidth = $('.navbar-main .navbar-start').outerWidth() + $('.navbar-main .navbar-end').outerWidth();
        if ($(document).outerWidth() < navbarWidth) {
            $('.navbar-main .navbar-menu').addClass('is-flex-start');
        } else {
            $('.navbar-main .navbar-menu').removeClass('is-flex-start');
        }
    }
    adjustNavbar();
    $(window).resize(adjustNavbar);

    // 实现widget置底
    var columnLeft = $(".left-bottom")[0];
    function leftSetBottom() {
        $(window).width() < 769 ? columnLeft.style.top = null : columnLeft ? columnLeft.style.top = $(window).height() - columnLeft.scrollHeight - 10 + "px" : setTimeout(function () {
            columnLeft = $(".left-bottom")[0],
                leftSetBottom()
        }, 500)
    }
    leftSetBottom(), $(window).resize(leftSetBottom);
    var columnRight = $(".right-bottom")[0];
    function rightSetBottom() {
        if ($(window).width() > 1215) {
            columnRight ? columnRight.style.top = $(window).height() - columnRight.scrollHeight - 10 + "px" : setTimeout(function () {
                columnRight = $(".right-bottom")[0],
                    rightSetBottom()
            }, 500)
        }
    }
    rightSetBottom(), $(window).resize(rightSetBottom);
    // 日志界面的评论区展示和折叠
    $(".journal-operation .comment").click(function () {
        $(this).parent().parent().children(".journal-comment").stop().slideToggle(200)
    })
})(jQuery);
/**
 * 博客搭建时间倒计时功能
 */
function websiteTime(timeStr, dayId, timeId) {
    var now = new Date();
    var grt = new Date(timeStr);
    var websiteDay = document.getElementById(dayId);
    var websiteTime = document.getElementById(timeId);
    setInterval(function () {
        now.setTime(now.getTime() + 1000);
        difference = parseInt((now - grt) / 1000);
        seconds = difference % 60;
        if (String(seconds).length == 1) {
            seconds = "0" + seconds;
        }
        difference = parseInt(difference / 60);

        minutes = difference % 60;
        if (String(minutes).length == 1) {
            minutes = "0" + minutes;
        }
        difference = parseInt(difference / 60);

        hours = difference % 24;
        if (String(hours).length == 1) {
            hours = "0" + hours;
        }
        days = parseInt(difference / 24);
        websiteDay.innerHTML = "建站 " + days + " 天 ";
        websiteTime.innerHTML = hours + " 小时 " + minutes + " 分 " + seconds + " 秒";
    }, 1000);
}