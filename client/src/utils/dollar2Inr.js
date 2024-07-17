function convertDollarToINR(dollarString, conversionRate = 75) {
    if (dollarString === undefined)
        return '';
    // Remove the dollar sign and convert the string to a number
    const dollars = parseFloat(dollarString.replace('$', ''));
    const result = dollars * conversionRate;
    return `₹ ${result}`;
}

export { convertDollarToINR };