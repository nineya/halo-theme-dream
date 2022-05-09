document.addEventListener("DOMContentLoaded", () => {

    customElements.define(
        "mew-subtitle",
        class MewSubtitle extends HTMLElement {
            constructor() {
                super();
                this.innerHTML = `<span>${this.innerText || "默认标题"}</span>`;
            }
        }
    );

    customElements.define(
        "mew-music",
        class MewMusic extends HTMLElement {

            constructor() {
                super();
                this.innerHTML = "音乐播放器加载中..."
                this.options = {
                    container: this,
                    theme: this.getAttribute("theme") || "var(--theme)",
                    loop: this.getAttribute("loop") || 'all',
                    autoplay: !!this.getAttribute("autoplay"),
                    lrcType: 3,
                };
                if (!("APlayer" in window)) {
                    if (!MewMusic.prototype.load) {
                        MewMusic.prototype.load = true;
                        MewMusic.prototype.await = [];
                        new Promise((resolve) => {
                            const jsSrc = "https://unpkg.com/aplayer@1.10.1/dist/APlayer.min.js"
                            const $head = $("head")
                            $head.append(`<link rel="stylesheet" href="https://unpkg.com/aplayer@1.10.1/dist/APlayer.min.css">`)
                            Utils.cachedScript(jsSrc)
                                .done(() => resolve())
                                .fail(() => resolve())
                        }).then(() => {
                            this.render();
                            MewMusic.prototype.await && MewMusic.prototype.await.forEach(n => n());
                        })
                    } else {
                        MewMusic.prototype.await.push(() => this.render());
                    }
                } else {
                    this.render();
                }
            }

            render() {
                if (!("APlayer" in window)) {
                    this.innerHTML = "未开启音乐播放器！"
                    return;
                }
                new Promise(async (resolve) => {
                    if (this.hasAttribute("song")) {
                        this.options.audio = await fetch(
                            "https://api.i-meto.com/meting/api?server=netease&type=song&id=" +
                            this.getAttribute("song")
                        ).then((response) => response.json());
                    } else if (this.hasAttribute("playlist")) {
                        this.options.listFolded = this.getAttribute("fold")
                        this.options.order = this.getAttribute("order")
                        this.options.audio = await fetch(
                            "https://api.i-meto.com/meting/api?server=netease&type=playlist&id=" +
                            this.getAttribute("playlist")
                        ).then((response) => response.json());
                    } else if (this.hasAttribute("url")) {
                        this.options.audio = [{
                            name: this.getAttribute("name") || '音乐',
                            url: this.getAttribute("url"),
                            artist: this.getAttribute("artist") || '未知歌手',
                            cover: this.getAttribute("cover"),
                            lrc: this.getAttribute("lrc") || (this.options.lrcType = undefined),
                        }];
                    } else {
                        this.innerHTML = "未指定播放的音乐！"
                        return resolve();
                    }
                    new APlayer(this.options);
                    resolve()
                })
            }
        }
    );

    customElements.define(
        "mew-bilibili",
        class MewBilibili extends HTMLElement {
            constructor() {
                super();
                this.options = {
                    bvid: this.getAttribute("bvid"),
                    width: this.getAttribute("width") || "100%",
                    height: this.getAttribute("height") || "500px",
                };
                if (this.options.bvid)
                    this.innerHTML = `<iframe allowfullscreen="true" src="//player.bilibili.com/player.html?bvid=${this.options.bvid}&page=1" style="width:${this.options.width};height:${this.options.height}"></iframe>`;
                else this.innerHTML = "bvid未填写！";
            }
        }
    );

    customElements.define(
        "mew-tabs",
        class MewTabs extends HTMLElement {
            constructor() {
                super();
                const $tabPage = $(this).children("mew-tab-page");
                if ($tabPage.length === 0) {
                    this.innerHTML = "没有标签页！"
                    return;
                }
                let navs = "";
                let contents = "";
                let active = false;
                $tabPage.each((index, elem) => {
                    let title = elem.getAttribute("title") || '默认标签';
                    let id = `${index}-${new Date().getTime()}`
                    if (!active && elem.hasAttribute("active")) {
                        active = true
                        navs += `<div class="active" data-id="#${id}">${title}</div>`
                        contents += `<div class="active" id="${id}">${elem.innerHTML}</div>`
                    } else {
                        navs += `<div data-id="#${id}">${title}</div>`
                        contents += `<div id="${id}">${elem.innerHTML}</div>`
                    }
                })
                this.innerHTML = `<div class="tabs-head">${navs}</div><div class="tabs-body">${contents}</div>`;
                !active && $(this).find("div>div:first-child").addClass("active")
                $(this).find(".tabs-head").on("click", "div:not(.active)", function() {
                    const $container = $(this).parent().parent();
                    $container.find(".active").removeClass("active")
                    $(this).addClass("active")
                    $container.find($(this).attr("data-id")).addClass("active")
                })
            }
        }
    );
});