function convertDollarToINR(dollarString, conversionRate = 75) {
    if (dollarString === undefined)
        return '';
    if (dollarString.indexOf('$') === -1) {
        return dollarString;
    }
    // Remove the dollar sign and convert the string to a number
    const dollars = parseFloat(dollarString.replace('$', ''));
    const result = dollars * conversionRate;
    return `₹ ${result}`;
}

export { convertDollarToINR };