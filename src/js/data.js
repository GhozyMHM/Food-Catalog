import colorResults from "./result.js";

class Data {
    static searchColor(keyword) {
        return new Promise((resolve, reject) => {
            const filteredColors = colorResults.filter(color => color.color.toUpperCase().includes(keyword.toUpperCase()));
            if (filteredColors.length) {
                resolve(filteredColors);
            } else {
                reject(` "${keyword} is not found"`);
            }
        });
    }
}

export default Data;