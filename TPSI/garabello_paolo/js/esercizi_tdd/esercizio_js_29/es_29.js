/**@param {string} str */
export const invert_case = (str) => {
    return str.split("").map(letter => {
        if(letter == letter.toLowerCase())
            return letter.toUpperCase();
        else 
            return letter.toLowerCase();
    }).join("");
}