/**
 * This function clips a large string with the limit provided.
 * @param {string} text is the string to be clipped
 * @param {number} num is the last index to slice the string
 * @returns {string} a clipped string.
 */
export default function textClip(text, num){
    if(typeof(text) !== "string"){
        console.log("Text should be a string");
        return false;
    }

    if(typeof(num) !== "number"){
        console.log("Clip limit should be a number");
        return false;
    }
    
    if(num > text.length){
        return text;
    }

    if(num < 0){
        return text;
    }

    if(text.length > num){
        return text.slice(0, num)+ "...";
    } else {
        return text;
    }
}