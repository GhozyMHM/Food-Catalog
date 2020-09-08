import "./component/result-container.js";
import "./component/search-bar.js";
import Data from "./data.js";

const main = () => {
    const searchElement = document.querySelector("search-bar");
    const resultContainerElement = document.querySelector("result-container");

    const onButtonSearchClicked = () => {
        Data.searchColor(searchElement.value)
            .then(renderResult)
            .catch(fallbackResult)
    };

    const renderResult = (results) => {
        resultContainerElement.colorResults = results;
    };

    const fallbackResult = message => {
        resultContainerElement.renderError(message);
    };
    searchElement.clickEvent = onButtonSearchClicked;
};

export default main;