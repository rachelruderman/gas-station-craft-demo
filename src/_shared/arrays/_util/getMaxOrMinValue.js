import { isNumeric } from "../../numbers/isNumeric";

export const getMaxOrMinValue = ({array, property, operation}) => {
    const values = (property)
        ? array.map(element => element[property])
        : array;

    const numericValues = values.filter(element => isNumeric(element));
    
    return Math[operation](...numericValues);
}