                    // 1. Массивы

// const arr = [];

// // Массив clients с тремя элементами

// const clients = ['Mango', 'Poly', 'Ajax'];

// console.log(clients); // ["Mango", "Poly", "Ajax"]


                      
                    // 3. Доступ к элементам
                      

// const clients = ['Mango', 'Poly', 'Ajax'];

// console.log(clients[0]); // Mango
// console.log(clients[1]); // Poly
// console.log(clients[2]); // Ajax    


                    // 4. Переопределение


// const clients =  ['Mango', 'Poly', 'Ajax'];
// // Значение элемента можно заменить
// clients[0] = 'Kiwi'; // Kiwi

// // Или добавить
// clients[3] = 'Alex';
// console.log(clients[3]); // Alex

// console.log(clients); // ["Kiwi", "Poly", "Ajax", "Alex"]


                   // 5. Длина массива


// const clients = ['Mango', 'Poly', 'Ajax'];

// // length вернет текущую длину массива
// console.log(clients.length); // 3

// clients.length = 5;
// console.log(clients.length); // 5
// console.log(clients); // ["Mango", "Poly", "Ajax", empty × 2]
// console.log(clients[4]); // undefined

// clients.length = 2;
// console.log(clients); // ["Mango", "Poly"]


                    // 6. Итерация по массиву
// Для итерации по массиву или перебора массива, 
// используются циклы, в частности цикл for. Переберем 
// массив клиентов и выведем их имена.

// const clients = ['Mango', 'Ajax', 'Poly',]

// for (let i = 0; i < clients.length; i += 1){
//     console.log('Logging clients: ', clients[i]);
// }

//  const numbers = [];

//  for (let i = 0; i < 3; i += 1) {
//      numbers.push(`label-${i}`)
//  }

//  console.log('numbers: ' , numbers); // ['label-0', 'label-1', 'label-2']
                      


                    //6.1. Цикл for...of
//  variable — для каждой итерации значение 
//     свойства присваивается переменной.
//  iterable — коллекция, которая имеет 
//      перечислимые свойства.

// for (const variable of iterable) {
//     // statement
// }

// Итерация по массиву
// const clients = ['Mango', 'Ajax,', 'Poly'];

// for (const client of clients) {
//     console.log(client);
// }
// // Итерация по строке
// const strihg = "javascript";
// for (const character of strihg) {
//     console.log(character)
// }


                    // 6.2. Инструкции break и continue


// const clients = ['Mango', 'Poly', 'Ajax']
// const clientNameToFind  = 'Poly';
// let message;

// for (const client of clients) {
//     /*
//    * На каждой итерации мы будем проверять совпадает ли элемент массива с
//    * именем клиента. Если совпадает то мы записываем в message сообщение
//    * об успехе и делаем break чтобы не искать дальше
//    */
//    if (client === clientNameToFind){
//        message= 'Клиент с таким именем есть в базе данных!';
//        break
//    }
//    // Если они не совпадают то запишем в resultMsg 
// //    сообщeние об отсутсвии имени
//    message = 'Клиента с таким именем нету в базе данных!';
// }

// console.log(message)


// const clients = ['Mango', 'Poly', 'Ajax'];
// const clientNameToFind = 'Poly';
// let message = 'Клиента с таким именем нету в базе данных!';

// for (const client of clients) {
//     if (client === clientNameToFind) {
//         message = 'Клиент с таким именем есть в базе данных!';
//         break;
//     }
//       // Если не совпадает, то на этой итерации ничего не делаем
// }

// console.log(message) // Клиент с таким именем есть в базе данных!
// /*
//  * Для чисел меньше чем порог срабатывает continue, выполнение тела прекращается
//  * и управление передаётся на следующую итерацию.
//  */

//  const numbers = [1, 3, 14, 18, 4, 7, 29, 6, 34];
//  const threshold = 15;

//  for (let i = 0; i < numbers.length; i += 1) {
//      if (numbers[i] < threshold){
//          continue;
//      }
//      console.log(`Число больше чем ${threshold}: ${numbers[i]}`) // 18, 29, 34
//  }



                        //  1. Присвоение по ссылке и по значению

// Все примитивные типы присваиваются по значению, 
// то есть создается копия.

// let a = 5;
// // Присвоение по значению, в памяти будет создана еще
// // одна ячейка в которую будет скопировано значение 5
// let b = a;
// console.log(a);
// console.log(b);

// // Изменим значение a

// a = 10
// console.log(a); // 10
// // Значение b не изменилось так как это отдельная копия

// console.log(b); // 5


// Сложные типы - объекты, массивы, функции 
// присваиваются по ссылке, то есть переменная 
// просто получает ссылку на уже существующий объект.

const a = ['Mango'];
// Присвоение по ссылке.
// Так как a это массив, в b записывается ссылка на уже существующий
// массив в памяти. Теперь a и b указывают на один и тот же массив.
const b = a;
console.log(a); // ['Mango']
console.log(b); // ['Mango']
// Изменим массив, добавив еще один элемент, используя указатель из a
a.push('Poly');
console.log(a); // ['Mango', 'Poly']
// b изменилось тоже, потому что b, как и a,
// просто содержат ссылку на одино и то же место в памяти
console.log(b); // ['Mango', 'Poly']
// Результат повторяется
b.push('Ajax');
console.log(a); // ['Mango', 'Poly', 'Ajax']
console.log(b); // ['Mango', 'Poly', 'Ajax']















                      
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

// const add = function(a, b, c) {
//     return a + b + c
// };

// const result = add(1, 2, 3);
// console.log(result);  //6

// console.log(add(5, 10, 15)); //30