export const extractNumber = (value) => (value || '').toString().replace(/[^0-9.]/g, '');