export const thousandsSeparate = (value) => {
    if (typeof value !== 'number') {
        throw new Error('Input must be a number: ', value);
    }
    return value.toString().replace(/\B(?=(\d{3})+(?!\d))/g, '.');
};

export const simplifyFormatDate = (dateString) => {
    const date = new Date(dateString);
    const day = date.getDate().toString().padStart(2, '0');
    const month = (date.getMonth() + 1).toString().padStart(2, '0');
    const year = date.getFullYear().toString();

    return `${day}-${month}-${year}`;
}