import "./the-result.js";

class ResultContainer extends HTMLElement {
    set colorResults(colorResults) {
        this._colorResults = colorResults;
        this.render();
    }

    renderError(message) {
        this.innerHTML = "";
        this.innerHTML += `<h2 class="placeholder">${message}</h2>`;
    }

    render() {
        this.innerHTML = "";
        this._colorResults.forEach(color => {
            const resultElement = document.createElement("the-result");
            resultElement.color = color
            this.appendChild(resultElement);
        })
    }

}

customElements.define("result-container", ResultContainer);