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
    // 用链接和标题包装图像
    $('.article img:not(".not-gallery-item")').each(function () {
        if ($(this).parent('a').length === 0) {
            $(this).wrap('<a class="gallery-item" href="' + $(this).attr('src') + '"></a>');
            if (this.alt) {
                $(this).after('<div class="has-text-centered is-size-6 has-text-grey caption">' + this.alt + '</div>');
            }
        }
    });

    if (typeof (moment) === 'function') {
        $('.article-meta time').each(function () {
            $(this).text(moment($(this).attr('datetime')).fromNow());
        });
    }

    $('.article > .content > table').each(function () {
        if ($(this).width() > $(this).parent().width()) {
            $(this).wrap('<div class="table-overflow"></div>');
        }
    });

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

    $('figure.highlight table').wrap('<div class="highlight-body">');
    if (typeof (IcarusThemeSettings) !== 'undefined' &&
        typeof (IcarusThemeSettings.article) !== 'undefined' &&
        typeof (IcarusThemeSettings.article.highlight) !== 'undefined') {
        if (typeof (ClipboardJS) !== 'undefined' && IcarusThemeSettings.article.highlight.clipboard) {
            $('figure.highlight').each(function () {
                var id = 'code-' + Date.now() + (Math.random() * 1000 | 0);
                var button = '<a href="javascript:;" class="copy" title="Copy" data-clipboard-target="#' + id + ' .code"><i class="fas fa-copy"></i></a>';
                $(this).attr('id', id);
                if ($(this).find('figcaption').length) {
                    $(this).find('figcaption').prepend(button);
                } else {
                    $(this).prepend('<figcaption>' + button + '</figcaption>');
                }
            });
            new ClipboardJS('.highlight .copy');
        }
        var fold = IcarusThemeSettings.article.highlight.fold;
        if (fold.trim()) {
            var button = '<span class="fold">' + (fold === 'unfolded' ? '<i class="fas fa-angle-down"></i>' : '<i class="fas fa-angle-right"></i>') + '</span>';
            $('figure.highlight').each(function () {
                if ($(this).find('figcaption').length) {
                    $(this).find('figcaption').prepend(button);
                } else {
                    $(this).prepend('<figcaption>' + button + '</figcaption>');
                }
            });

            function toggleFold(codeBlock, isFolded) {
                var $toggle = $(codeBlock).find('.fold i');
                !isFolded ? $(codeBlock).removeClass('folded') : $(codeBlock).addClass('folded');
                !isFolded ? $toggle.removeClass('fa-angle-right') : $toggle.removeClass('fa-angle-down');
                !isFolded ? $toggle.addClass('fa-angle-down') : $toggle.addClass('fa-angle-right');
            }

            $('figure.highlight').each(function () {
                toggleFold(this, fold === 'folded');
            });
            $('figure.highlight figcaption .fold').click(function () {
                var $code = $(this).closest('figure.highlight');
                toggleFold($code.eq(0), !$code.hasClass('folded'));
            });
        }
    }

    var $toc = $('#toc');
    if ($toc.length > 0) {
        var $mask = $('<div>');
        $mask.attr('id', 'toc-mask');

        $('body').append($mask);

        function toggleToc() {
            $toc.toggleClass('is-active');
            $mask.toggleClass('is-active');
        }

        $toc.on('click', toggleToc);
        $mask.on('click', toggleToc);
        $('.navbar-main .catalogue').on('click', toggleToc);
    }
    var columnLeft = $(".left-bottom")[0];

    function leftSetBottom() {
        $(window).width() < 769 ? columnLeft.style.top = null : columnLeft ? columnLeft.style.top = $(window).height() - columnLeft.scrollHeight - 10 + "px" : setTimeout(function () {
            columnLeft = $(".left-bottom")[0],
                leftSetBottom()
        }, 500)
    }

    leftSetBottom(),
        $(window).resize(leftSetBottom);
    var columnRight = $(".right-bottom")[0];

    function rightSetBottom() {
        $(window).width() < 769 ? columnRight.style.top = null : columnRight ? columnRight.style.top = $(window).height() - columnRight.scrollHeight - 10 + "px" : setTimeout(function () {
            columnRight = $(".right-bottom")[0],
                rightSetBottom()
        }, 500)
    }

    rightSetBottom(),
        $(window).resize(rightSetBottom);
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