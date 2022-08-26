array = []

function limpar(){
    Altura = document.getElementById("altura").value = ""
    Peso = document.getElementById("peso").value = ""
    Resultado = document.getElementById("result").value = ""
}   

function calcular(){
    Altura = document.getElementById("altura").value
    Peso = document.getElementById("peso").value
    Finalaltura = Math.pow(Altura, 2)
    Resultado = document.getElementById("result").value = Peso / Finalaltura
    array.push(Resultado)
    console.log(array)
}