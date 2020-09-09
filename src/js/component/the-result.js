class TheResult extends HTMLElement {
    set color(color) {
        this._color = color;
        this.render();
    }

    render() {
        this.innerHTML = `
            <img src="${this._color.strMealThumb}" alt="">
            <h1>${this._color.strMeal}</h1>
            <h3>How to Cook :</h3>
            <p>${this._color.strInstructions}</p>`;
    }
}

customElements.define("the-result", TheResult);