/* Probando For...in: 
Usa un for...in para imprimir por consola los datos del alienígena..
 Puedes usar este objeto: */

const alien = {
  name: 'Wormuck',
  race: 'Cucusumusu',
  planet: 'Eden',
  weight: '259kg'
}

console.log('Datos del Alien: ')
for (const key in alien) {
  console.log(key + ': ' + alien[key])
  console.log(`${key}: ${alien[key]}`)
}
