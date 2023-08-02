let nombre = ""
do{nombre = prompt("Ingresa Tu Nombre") } while( ! isNaN(nombre))

console.log("Bienvenido " + nombre)




let resultadosConversion = [];

function convertir() {

    let valor = 0
    let resultado = 0
    let dolar = 545
    let euro = 600
    let Reales = 58
    let Libra = 352


    valore = parseFloat(document.getElementById("valor").value)
    
    if(isNaN(valor)|| valor <= 0){
        return console.log("INGRESE UN NÚMERO, MAYOR A 0 ")
    }

    if (document.getElementById("Dolar").checked) {
        resultado = valor / dolar
        resultado = resultado.toFixed(2)
        console.log("El cambio de Pesos a Dolar blue es de: $" + resultado)
        resultadosConversion.push("$" + resultado); 
    }
    else if (document.getElementById("Reales").checked) {
        resultado = valor / Reales;
        resultado = resultado.toFixed(2)
        console.log("El cambio de Pesos a Reales es de: $" + resultado);
        resultadosConversion.push("$" + resultado);
    }

    else if (document.getElementById("Euro").checked) {
        resultado = valor / euro;
        resultado = resultado.toFixed(2)
        console.log("El cambio de Pesos a Euro es de: €" + resultado);
        resultadosConversion.push("€" + resultado);
    }
    
    else if (document.getElementById("Libra").checked) {
        resultado = valor / Libra;
        resultado = resultado.toFixed(2)
        console.log("El cambio de Pesos a Libras es de: " + resultado);
        resultadosConversion.push("€" + resultado);
    }
    
    else {
        console.log("Tenes completar todos los campos")
    }
}
    console.log("Resulatdos de conversion:" , resultadosConversion)