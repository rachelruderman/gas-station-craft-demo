export const getMaxOrMinValue = ({array, property, operation}) => {
    const values = (property)
        ? array.map(element => element[property])
        : array;

    const numbers = values
        .map(element => Number(element))
        .filter(element => !isNaN(element))
    
    return Math[operation](...numbers);
}