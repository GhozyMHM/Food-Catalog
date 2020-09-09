class Content extends HTMLElement {
    connectedCallback() {
        this.render();
    }

    render() {
        this.innerHTML = `
        <div class="content">
            <h1>Stay Hungry Stay Productive</h1>
            <p>Search your favorite meal and cook it!</p>
        </div>`;
    }
}

customElements.define("title-content", Content);