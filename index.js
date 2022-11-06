SetVisibilityTurnOnOff()

let globalVarOfSelectedValue = 0 //Глобальная переменная чтобы хранить выбор типа суммы

const promptValue = parseInt(prompt('Введите верхнюю границу суммы чисел'))
isPromptValueNaN()

function noteAboutSumOnOff() {
  let presetSelectedValue = document.getElementById('numtype').value
  if (presetSelectedValue === 'all') {
    document.getElementById('noteSum').style.display = 'flex'
  } else {
    document.getElementById('noteSum').style.display = 'none'
  }
}

function SetVisibilityTurnOnOff() {
  const visibilityStatus =
    document.getElementById('chooseTypeOfDataID').style.display
  if (visibilityStatus === 'none') {
    document.getElementById('chooseTypeOfDataID').style.display = 'flex'
    noteAboutSumOnOff
  } else {
    document.getElementById('chooseTypeOfDataID').style.display = 'none'
  }
}

function isPromptValueNaN() {
  const isEnteredNumberValid = !isNaN(promptValue)
  if (isEnteredNumberValid) {
    SetVisibilityTurnOnOff()
  } else {
    alert('Максимальная граница суммы должна быть числом')
  }
}

const selectOption = document.getElementById('numtype')
selectOption.addEventListener('change', function (event) {
  //event.preventDefault()
  noteAboutSumOnOff()
})

const submitBtn = document.getElementById('SubmitButton')

submitBtn.addEventListener('click', function (event) {
  event.preventDefault()

  globalVarOfSelectedValue = document.getElementById('numtype').value
  SetVisibilityTurnOnOff()

  const result = getSumOfNumbers()
  console.log('resultSum', result)
  let resultMessage = alert(
    `Сумма чисел с заданными параметрами будет равна: ${result}. Более подробные результаты вычисления отображены в консоли`
  )
})

function getSumOfNumbers() {
  let sumResult = 0

  for (let minRange = 0; minRange <= promptValue; minRange++) {
    switch (globalVarOfSelectedValue) {
      case 'all':
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
