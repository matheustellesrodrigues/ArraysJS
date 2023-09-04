function dados1(){
    let nome1 = ['Maria', 'Edson', 'Tulio', 'Jailson', 'Robiso', 'Carlao']
    return nome1;
}
var exibirdados1 = dados1();

function dados2(){
    let nome2 = ['Fabricio', 'Paulo', 'Fabio']
    return nome2;
}

function dados3(){
    let numeros = ['55', '06', '25', '04', '80', '60', '10']
    return numeros;
}


var botao = document.getElementById("botao");
botao.addEventListener('click', function(){
    console.log( dados1());
})


var botao2 = document.getElementById("botao2");
botao2.addEventListener('click', function(){
    console.log(dados2());
})


var botao3 = document.getElementById("botao3");
botao3.addEventListener('click', function () {
  let numerosOrdenados = dados3().sort((a, b) => Number(a) - Number(b));
  console.log(numerosOrdenados);
});













