class Date extends HTMLElement {
    connectedCallback() {
        this.render();
    }

    render() {
        this.innerHTML = `<span class="date"></span>`;
    }
}

customElements.define("show-date", Date);