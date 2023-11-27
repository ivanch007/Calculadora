//Esta función permite que se puedan agregar numeros y simbolos a la pantalla de la calculadora.

function agregar(valor){
    document.getElementById('pantalla').value += valor
}

//Esta función permite que se borren los elementos agregados a la pantalla.

function borrar(){
    document.getElementById('pantalla').value = ''
}

//Esta funcion hace posible que se puedan calcular los elementos.

function calcular(){
    const valorPantalla = document.getElementById('pantalla').value
    const resultado = eval(valorPantalla)
    document.getElementById('pantalla').value = resultado
}