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
});