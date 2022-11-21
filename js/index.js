let display = document.getElementById(`display-el`)
display.innerText = " "

let numbers = [
  document.getElementById(`num1`),
  document.getElementById(`num2`),
  document.getElementById(`num3`),
  document.getElementById(`num4`),
  document.getElementById(`num5`),
  document.getElementById(`num6`),
  document.getElementById(`num7`),
  document.getElementById(`num8`),
  document.getElementById(`num9`),
  document.getElementById(`num0`),
  document.getElementById(`decimal-el`),
  document.getElementById(`plus-el`),
  document.getElementById(`minus-el`),
  document.getElementById(`multiply-el`),
  document.getElementById(`divide-el`),
  document.getElementById(`openParenthesis`),
  document.getElementById(`closedParenthesis`),
  document.getElementById(`equal-el`),
  document.getElementById(`del-el`)
]

numbers.map( numberClicked => {
    numberClicked.addEventListener(`click`, (e) => {
        switch(e.target.innerText){
            case `DEL`:
                if(display.innerText){
                    display.innerText = display.innerText.slice(0,-1)
                }
                break;
            case `=`:
                try{
                    if(display.innerText == ""){
                        display.innerText = ""
                    }
                   else{
                    display.innerText = eval(display.innerText)
                } 
                }
                catch{
                    display.innerText = 'Err.'
                }
                break;
            default:
                 display.innerText += e.target.innerText
        }
    })
})

function clearAll(){
    display.innerHTML = " "
}
