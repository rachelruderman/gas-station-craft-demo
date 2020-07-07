import { getMaxOrMinValue } from "./_util/getMaxOrMinValue";

export const getMinValue = ({array, property}) => {
    return getMaxOrMinValue ({array, property, operation: 'min'});
}