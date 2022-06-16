/**
 * Object.entrie (+agregado)
 */
const data = {
  frontend: 'Oscar',
  backend: 'Isabel',
  design: 'Ana'
} 

/**
 * Entries- { Transforma un objeto a matriz } 
 */
const entries = Object.entries(data)
console.log(entries)
console.log(entries.length)

/**
 * -values- { Toma sólo los valores, pasándolos a un Array } 
 */
const values = Object.values(data)
console.log(values)
console.log(values.length)

/**
 * padStart & padEnd (Agregan caracteres al princio y al final
 * respectivamente, toman 2 parametros (limite, string))
 */
const myString = 'hello'
console.log(myString.padStart(8, 'hi '))
console.log(myString.padEnd(12, ' _____'))
console.log('food'.padEnd(12, ' ______'))

/**
 * Async / Awsait
 */
{
  const helloWorld = () => {
    return new Promise((resolve, reject) => {
      (true)
      ? setTimeout(() => resolve ('Hello World'), 3000)
      : reject(new Error('Test error'))
    })
  };

  const helloAsync = async () => {
    const hello = await helloWorld();
    console.log(hello);
  };

  helloAsync();

  const anotherFunction = async () => {
    try {
      const hello = await helloWorld();
      console.log(hello);
    } catch (error) {
      console.log(error);
    }
  };

  anotherFunction();
}