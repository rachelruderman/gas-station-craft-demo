import { getMaxOrMinValue } from "./_util/getMaxOrMinValue";

export const getMaxValue = ({array, property}) => {
    return getMaxOrMinValue ({array, property, operation: 'max'});
}