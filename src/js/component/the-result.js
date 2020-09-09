class TheResult extends HTMLElement {
    set meal(meal) {
        this._meal = meal;
        this.render();
    }

    render() {
        this.innerHTML = `
            <img src="${this._meal.strMealThumb}" alt="">
            <h1>${this._meal.strMeal}</h1>
            <h3>How to Cook :</h3>
            <p>${this._meal.strInstructions}</p>`;
    }
}

customElements.define("the-result", TheResult);