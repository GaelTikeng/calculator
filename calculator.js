const display_input = document.querySelector('.input')
const display_output = document.querySelector('.output')
const keys = document.getElementsByClassName('key')

let input = ""

for (let key of keys) {
  const value = key.dataset.key
  key.addEventListener('click', () => {
    if (value == "clear") {
      input = ""
      display_input.innerHTML = ""
      display_output.innerHTML = ""
    } else if (value =="del") {
      input = input.slice(0, -1)
      display_input.innerHTML = input
    } else if (value == "pi") {
      let input = Math.PI
      display_input.innerHTML = input
    }
     else if (value == "=") {
      let result = eval(input)
      display_output.innerHTML = CleanOutput(result)
    } else {
      if (ValidationInput(value)) {
        input += value
        display_input.innerHTML = input
      }
      
    } 

  })
 
}

function sinhyperbolic(a) {
  let x1 = Math.sinh(a)
  display_output.document.innerHTML = x1
}

function coshyperbolic(b) {
  display_output.document.innerHTML =Math.cosh(b)
}

function tanhyperbolic(c) {
  display_output.document.innerHTML = Math.tanh(c)
}




function ValidationInput (value) {
  let last_input = input.slice(-1)
  let operators = ["+", "-", "*", "/"]
  
  if (value == "." && last_input ==".") {
    return false
  }

  if (operators.includes(value)) {
    if (operators.includes(last_input)) {
      return  false
    } else return true
  }
  return true
}

function CleanOutput (output) {
  let output_string = output.toString()
  let decimal = output_string.split(",")[1]
  output_string = output_string.split(",")[0]

  let output_array = output_string.split("")
  
  if (output_array.length > 3) {
    for (let i=output_array.length - 3; i > 0; i-= 3) {
      output_array.splice(i, 0, ",")
    }
  }
  if (decimal) {
    output_array.push(".")
    output_array.push(decimal)
  }
  return output_array.join("")

}

function CleanInput (input) {
  let input_array = input.split("")
  let length = input_array.length

  for (let i = 0; i<length; i++) {
    if (input_array[i] == "*") {
      input_array[i] = ` <span class="operator">x</span> `
    } else if (input_array[i] == "/") {
      input_array[i] = ` <span class="operator">÷</span> `
    }
  }
}