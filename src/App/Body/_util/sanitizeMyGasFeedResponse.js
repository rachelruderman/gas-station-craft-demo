import { extractNumber } from "../../../_shared/strings/extractNumber"

export const sanitizeMyGasFeedResponse = (stations) => {
    /* 
        1. MyGasFeed API returns `distance` as a string with both words and numbers, i.e. '2 miles'. Here, we sanitize the response so it contains numbers only. This makes it so we can easily perform min/max operations.
        2. For missing distance, MyGasFeed API returns "N/A", and for missing names, "Unbranded". We map these values to null
    */
    const sanitizedResponse = stations.map(station => {
        return Object.fromEntries(
            Object.entries(station).map(([key, value]) => {
                let newValue = value.slice();

                const shouldExtractNumber = ['distance'].includes(key);
                const isNotAvailable = ['N/A', 'Unbranded'].includes(value);

                if (shouldExtractNumber) {
                    newValue = extractNumber(value);
                }

                if (isNotAvailable) {
                    newValue = null;
                }

                return [key, newValue]
        }))
    });
    return sanitizedResponse;
}