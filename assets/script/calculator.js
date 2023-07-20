const displayInput = document.querySelector('.input')
const displayOutput = document.querySelector('.output')
const keys = document.getElementsByClassName('key')
const operators = document.getElementsByClassName('operator')
let input = ''
for (let key of keys) {
  const value = key.dataset.key
  key.addEventListener('click', () => {
    if (value === 'clear') {
      input = ''
      displayInput.innerHTML = ''
      displayOutput.innerHTML = ''
    } else
    if (value ==='del') {
      input = input.slice(0, -1)
      displayInput.innerHTML = input
    } else
    if (value === 'pi') {
      let input = Math.PI
      displayInput.innerHTML = input
    } else
    if (value === '=') {
      let result = eval(input)
      displayOutput.innerHTML = CleanOutput(result)
    } else
    if (ValidationInput(value)) {
      input += value
      displayInput.innerHTML = input
    }
  })
}

function sinHyperbolic(a) {
  let x1 = Math.sinh(a)
  displayOutput.document.innerHTML = x1
}

function cosHyperbolic(b) {
  displayOutput.document.innerHTML = Math.cosh(b)
}

function tanHyperbolic(c) {
  displayOutput.document.innerHTML = Math.tanh(c)
}

function ValidationInput (value) {
  let lastInput = input.slice(-1)
  let operators = ['+', '-', '*', '/']
  
  if (value === '.' && lastInput ==='.') {
    return false
  }

  if (operators.includes(value)) {
    if (operators.includes(lastInput)) {
      return  false
    } else return true
  }
  return true
}

function CleanOutput (output) {
  let outputString = output.toString()
  let decimal = outputString.split(',')[1]
  outputString = outputString.split(',')[0]

  let outputArray = outputString.split('')
  // Insert a commar in the result after 3 digits
  if (outputArray.length > 3) {
    for (let i = outputArray.length - 3; i > 0; i -= 3) {
      outputArray.splice(i, 0, ',')
    }
  }

  if (decimal) {
    outputArray.push('.')
    outputArray.push(decimal)
  }
  return outputArray.join('')
}

// Cleanup function
function CleanInput (input) {
  let inputArray = input.split('')
  let length = inputArray.length

  for (let i = 0; i < length; i ++) {
    if (inputArray[i] === '*') {
      inputArray[i] = `<span class='operator'>x</span> `
    } else if (inputArray[i] === '/') {
      inputArray[i] = `<span class='operator'>÷</span> `
    }
  }
}
