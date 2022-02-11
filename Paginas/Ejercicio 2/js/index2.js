
let respSum = document.getElementById('respSum');
let respMul = document.getElementById('respMul');

function Calcular(){
var id_num1=parseInt(document.getElementById('id_num1').value);
var id_num2=parseInt(document.getElementById('id_num2').value);

var s=id_num1+id_num2;
var r=id_num1-id_num2;
var m=id_num1*id_num2;
var d=id_num1/id_num2;

respSum.innerHTML=`El resultado de la suma es : ${s} </br> El resultado de la resta:${r} </br> El resultado de la multiplicación es: ${m} </br> El resultado de la divisiones es: ${d}`;

}

