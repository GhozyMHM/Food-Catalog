class TheResult extends HTMLElement {
    set color(color) {
        this._color = color;
        this.render();
    }

    render() {
        this.innerHTML = `
                <div class="color" style="background-color: ${this._color.color};"></div>
                <h1>${this._color.heading}</h1>
                <p>${this._color.desc}</p>`;
    }
}

customElements.define("the-result", TheResult);