import { extractNumber } from "../strings/extractNumber";

export const getMinValue = ({array, property}) => {
    if (property) {
        const mappedArray = array
            .map(element => extractNumber(element[property]))
            .filter(element => !isNaN(element)); // numbers only

        return Math.min(...mappedArray, 0);
    }
    return Math.min(array);
}