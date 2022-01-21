/**
 * Criar um algoritmo para somar dois valores
 * inputs ->
 * 1,1 = 2
 * 3,1 = 4
 * -1,0 = -1
 */
export const sum = (value1, value2) => {
  return value1 + value2
}

/**
 * Criar um algoritmo para subtrair dois valores
 * inputs ->
 * 1,1 = 0
 * 3,1 = 2
 * -1,0 = -1
 */
export const subtract = (value1, value2) => {
  return value1 - value2
}

/**
 * Criar um algoritmo para descobrir se o usuário é menor de idade
 * se for menor de idade, retornar true, se for maior de idade, retornar false
 * inputs ->
 * 18 = false
 * 19 = false
 * 3 = true
 */
export const isUnderAge = (age) => {
  return age < 18
}

/**
 * Criar um algoritmo para descobrir a idade do usuário, apenas passando o ano de nascimento.
 * inputs ->
 * 1995 = 27
 * 2000 = 22
 * 2021 = 1
 */
export const getAgeByBirthYear = (birthYear) => {
  return new Date().getFullYear() - birthYear
}

/**
 * Criar um algoritmo para achar a sequencia de fibonacci
 * inputs ->
 * 1 = 1
 * 5 = 5
 * 8 = 21
 */
export const fibonacci = (value) => {
  return value < 1
    ? 0
    : value <= 2
    ? 1
    : fibonacci(value - 1) + fibonacci(value - 2)
}
// https://www.interviewcake.com/question/python/nth-fibonacci
