class Calculator {
    constructor(previousOperandTextElement, curentOperandTextElement){
         this.previousOperandTextElement = previousOperandTextElement
         this.curentOperandTextElement = curentOperandTextElement
         this.clear()
    }

    clear() {
        this.curentOperand = ''
        this.previousOperand = ''
        this.operation = undefined

    }
    delete() {

    }
    appendNumber(number) {
        
    }
    chooseOperation(operation) {

    }
    compute() {

    }
    updataDisplay() {

    }
}

const numberButtons = document.querySelectorAll('[data-number]')
const operationButtons = document.querySelectorAll('[data-operation]')
const equalsButton = document.querySelector('[data-equals]')
const deleteButton = document.querySelector('[data-delete]')
const allClearButton = document.querySelector('[data-all-clear]')
const previousOperandTextElement = document.querySelector('[data-previous-operand]')
const curentOperandTextElement = document.querySelector('[data-curent-operand]')

s