let screen = document.getElementById('screen');
buttons = document.querySelectorAll('button');
let screenValue = '';
for (item of buttons) {
    item.addEventListener('click', (e) => {
        buttonText = e.target.innerText;
        console.log('Button text is ', buttonText)
        if (buttonText == '×') {
            buttonText = '*';
            screenValue += buttonText;
            screen.value = screenValue;
        }
        else if (buttonText == '÷') {
            buttonText = '/';
            screenValue += buttonText;
            screen.value = screenValue;
        }
        else if (buttonText == 'C') {
            screenValue = "";
            screen.value = screenValue;
        }
        else if (buttonText == '⌫') {
            screenValue = screenValue.slice(0, -1);
            screen.value = screenValue;
        }
        else if (buttonText == '=') {
            screen.value = eval(screenValue)
        }
        else if (buttonText == "sin") {
            var x = eval(screen.value);
            x = x * Math.PI / 180;
            screen.value = Math.sin(x);
            screenValue = screen.value
        }
        else if (buttonText == "cos") {
            var x = eval(screen.value);
            x = x * Math.PI / 180;
            screen.value = Math.cos(x);
            screenValue = screen.value
        }
        else if (buttonText == "tan") {
            var x = eval(screen.value);
            x = x * Math.PI / 180;
            screen.value = Math.tan(x);
            screenValue = screen.value
        }
        else if (buttonText == "log") {
            var x = eval(screen.value);
            //x = x * Math.PI / 180;
            screen.value = Math.LNx();
            screenValue = screen.value
        }
        else if (buttonText == "ln") {
            var x = eval(screen.value);
            //x = x * Math.PI / 180;
            screen.value = Math.LNx();
            screenValue = screen.value
        }
        
        else {
            screenValue += buttonText;
            screen.value = screenValue;
        }
    })
}