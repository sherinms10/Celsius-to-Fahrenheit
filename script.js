function convert(){
    const celVal = Number(document.getElementById("input").value)
    const fahrenheit = (celVal * 9/5) + 32;
    const result = document.getElementById("result")
    result.innerHTML = fahrenheit +"°F";
}