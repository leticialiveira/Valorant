console.log('Bem vindos')
// fazer comentario com duas barras
//crase permite que faça multi linha.
//Boolean: true or false
//undefined= algo que não vai existir; null= objeto que não possui nada dentro.
//  obejetos: precisa ter metodos e ...
//     abre o console.log({
                // name: "Mark",
                // idade: 36,
                // andar: function ( {
                //     console.log()
                // })
//      })

// pra criar uma lista é so colocar [] e adicionar os valores dentro.

//variaveis:
// *nomes simbolicos pra receber um valor, exemplo var clima="Quente"
//                                                 var="Frio"                                 
// var e let ,podem mudar o seu valor, const não pode mudar.
//let serve pra ver o tipo tbm, let clima= 0 / console.log(typeof clima) = number
// var é global, ele eleva ela caso esteja em outro lugar. 
//let e const sao locais, so funciona no escopo onde foi criada. (ou seja tudo tem que ficar na parte de cima, qualquer informação.)
//
// var name
// name ="Mark"
// console.log(typeof nome);

// let age, isHuman
// age=18
// isHuman=true

// console.log(name, age, isHuman);

//  console.log('O ' + name + ' tem ' +age + ' anos.')

// console.log(`o ${name} tem ${age} anos.`);

// object

// const person= {
//     name: "Leticia",
//     age: 20,
// }

// console.log(person.name); 
// colocando o ponto so pega um elemento

// arrays

// const animals = [ 
//     'Lion',
//     'Monkey',
//     'Cat'
// ]

// console.log(animals[0]);
// pra acessar apenas um objeto na lista

// const animals = [ 
//     'Lion',
//     { 
//     name:'Monkey',
//     age:3
// }
// ]
//  console.log(animals[1].age);
// pra acessar um objeto dentro da lista

//exercicio
// let weight
// console.log(typeof let);

// let name="Leticia";
// let age=21;
// let starts= 4.8;
// let isSubscribed= true

// let student={
    // name:"Leticia",
    // age:21,
    // weight: 47.2,
    // isSubscribed: true
// }
// console.log( `${student.name}  de idade ${student.age} pesa ${student.weight} kg.`);

// let students= []

// students= [
//     student
// ]

// console.log(students[0]);

//Criando funçoes:
// function createPhrases() {
//     console.log('Foco,força e fé');
//     console.log('Sono');
//     console.log('A base de triptofano');
    
// }

// createPhrases ()
// createPhrases ()
// createPhrases ()
// createPhrases ()
// createPhrases ()

// console.log('fim do programa');

// const sum = function(number1,number2) {
//     total= number1 + number2;
//     return total
// }


// let number1= 34
// let number2= 25

// sum(number1, number2)

// console.log(`O numero 1 é ${number1}`);
// console.log(`O numero 2 é ${number2}`);
// console.log(`A soma é ${sum(number1, number2)}`);

// function fazerVitamina(fruta1, fruta2) {
//     return fruta1 + fruta2
// }

// const copo= fazerVitamina('banana', 'maça')

// console.log(copo);

//nex adiciona coisas novas (fica antes da class)

// prototype: ....__proto__ (conhcer funcionalidades, pesquisar e estudar tudo->)

// a função so e executada quando é chamada, por isso tem que ficar "chamando' (minhaFuncao())"
// -> ten que  PARAMETROS E ARGUMENTOS

// DOT NOTATION-> .chave que quer acessar
// array vetor-> so uma lista (const array= []), mais uma -> matriz ([],[],[].)

// operadores aritmétricos: +(soma) -(subtrai) *(multiplica) /(divisão) ++ (incremento, adiciona uma unidade )-- (incremento, adiciona uma unidade ) % (modulo,resto da divisao) ** (exponencial,numero elevado)
// operadores de atribuição: x += y --> x= x+y (atribuição). x -= y --> x= x-y (subtração). x *= y --> x= x*y  (multiplicação). 
// operadores de comparação: > (maior q)= true or false. < (menor q)= true or false. >= (maior ou igual a)= true or false. <= (menor ou igual a)= true or false. == ( igual a)= true or false. != (diferente de)= true or false. === (identidade, verifica o tipo tbm)= true or false. !== (nao sao identicos a)= true or false.
// operador ternário: 