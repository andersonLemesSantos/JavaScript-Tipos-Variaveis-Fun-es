//parametros de função
function soma(num1,num2){
    return num1 + num2;
}
console.log(soma(2,2))
console.log(soma(10,10))
console.log(soma(20,49))

//parametros  x argumentos

//ordem dos parametros

function nomeIdade(nome,idade) { 
    return `Meu nome é ${nome} e minha idade é ${idade}`;
}

//console.log(nomeIdade("Anderson", 43))

function multiplica(num1,num2){
    return num1 * num2;
}

                        //9            6
console.log(multiplica(soma(4,5),soma(3,3)))




function comParametro(param) {
    console.log(param)
}
comParametro()