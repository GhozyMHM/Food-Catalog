class Content extends HTMLElement {
    connectedCallback() {
        this.render();
    }

    render() {
        this.innerHTML = `
        <div class="content">
            <h1>Stay Hungry Stay Productive</h1>
            <p>Type your favorite food and know its information</p>
        </div>`;
    }
}

customElements.define("title-content", Content);