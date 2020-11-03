class Calculator {
    constructor(previousOperandTextElement, currentOpearandTextElement) {
        this.previousOperandTextElement = previousOperandTextElement;
        this.currentOpearandTextElement = currentOpearandTextElement;
        this.clear()
    }
};
clear(); {
    this.previousOperand = '';
    this.currentOpearand = '';
    this.operation = undefined;
};

delete (); {

};
appendNumber(number); {
    this.currentOpearand = number;
};
chooseOperation(operation); {

};

compute(); {

};
updateDisplay(); {
    this.currentOpearandTextElement.innertext = this.currentOpearand;
};
const numberButtons = document.querySelectorAll('[data-number]');
const operationButtons = document.querySelectorAll('[data-operation]');
const equalButtons = document.querySelector('[data-equals]');
const deleteButtons = document.querySelector('[data-delete]');
const allClearButtons = document.querySelector('[data-all-clear]');
const previousOperandTextElement = document.querySelector('[data-previous-operand]');
const currentOpearandTextElement = document.querySelector('[data-current-operand]');
