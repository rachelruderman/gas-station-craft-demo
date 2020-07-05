export const getMaxValue = ({array, property}) => {
    if (property) {
        const mappedArray = array.map(element => element[property]);
        return Math.max(...mappedArray, 0);
    }
    return Math.max(array);
}