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
});