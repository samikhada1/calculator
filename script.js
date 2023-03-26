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
        if(number === '.' && this.curentOperand.includes('.')) return
        this.curentOperand = this.curentOperand.toString() + number.toString()
    }
    chooseOperation(operation) {
        if(this.curentOperand === '') return;
        if(this.previousOperand !== '') {
            this.compute();
        }
        this.operation = operation
        this.previousOperand = this.curentOperand 
        this.curentOperand = ''

    }
    compute() {

    }
    updataDisplay() {
        this.curentOperandTextElement.innerText = this.curentOperand
        this.previousOperandTextElement.innerText = this.previousOperand

    }
}

const numberButtons = document.querySelectorAll('[data-number]')
const operationButtons = document.querySelectorAll('[data-operation]')
const equalsButton = document.querySelector('[data-equals]')
const deleteButton = document.querySelector('[data-delete]')
const allClearButton = document.querySelector('[data-all-clear]')
const previousOperandTextElement = document.querySelector('[data-previous-operand]')
const curentOperandTextElement = document.querySelector('[data-curent-operand]')

const calculator = new Calculator(previousOperandTextElement, curentOperandTextElement)

numberButtons.forEach(button => {
    button.addEventListener('click', () =>{
        calculator.appendNumber(button.innerText)
        calculator.updataDisplay()
    })
})

operationButtons.forEach(button => {
    button.addEventListener('click', () =>{
        calculator.chooseOperation(button.innerText)
        calculator.updataDisplay()
    })
})