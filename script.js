
let calcular1 = document.querySelector('#calculo1');
let calcular2 = document.querySelector('#calculo2');
let btn = document.querySelector('#btnCalcular');
let resultado = document.querySelector('#result');

btn.addEventListener('click', sumarInputValues);

function sumarInputValues(event){

   const sumaImputs = calcular1.value + calcular2.value;
   resultado.innerText = "Resultado: " + sumaImputs;

}
