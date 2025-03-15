function operate(expressionArray) {
    // Handle multiplication and division first
    let i = 0;
    while (i < expressionArray.length) {
        if (expressionArray[i] === '*' || expressionArray[i] === '/') {
            let result = simpleOperate(expressionArray[i - 1], expressionArray[i + 1], expressionArray[i]);
            expressionArray.splice(i - 1, 3, result); 
            continue;
        } 
        i++;
    }
    
    // Next handle addition and subtraction
    i = 0;
    while (i < expressionArray.length) {
        if (expressionArray[i] === '+' || expressionArray[i] === '-') {
            let result = simpleOperate(expressionArray[i - 1], expressionArray[i + 1], expressionArray[i]);
            expressionArray.splice(i - 1, 3, result); 
            continue;  
        } 
        i++
    }
    return expressionArray[0];
    
}

function simpleOperate(num1, num2, operator) {
num1 = parseFloat(num1);
num2 = parseFloat(num2);

    switch(operator) {
        case '+': return num1 + num2;
        case '-': return num1 - num2;
        case '*': return num1 * num2;
        case '/': return num2 !== 0 ? num1 / num2 : 'Broken...';
        default: return 'Unknown operator';
    }
}

// Export functions to test
module.exports = { operate, simpleOperate };