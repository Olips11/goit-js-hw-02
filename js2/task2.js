                      // 1 - Методы Split и join

//const message = 'Привет Citrus Hlobus';

//console.log(message.split(' ')); //-["Привет", "Citrus", "Hlobus"]

//console.log(message.split('')); //-["П", "р", "и", "в", "е", "т", " ", "C", "i", "t", "r", "u", "s", " ", "H", "l", "o", "b", "u", "s"]

//const clients = ['Mango', 'Poly', 'Ajax'];

//console.log(clients.join(' ')); //-Mango Poly Ajax
//console.log(clients.join(',')); //-Mango,Poly,Ajax
//console.log(clients.join('-')); //-Mango-Poly-Ajax

                      // 2 - Метод IndexOf и includes.

// const clients = ['Mango', 'Ajax', 'Poly', 'Kiwi'];

// console.log(clients.indexOf('Ajax'));  // 1
// console.log(clients.indexOf('Mango')); // 0
// console.log(clients.indexOf('Gondon')); // -1

// console.log(clients.includes('Ajax')); // true
// console.log(clients.includes('Gandon')); // false

                      // 3 - Проверка множуственных условий с includes()

// const fruit = 'apple';

// if (fruit === 'apple' || fruit === 'strawberry') {
//     console.log('Это красный фрукт'); // Это красный фрукт
// }

// Выносим варианты в массив
// let message;
// const fedFruits = ['apple', 'strawberry', 'cherry', 'cranberries'];
// const fruit = 'apple';

// if( fedFruits.includes(fruit)) {
//     console.log('Это красный фрукт'); // Это красный фрукт
// }

// if( fedFruits.includes(fruit)) {
//     message = ('Это красный фрукт')
// } else {
//         message = 'Это не красный фрукт';
//     }


// console.log(message)


                        // 4 - Методы push(), pop(), shift(), unshift().

// push - добавляет один элемент в конце масива


// pop - удаляет один элемент в конце масива

// const stack = []; 

// //добавляем элемент в конце масива push

// stack.push(1);
// console.log(stack); // [1]

// stack.push(2);
// console.log(stack); //  [1, 2]

// stack.push(3);
// console.log(stack); // [1, 2, 3]

// //удаляем элемент в конце масива pop

// console.log(stack.pop());  // 3
// console.log(stack);        // [1, 2]

// console.log(stack.pop()); // 2
// console.log(stack)        // [1]

// console.log(stack.pop()); // 1
// console.log(stack);       // []

// console.log(stack.pop()); // undefined

// shift - удаляет элемент из начала массива

// unshift - добавляет элемент в начала массива

// const clients = ['Mango', 'Ajax', 'Poly', 'Kiwi'];
//  console.log(clients.shift());  //Mango
//  console.log(clients);          // ["Ajax", "Poly", "Kiwi"]

//  clients.unshift('Kiwi');
//  console.log(clients)           // ["Kiwi", "Ajax", "Poly", "Kiwi"]

                      // 5 - Метод slice()


// const clients = ['Mango', 'Ajax', 'Poly', 'Kiwi'];

// //  вернет новый масив в котором будут элементы с индексами от 1 до 2

// console.log(clients.slice(1,3)); //["Ajax", "Poly"]

// console.log(clients.slice(1)); //  ["Ajax", "Poly", "Kiwi"]

// console.log(clients.slice());  // ["Mango", "Ajax", "Poly", "Kiwi"]

// console.log(clients.slice(-2));  //["Poly", "Kiwi"]


                        //Удаление элиментов массива splice

// const scores = [1, 2, 3, 4, 5,]

// const deletedScores = scores.splice(0, 3);

// console.log(scores); //[4, 5]

// // удаленные элементы

// console.log(deletedScores);  //[1, 2, 3]

//                         // Вставка элементов в массив

// const colors = ['red', 'green', 'blue'];

// colors.splice(2, 0, 'purpl');

// console.log(colors); //["red", "green", "purpl", "blue"]

// colors.splice(1, 0, 'yellow', 'pink')

// console.log(colors); //["red", "yellow", "pink", "green", "purpl", "blue"]

                      // Замена элементов массива

// const languages = ['C', 'C++', 'Java', 'Javascript'];

// languages.splice(1, 1, 'Python');

// console.log(languages); //["C", "Python", "Java", "Javascript"]

// languages.splice(2, 1, 'C#', 'Swift', 'go');

// console.log(languages);

                      // Метод concat()

// const oldClients = ['Mango', 'Ajax', 'Poly', 'Kiwi'];
// const newClients = ['Monkong', 'Singu'];

// const allClients = oldClients.concat(newClients);

// console.log(allClients);

// console.log(oldClients);

// console.log(newClients);
  

                      //Функции

const add = function(a, b, c) {
    return a + b + c
};

const result = add(1, 2, 3);
console.log(result);  //6

console.log(add(5, 10, 15)); //30