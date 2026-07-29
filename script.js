const alfabeto="ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const chave="ABYSSI";

function removerAcentos(texto){

return texto.normalize("NFD").replace(/[\u0300-\u036f]/g,"");

}

function vigenere(texto){

let resultado="";
let j=0;

for(let c of texto){

if(alfabeto.includes(c)){

let t=alfabeto.indexOf(c);

let k=alfabeto.indexOf(chave[j%chave.length]);

resultado+=alfabeto[(t+k)%26];

j++;

}

else{

resultado+=c;

}

}

return resultado;

}

function vigenereInversa(texto){

let resultado="";
let j=0;

for(let c of texto){

if(alfabeto.includes(c)){

let t=alfabeto.indexOf(c);

let k=alfabeto.indexOf(chave[j%chave.length]);

resultado+=alfabeto[(t-k+26)%26];

j++;

}

else{

resultado+=c;

}

}

return resultado;

}

function avancar5(texto){

let r="";

for(let c of texto){

if(alfabeto.includes(c)){

r+=alfabeto[(alfabeto.indexOf(c)+5)%26];

}

else{

r+=c;

}

}

return r;

}

function voltar5(texto){

let r="";

for(let c of texto){

if(alfabeto.includes(c)){

r+=alfabeto[(alfabeto.indexOf(c)-5+26)%26];

}

else{

r+=c;

}

}

return r;

}

function atbash(texto){

let r="";

for(let c of texto){

if(alfabeto.includes(c)){

r+=alfabeto[25-alfabeto.indexOf(c)];

}

else{

r+=c;

}

}

return r;

}

function cifrar(){

let texto=document.getElementById("texto").value;

texto=removerAcentos(texto).toUpperCase();

texto=vigenere(texto);

texto=avancar5(texto);

texto=atbash(texto);

document.getElementById("resultado").value=texto;

}

function decifrar(){

let texto=document.getElementById("texto").value.toUpperCase();

texto=atbash(texto);

texto=voltar5(texto);

texto=vigenereInversa(texto);

document.getElementById("resultado").value=texto;

}

function copiar(){

navigator.clipboard.writeText(document.getElementById("resultado").value);

alert("Copiado!");

}

function limpar(){

document.getElementById("texto").value="";
document.getElementById("resultado").value="";

}
