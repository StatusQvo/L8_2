const number = parseInt(prompt('Введите верхнюю границу суммы чисел'))
const type = 'odd'

const countResultingSum = function (number, type) {
  const checkNan = isNaN(number)

  if (checkNan) {
    alert('Максимальная граница суммы должна быть числом')
  } else {
    return getSumOfNumbers(number, type)
  }
}

let finalMsg = countResultingSum(number, type)

console.log('result', finalMsg)

function getSumOfNumbers(number, type) {
  let sumResult = 0

  for (let minRange = 0; minRange <= number; minRange++) {
    switch (type) {
      case '':
        if (minRange) {
          console.log('cлагаемое:', minRange)
          sumResult += minRange
        }
        break

      case 'even':
        if (!(minRange % 2) && minRange) {
          console.log('cлагаемое:', minRange)
          sumResult += minRange
        }
        break

      case 'odd':
        if (minRange % 2) {
          console.log('cлагаемое:', minRange)
          sumResult += minRange
        }
        break
    }
  }
  return sumResult
}
