"use strict";
const previousOperText = document.querySelector('#previous-operation');
const currentOperText = document.querySelector('#current-operation');
const buttons = document.querySelectorAll('#buttons-container button');
class Calculator {
    previousOperText;
    currentOperText;
    currentOperation;
    constructor(previousOperText, currentOperText, currentOperation = "") {
        this.previousOperText = previousOperText;
        this.currentOperText = currentOperText;
        this.currentOperation = currentOperation;
    }
    ;
    addDigit(digit) {
        if (digit === "." && this.currentOperText?.textContent?.includes(".")) {
            return;
        }
        ;
        this.currentOperation = digit;
        this.updateScreen();
    }
    ;
    processOperation(operation) {
        if (this.currentOperText.textContent === "" && operation !== "CE") {
            if (this.previousOperText.textContent !== "" && operation !== null) {
                this.changeOperation(operation);
            }
            return;
        }
        ;
        let operationValue;
        const previous = Number(this.previousOperText?.textContent?.split(" ")[0]);
        const current = Number(this.currentOperText?.textContent);
        switch (operation) {
            case "+":
                operationValue = previous + current;
                this.updateScreen(operationValue, operation, current, previous);
                break;
            case "-":
                operationValue = previous - current;
                this.updateScreen(operationValue, operation, current, previous);
                break;
            case "*":
                operationValue = previous * current;
                this.updateScreen(operationValue, operation, current, previous);
                break;
            case "/":
                operationValue = previous / current;
                this.updateScreen(operationValue, operation, current, previous);
                break;
            case "DEL":
                this.processDelOperation();
                break;
            case "C":
                this.processClearCurrentOperation();
                break;
            case "CE":
                this.processClearAllOperation();
                break;
            case "=":
                this.processEqualOperation();
                break;
            default:
                return;
        }
        ;
    }
    ;
    updateScreen(//change values of the calculator screen
    operationValue = null, operation = null, current = null, previous = null) {
        if (operationValue === null) {
            this.currentOperText.textContent += this.currentOperation;
        }
        else {
            if (previous === 0) {
                operationValue = current;
            }
            ;
            // add current value to previous
            this.currentOperText.textContent = this.currentOperation;
            this.previousOperText.textContent = `${operationValue} ${operation}`;
            this.currentOperText.textContent = "";
        }
        ;
    }
    ;
    changeOperation(operation) {
        const mathOperations = ["*", "/", "+", "-"];
        if (!mathOperations.includes(operation)) {
            return;
        }
        ;
        this.previousOperText.textContent = this.previousOperText.textContent.slice(0, -1) + operation;
    }
    ;
    processDelOperation() {
        this.currentOperText.textContent = this.currentOperText.textContent.slice(0, -1);
    }
    ;
    processClearCurrentOperation() {
        this.currentOperText.textContent = "";
    }
    ;
    processClearAllOperation() {
        this.currentOperText.textContent = "";
        this.previousOperText.textContent = "";
    }
    ;
    processEqualOperation() {
        const operation = this.previousOperText.textContent.split(" ")[1];
        this.processOperation(operation);
    }
    ;
}
;
const calc = new Calculator(previousOperText, currentOperText);
buttons.forEach(btn => {
    btn.addEventListener("click", e => {
        const value = e.target?.textContent;
        if (value !== null && (+value >= 0 || value === ".")) {
            calc.addDigit(value);
        }
        else {
            calc.processOperation(value);
        }
    });
});
