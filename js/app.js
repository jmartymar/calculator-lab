const inputButtons = document.getElementById('input-buttons');

let displayText = 'Input equation';
const displayOutput = document.getElementById('display-output');
displayOutput.innerText = displayText;

let equationText = '';
const equationArr = [];

const doMath = {
    '+': function (x, y) { return x + y },
    '-': function (x, y) { return x - y },
    '/': function (x, y) { return x / y },
    '*': function (x, y) { return x * y }
}

inputButtons.addEventListener('mousedown', function(e){
    if(e.target.classList.contains('input-button')) {
        eleTargetText = e.target.innerText;
        e.target.style.backgroundColor = 'red';
        if(eleTargetText !== '=' && eleTargetText !== '/' && eleTargetText !== '*' && eleTargetText !== '-' && eleTargetText !== '+') {
            if(!equationText) {
                equationText = eleTargetText;
            } else {
                equationText += eleTargetText;
            }
            displayOutput.innerText = equationText;
        } else {
            equationArr.push(equationText);
            equationArr.push(eleTargetText);            
            equationText = '';
        }
        if(eleTargetText === '=') {
            equationText = doMath[equationArr[1]](equationArr[0],equationArr[2]);   
            displayOutput.innerText = equationText;         
        }
    }
})



inputButtons.addEventListener('mouseup', function(e){
    e.target.style.backgroundColor = '';
})