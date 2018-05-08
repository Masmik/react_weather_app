export function temperatureConverter(type, tempF) {
    if (type === 'fahrenheit') {
        return tempF;
    }
    return ((tempF - 32) * 5 / 9);
}
