const photoContext = {
    /* 初始化相册列表 */
    initPhotos() {
        const $photosGallery = $('.photos-gallery')
        let isLoading = false;
        let isEnd = false;
        const queryParams = {
            page: 0,
            size: 15,
            sort: "createTime,desc",
        };


        const renderPhotos = (data) => {
            const photosHtml = data.reduce((result, item, index) => {
                return `${result}<div href="${item.url}" data-fancybox="gallery" data-caption="${item.description || item.name || ""
                }"><img width="100%" height="100%" src="${item.thumbnail}" alt="${item.name || ""
                }"/><span class="team">${item.team}</span><p class="tit">${item.name
                }</p><div class="info"><p class="animated fadeInRightBig"><i class="joe-font joe-icon-paizhao"></i><span>${item.name
                }</span></p>${
                    item.location
                        ? `<p class="animated fadeInRightBig"><i class="joe-font joe-icon-dingwei"></i><span>${item.location}</span></p>`
                        : ""
                }<p class="animated fadeInRightBig"><i class="joe-font joe-icon-shijian"></i>${Utils.formatDate(item.takeTime)
                }</p></div></div>`;
            }, '');
            $photosGallery.append(photosHtml);

            $photosGallery
                .justifiedGallery({
                    rowHeight: 200,
                    maxRowHeight: false,
                    maxRowsCount: 0,
                    sizeRangeSuffixes: {},
                    lastRow: "nojustify",
                    captions: false,
                    waitThumbnailsLoad: true, //等待图片加载完，这样就可以根据图片比例展示，如果为false，则都是统一比例
                    margins: 10,
                    extension: /\.(jpe?g|png|gif|bmp|webp)$/,
                    cssAnimation: false,
                })
        }

        /* 获取相册数据 */
        const getData = (param) => {
            isLoading = true;
            $photosGallery.addClass('loading');
            const params = { ...queryParams, ...(param || {}) };
            return Utils.request({
                url: "/api/content/photos",
                method: "GET",
                data: params,
            })
                .then((res) => {
                    const photoContents = res.content || [];
                    if (photoContents.length !== 0) {
                        renderPhotos(photoContents);
                        isEnd = res.isLast;
                    } else {
                        isEnd = true;
                    }
                })
                .catch((err) => {
                })
                .finally(() => {
                    $photosGallery.removeClass('loading');
                    isLoading = false;
                });
        };

        getData()

        // 滚动加载
        window.addEventListener(
            "scroll",
            function () {
                if (
                    $(window).scrollTop() + $(window).height() >=
                    $photosGallery.height()
                ) {
                    if (isLoading || isEnd) return;
                    queryParams.page++;
                    getData({
                        team: $(".photos-teams li.active").attr("data-team"),
                        size: 10
                    });
                }
            }
        );

        // 重置列表
        const reset = (param) => {
            $photosGallery.empty();
            isEnd = false;
            isLoading = false;
            queryParams.page = 0;
            getData(param);
        };

        // 分组过滤
        $(".photos-teams .item").on("click", function (e) {
            e.stopPropagation();
            const $this = $(this);
            if ($this.hasClass("active")) return;
            $this.addClass("active").siblings("li").removeClass("active");
            reset({team: $this.attr("data-team")});
        });
    },
}
window.photoPjax = function (serialNumber) {
    Object.keys(photoContext).forEach(
        (c) => window.pjaxSerialNumber === serialNumber && photoContext[c]()
    );
}
!(function () {
    !window.pjaxSerialNumber && photoContext.initPhotos();
})();