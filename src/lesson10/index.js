/**
 * Criar um algoritmo para somar todos os itens de um array
 * inputs ->
 * [1,1,1,1] = 4
 * [2,4,6,8] = 20
 * [1,-1,10] = 10
 */
export const sumArray = (array) => {
  return array.reduce((memo, cur) => memo + cur, 0)
}

/**
 * Criar um algoritmo para trazer o penúltimo item do array
 * inputs ->
 * [1,1,2,1] = 2
 * [2,4,6,8] = 6
 * [1,'último',10] = último
 */
export const getLastButOne = (array) => {
  return array[array.length - 2]
}

/**
 * Criar um algoritmo para identificar se o número é impar
 * inputs ->
 * 1 = true
 * 2 = false
 * 50 = false
 */
export const isOdd = (number) => {
  return number % 2 !== 0
}

/**
 * Criar um algoritmo para deixar a primeira letra maiúscula de cada palavra
 * inputs ->
 * hideo kojima = Hideo Kojima
 * David dimon = David Dimon
 * teste = Teste
 */
export const upperCaseFirstLetter = (text) => {
  const arr = text.split(' ')
  return arr
    .map((item) => `${item.charAt(0).toUpperCase()}${item.slice(1)}`)
    .join(' ')
}

/**
 * Criar um algoritmo para transformar o valor de pixels em rem
 * inputs ->
 * 120 = 7.5rem
 * 130 = 8.125rem
 * -50 = -3.125rem
 */
export const pxToRem = (pixels) => {
  return `${pixels / 16}rem`
}

/**
 * Criar um algoritmo para extrair os valores de um objeto para um array
 * inputs ->
 * {name: 'test', age: 15} = ['test', 15]
 * {name: 'david'} = ['david']
 * {isProgrammer: false, name: 'Steve Jobs'} = [false, 'Steve Jobs']
 */
export const objectToArray = (param) => {
  return Object.keys(param).map((key) => param[key])
}
