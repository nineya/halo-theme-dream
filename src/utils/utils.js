var Utils = {
    /**
     * 时间格式化
     * @param {*} time
     */
    formatDate(date, fmt = "yyyy-MM-dd") {
        date = new Date(date);
        if (/(y+)/.test(fmt)) {
            fmt = fmt.replace(
                RegExp.$1,
                (date.getFullYear() + "").substr(4 - RegExp.$1.length)
            );
        }
        let o = {
            "M+": date.getMonth() + 1,
            "d+": date.getDate(),
            "h+": date.getHours(),
            "m+": date.getMinutes(),
            "s+": date.getSeconds(),
        };
        for (let k in o) {
            if (new RegExp(`(${k})`).test(fmt)) {
                let str = o[k] + "";
                fmt = fmt.replace(
                    RegExp.$1,
                    RegExp.$1.length === 1 ? str : str.padStart(2, "0")
                );
            }
        }
        return fmt;
    },
    /* 获取URL中带的链接参数
   * @param search 链接后缀
   * @return {{}} 对象
   */
    getUrlParams() {
        var search = location.search;

        // 判断是否为字符串类型
        if (typeof search !== "string") {
            search = search.toString();
        }

        var paramsSplit = search.replace(/^[^\?]*\?/i, "").split(/&/);
        var params = {};

        // 数据为空
        if (paramsSplit.length < 1) {
            return params;
        }

        if (Array.isArray(paramsSplit)) {
            paramsSplit.forEach(function (item) {
                // 数据为空, 退出方法
                if (!item) {
                    return false;
                }
                var itemSplit = item.split(/=/);

                // 判断字符串中是否有多个=
                if (itemSplit.length >= 2) {
                    // 是
                    var key = itemSplit.splice(0, 1);
                    params[key] = itemSplit.join("=");
                }
            });
        }
        return params;
    },
    /* 请求封装 */
    request({
                url = "",
                method = "GET",
                data,
                headers = {},
                timeout = 10000,
                returnRaw = false,
            }) {
        return new Promise((resolve, reject) => {
            method = method.toUpperCase();
            $.ajax({
                url,
                type: method,
                headers: {
                    "API-Authorization": DreamConfig.access_key || "dream",
                    ...headers,
                },
                async: true,
                dataType: "json",
                timeout,
                data,
                success(res) {
                    if (returnRaw) {
                        resolve(res);
                    } else {
                        if (res.status === 200) {
                            resolve(res.data || "");
                        } else {
                            reject(res);
                        }
                    }
                },
                error(err) {
                    const errMsg = err
                        ? err.responseJSON
                            ? err.responseJSON.message
                            : "请求失败"
                        : "请求失败";
                    Qmsg.error(errMsg);
                    reject(errMsg);
                },
            });
        });
    },

    /**
     * 点赞
     * @param likeButton 被点击的点赞按钮
     * @param likeNum 要显示点赞次数的元素
     * @param type 点赞类型，支持文章和日志
     */
    like(likeButton, likeNum, type) {
        const id = likeButton.attr("data-id");
        const name = encryption("agree-" + type);
        let agrees = localStorage.getItem(name);
        agrees = agrees ? JSON.parse(decrypt(agrees)) : [];
        // 已经喜欢过了
        if (agrees.includes(id)) {
            likeButton.removeClass("like");
            return;
        }
        likeButton.on("click", function (e) {
            e.stopPropagation();
            Utils.request({
                url: "/api/content/" + type + "/" + id + "/likes",
                method: "POST",
            })
                .then((_res) => {
                    let agrees = localStorage.getItem(name);
                    agrees = agrees ? JSON.parse(decrypt(agrees)) : [];
                    let likes = +(likeButton.attr("data-likes") || 0) + 1;
                    agrees.push(id);
                    likeButton.removeClass("like");
                    const val = encryption(JSON.stringify(agrees));
                    localStorage.setItem(name, val);
                    likeButton.off('click');
                    likeNum.html(likes);
                    Qmsg.success('点赞成功');
                })
                .catch((err) => {
                    console.log(err)
                });
        });
    },
    /* sleep */
    sleep(ms = 250) {
        return new Promise((resolve) => setTimeout(resolve, ms));
    },
    /**
     * 删除元素的 class，可根据前缀来删除
     * @param {*} el 需要删除的 dom 元素
     * @param {*} prefix 需要删除的 class，可以仅为前缀
     */
    removeClassByPrefix(el, prefix) {
        const classes = el.className.split(" ").filter(function (c) {
            return c.lastIndexOf(prefix, 0) !== 0;
        });

        el.className = classes.join(" ").trim();
    },
};

window.Utils = Utils;
