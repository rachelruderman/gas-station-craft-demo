import { extractNumber } from "../strings/extractNumber";

export const getMaxValue = ({array, property}) => {
    if (property) {
        const mappedArray = array
            .map(element => extractNumber(element[property]))
            .filter(element => !isNaN(element)); // numbers only

        return Math.max(...mappedArray);
    }
    return Math.max(array);
}