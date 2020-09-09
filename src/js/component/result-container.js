import "./the-result.js";

class ResultContainer extends HTMLElement {
    set mealResults(mealResults) {
        this._mealResults = mealResults;
        this.render();
    }

    renderError(message) {
        this.innerHTML = "";
        this.innerHTML += `<h2 class="placeholder">${message}</h2>`;
    }

    render() {
        this.innerHTML = "";
        this._mealResults.forEach(meal => {
            const resultElement = document.createElement("the-result");
            resultElement.meal = meal
            this.appendChild(resultElement);
        })
    }

}

customElements.define("result-container", ResultContainer);