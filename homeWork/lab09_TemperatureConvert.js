function TemperatureConvert(farengeit){
    let celsius = 5/9 * (farengeit - 32)
    return celsius
}

console.log(TemperatureConvert(20),"celsius");
