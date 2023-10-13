const previousOperText: HTMLDivElement | null = document.querySelector('#previous-operation');
const currentOperText: HTMLDivElement | null = document.querySelector('#current-operation');
const buttons: NodeListOf<HTMLButtonElement> | null = document.querySelectorAll('#buttons-container button');


class Calculator {
    constructor(
        private previousOperText: HTMLDivElement | null, 
        private currentOperText: HTMLDivElement | null, 
        private currentOperation: string = "",
    ) {};

    addDigit(digit: string): void {  //check if current oper already has a dot
        if (digit === "." && this.currentOperText?.textContent?.includes(".")) {
            return;
        };

        this.currentOperation = digit;
        this.updateScreen();
    };

    processOperation(operation: string | null) {  //process all calculator operations
        if ( this.currentOperText!.textContent === "" && operation !== "CE") {
            if ( this.previousOperText!.textContent !== "" && operation !== null) {
                this.changeOperation(operation)
            }
            return;
        };

        let operationValue: number | null;
        const previous = Number(this.previousOperText?.textContent?.split(" ")[0]);
        const current = Number(this.currentOperText?.textContent);

        switch(operation) {
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
        };
    };

    updateScreen(  //change values of the calculator screen
        operationValue: number | null = null,
        operation: string | null = null,
        current: number | null = null,
        previous: number | null = null
    ) {
            if (operationValue === null) {
                this.currentOperText!.textContent += this.currentOperation;
            } else {
                if (previous === 0) {
                    operationValue = current;
                };

                // add current value to previous
                this.currentOperText!.textContent = this.currentOperation;
                this.previousOperText!.textContent = `${operationValue} ${operation}`;
                this.currentOperText!.textContent = "";
            };
    };

    changeOperation(operation: string) {  //change math operation
        const mathOperations = ["*", "/", "+", "-"];
        if (!mathOperations.includes(operation)) {
            return;
        };

        this.previousOperText!.textContent = this.previousOperText!.textContent!.slice(0, -1) + operation;
    };

    processDelOperation(): void {  //delete the last digit
        this.currentOperText!.textContent = this.currentOperText!.textContent!.slice(0, -1);
    };

    processClearCurrentOperation(): void {  //clear current operation
        this.currentOperText!.textContent = "";
    };

    processClearAllOperation(): void {  //clear all operation
        this.currentOperText!.textContent = "";
        this.previousOperText!.textContent = "";
    };

    processEqualOperation() {  //
        const operation = this.previousOperText!.textContent!.split(" ")[1];
        this.processOperation(operation);
    };
};

const calc = new Calculator(previousOperText, currentOperText);

buttons.forEach(btn => {
    btn.addEventListener("click", e => {
        const value = (e.target as HTMLButtonElement)?.textContent;
        
        if (value !== null && (+value >= 0 || value === ".")) {
            calc.addDigit(value);
        } else {
            calc.processOperation(value);
        }
    });
});