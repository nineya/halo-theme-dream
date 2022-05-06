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
                    id: this.getAttribute("id"),
                    color: this.getAttribute("color") || "var(--theme)",
                    autoplay: !!this.getAttribute("autoplay"),
                };
                if (!this.options.id) return (this.innerHTML = "网易云歌曲ID未填写！");
                fetch(
                    "https://api.i-meto.com/meting/api?server=netease&type=song&id=" +
                    this.options.id
                ).then(async (response) => {
                    const audio = await response.json();
                    new APlayer({
                        container: this,
                        lrcType: 3,
                        theme: this.options.color,
                        autoplay: this.options.autoplay,
                        audio
                    });
                });
            }

        }
    );
});