function tempInCelsToFah(celsius){
    Fahrenheit = celsius * 9.0 /5 + 32;
    return Fahrenheit;
}
console.log(tempInCelsToFah(32));

function tempInFahToCels(fahrenheit){
    Celsius = 5/9 * (fahrenheit - 32);
    return Celsius;
}
console.log(tempInFahToCels(32));