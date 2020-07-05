import { useEffect } from "react"
import { getMaxValue } from "../_util/getMaxValue";
import { REGULAR } from "../_util/enums";

export const useInitialFilters = ({allGasStations, setFilters}) => {
    useEffect(() => {
        const initialFilters = {
            fuelType: REGULAR,
        };

        initialFilters.maxDistance = getMaxValue({
            array: allGasStations,
            property: 'distance'
        });
    
        initialFilters.maxPrice = getMaxValue({
            array: allGasStations, 
            property: `${initialFilters.fuelType}_price`
        });


        setFilters(initialFilters);
    });
}