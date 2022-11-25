let input = document.getElementById(`input-el`);
let numbers = document.querySelectorAll('button');
let numChecker = []
numbers.forEach(numberClicked => {
    numberClicked.addEventListener(`click`, (e) => {
        switch (e.target.innerText) {
            case `DEL`:
                if (input.innerText) {
                    numChecker.pop()
                    input.innerText = input.innerText.slice(0, -1)
                }
                break;
                case `A/C`:
                    input.innerHTML = ''
                    numChecker = []
                    break;
            case `=`:
                try {
                    if (input.innerText == "") {
                        input.innerText = ""
                    } else {
                        input.innerText = eval((input.innerText)).toFixed(2)
                        numChecker = [];
                        numChecker= [...input.innerText.split('')]
                    }
                }
                catch {
                    input.innerText = 'Err.'
                }
                break;
            case `.`:
                if (numChecker.includes(`.`)) {
                    input.innerText = input.innerText;
                } else {
                    input.innerText += e.target.innerText
                    numChecker.push('.')
                }
                break;
            case `*`:
            case `/`:
            case `-`:
            case `+`:
                if (input.innerText) {
                    input.innerText += e.target.innerText
                    numChecker = []
                }
                break;
            default:
                input.innerText += e.target.innerText
                numChecker.push(e.target.innerText)
        }
    })
})