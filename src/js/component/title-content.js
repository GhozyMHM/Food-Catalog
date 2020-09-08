class Content extends HTMLElement {
    connectedCallback() {
        this.render();
    }

    render() {
        this.innerHTML = `
        <div class="content">
            <h1>Every Color has a Meaning</h1>
            <p>Type your favorite color and know your personality</p>
        </div>`;
    }
}

customElements.define("title-content", Content);