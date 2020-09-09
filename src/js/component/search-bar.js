class SearchBar extends HTMLElement {
    connectedCallback() {
        this.render()
    }

    set clickEvent(event) {
        this._clickEvent = event;
        this.render()
    }

    get value() {
        return this.querySelector("#search-bar").value;
    }

    render() {
        this.innerHTML = `
        <div class="search-bar">
            <input id="search-bar" type="search" placeholder="Ex : Donut, Beef, Salmon, etc" spellcheck="false">
            <button id="button-search" type="submit">Search</button>
            <div class="alert alert-success mt-2 scroll-alert" role="alert">
            Search and scroll down to see the result, thank you!
            </div>
        </div>`

        this.querySelector("#button-search").addEventListener("click", this._clickEvent);
    }
}

customElements.define("search-bar", SearchBar);