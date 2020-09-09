import "./component/result-container.js";
import "./component/search-bar.js";
import Data from "./data.js";

const main = () => {
    const searchElement = document.querySelector("search-bar");
    const resultContainerElement = document.querySelector("result-container");

    const onButtonSearchClicked = () => {
        Data.searchMeal(searchElement.value)
            .then(renderResult)
            .catch(fallbackResult)
    };

    const renderResult = (results) => {
        resultContainerElement.mealResults = results;
    };

    const fallbackResult = message => {
        resultContainerElement.renderError(message);
    };
    searchElement.clickEvent = onButtonSearchClicked;
};

export default main;