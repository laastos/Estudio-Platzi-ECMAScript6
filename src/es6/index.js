/**
 * Default Params
 */
{
  function newFunction01(name, age, country) {
    var name = name || 'oscar';
    var age = age || 32;
    var country = country || 'MX';
    console.log(name, age, country);
  }
  newFunction01();

  function newFunction02(name = 'oscar', age = 32, country = 'MX') {
    console.log(name, age, country);
  }
  newFunction02();
}

/**
 * Template literals
 */
{
  let hello = "Hello";
  let world = "World";
  let epicPhrase = hello + ' ' + world;
  console.log(epicPhrase);
  let epicPhrase2 = `${hello} ${world}`;
  console.log(epicPhrase2);
}

/**
 * Multilínea
 */
{
  let lorem = "Lorem ipsum dolor sit amet, consectetur\n adipiscing elit, sed do eiusmod tempor";
  let lorem2 = `Otra frase epica que necesitamos
  ahora es otra frase epica`;
  console.log(lorem);
  console.log(lorem2);
}

/**
 * Desestructuración de elementos
 */
{
  let person = {
    'name': 'oscar',
    'age': 32,
    'country': 'MX'
  }
  console.log(person.name, person.age, person.country);

  let {name, age, country} = person;
  console.log(name, age, country);

  let team1 = ['Oscar', 'Julian', 'Ricardo'];
  let team2  = ['Valeria', 'Yessica', 'Camila'];
  let education = ['David', ...team1, ...team2];
  
  console.log(education);
}

/**
 * const, var y let
 */
{
  var globalVar = "Global var";
}

{
  let globalLet = "Global let";
  console.log(globalLet);
}

/**
 * Parámetros en objetos
 */
{
  let name = 'oscar';
  let age = 32;
  // ES5
  obj = { name: name, age: age };
  // ES6
  obj2 = { name, age };
  console.log(obj2);
}

/**
 * Arrow functions
 */
{
  const names = [
    { name: 'Oscar', age: 32},
    { name: 'Yesica', age: 27}
  ]

  const listOfNames1 = names.map(function (item) {
    console.log(iten.name);
  });

  const listOfNames2 = names.map(item => console.log(item.name));

  const listOfNames3 = (name, age, country) => { }

  const listOfNames4 = name => { }

  const square = num => num * num;
}

/**
 * Promesas
 */
{
  const helloPromise = () => {
    return new Promise((resolve, reject) => {
      if (true) {
        resolve('Hey!');
      } else {
        reject('Ooops!');
      }
    });
  }

  helloPromise()
    .then(response => console.log(response))
    .catch(error => console.log(error));
}

/**
 * Clases
 */
{
  class calculator {
    constructor() {
      this.valueA = 0;
      this.valueB = 0;
    }
    sum (valueA, valueB) {
      this.valueA = valueA;
      this.valueB = valueB;
      return this.valueA + this.valueB;
    }
  }

  const calc = new calculator();
  console.log(calc.sum(2 ,2));
}

/**
 * Módulos
 */
const hello = require('./module');
console.log(hello());

