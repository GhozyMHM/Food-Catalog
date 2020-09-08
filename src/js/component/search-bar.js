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
            <input id="search-bar" type="search" placeholder="Ex : Blue, Green, Red, etc" spellcheck="false">
            <button id="button-search" type="submit">Search</button>
            <p>See the color list you can choose <a href="">here</a></p>
        </div>`

        this.querySelector("#button-search").addEventListener("click", this._clickEvent);
    }
}

customElements.define("search-bar", SearchBar);