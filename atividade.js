//2 Crie uma função que verifique se uma string é um palíndromo. Explicação: Essa função deve verificar se uma string é igual quando lida de trás para frente.
// const text= "";
// function Palindrome(str) {
//     let after= str.split('').reverse().join('')
//     if(after===str){
//         return 'true'
//     } else {
//         return 'false'
//     }    
// }
// console.log(Palindrome(text))
// split= ele cria uma nova variavel pra não ter que perder a antiga; Reverse= coloca os numeros de tras pra frente; join= transforma a lista em uma string.


// 3 Crie uma função que ordene uma lista de números em ordem crescente. Explicação: Essa função deve percorrer uma lista de números e ordená-los de forma crescente.
// let numbers=[4,0,1,2,3]
// function Crescent (list){
//     return list.sort()
// }
// console.log(Crescent(numbers))
// Sort= coloca os numeros em ordem crescente.

// erro
// 4 Crie uma função que conte o número de ocorrências de uma determinada letra em uma string. Explicação: Essa função deve percorrer uma string e contar quantas vezes uma determinada letra aparece.
var str= "letictia"
var letter="t"
var letterRepeated = str.split('').map((element) => {
    console.log(element==letter)
    if(element == letter){
        return console.log(element.length);
    }
})
function OcurrenceNumber(params, secondParams) {
    let result = params.split('').map((element) => {
        if(element == secondParams) {
            return 
        }
    })
    return result
}
console.log(OcurrenceNumber(str, letter))


console.log('casa'.split(''));


//erro
// 5 Crie uma função que calcule a média de uma lista de números. Explicação: Essa função deve percorrer uma lista de números e calcular a média aritmética dos valores.
// var numbers = [10,10];
// var sum = numbers.reduce((element,value){
//    //reduce= serve pra juntar o elemento em um so
//   return (element + value)/numbers.length
// });

// console.log(sum);


//6 Crie uma função que verifique se um número é primo. Explicação: Essa função deve verificar se um número é divisível somente por 1 e por ele mesmo.
// var numbers=;
// var times vezes=0;
// function Primos(verificar){
//  for(var i=0 ; i<=verificar ; i++)
//     if(verificar % i == 0)
//     vezes++;
//     if(vezes==2)
//     return "e primo"
//     else
//     return "nao e primo"
// }
// console.log(Primos(numero));


//7  Crie uma função que remova todos os elementos duplicados de uma lista. Explicação: Essa função deve percorrer uma lista e remover todos os elementos que aparecem mais de uma vez.
// let numbers = [ 2, 3, 7, 3, 5, 2]
// function Remover (lista) {
//     return new Set(lista)
// }
// console.log(Remover(numbers)); 


//erro
//8  Crie uma função que verifique se todos os elementos de uma lista são iguais. Explicação: Essa função deve percorrer uma lista e verificar se todos os elementos são iguais.
// var list=["",""]
// for( var i=0; i<list.length; i++)
// if( list[0]===list[1])
// console.log("igual");
// else
// console.log("diferente")
//
// let list=[ 'a','a']
// function Elementos(iguais){
//     return iguais===
// }
// console.log(Elementos(list));

//9 Crie uma função que invoque outra função de forma recursiva. Explicação: Essa função deve invocar outra função de forma recursiva até que uma condição seja satisfeita.



//10 Crie uma função que converta uma string em caixa alta. Explicação: Essa função deve percorrer uma string e converter todas as letras para maiúsculas.
// let str = "leticia"
// function UpperCase(convert){
//     let letter = convert.toUpperCase()
//     return letter
// }
// console.log(UpperCase(str));
// .toUpperCase()=deixa tudo maiusculo