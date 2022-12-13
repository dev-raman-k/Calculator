document.onkeydown = function (e) {
    return false;
}
let screen = document.getElementById('screen');
btn = document.querySelectorAll('.btn');
let screenValue = '';
for (item of btn) {
    item.addEventListener('click', (e) => {
        btnText = e.target.innerText;
        console.log('Button text is ', btnText)
        if (btnText == '×') {
            btnText = '*';
            screenValue += btnText;
            screen.value = screenValue;
        }
        else if (btnText == '÷') {
            btnText = '/';
            screenValue += btnText;
            screen.value = screenValue;
        }
        else if (btnText == 'C') {
            screenValue = "";
            screen.value = screenValue;
        }
        else if (btnText == '⌫') {
            screenValue = screenValue.slice(0, -1);
            screen.value = screenValue;
        }
        else if (btnText == '=') {
            screen.value = eval(screenValue)
        }
        else if (btnText == "Dsin") {
            Dsin();
        }
        else if (btnText == "Dcos") {
            Dcos();
        }
        else if (btnText == "Dtan") {
            Dtan();
        }
        else if (btnText == "Rsin") {
            Rsin();
        }
        else if (btnText == "Rcos") {
            Rcos();
        }
        else if (btnText == "Rtan") {
            Rtan();
        }
        else if (btnText == 'x²') {
            pow();
        }
        else if (btnText == 'x♂') {
            pown();
        }
        else if (btnText == '√') {
            sqrt();
        }
        else if (btnText == "log") {
            log();
        }
        else if (btnText == "ln") {
            ln();
        }
        else if (btnText == 'π') {
            pi();
        }
        else if (btnText == 'e') {
            exp();
        }
        else if (btnText == "^") {
            pown();
        }
        else if (btnText == "!") {
            fact();
        }
        else {
            screenValue += btnText;
            screen.value = screenValue;
        }
    })
}
function Dsin() {
    var x = eval(screen.value);
    x = x * Math.PI / 180;
    screenValue = Math.sin(x);
    screen.value = screenValue;
}
function Dcos() {
    var x = eval(screen.value);
    x = x * Math.PI / 180;
    screenValue = Math.cos(x);
    screen.value = screenValue;
}
function Dtan() {
    var x = eval(screen.value);
    x = x * Math.PI / 180;
    screenValue = Math.tan(x);
    screen.value = screenValue;
}
function Rsin() {
    screenValue = Math.sin(screen.value);
    screen.value = screenValue;
}
function Rcos() {
    screenValue = Math.cos(screen.value);
    screen.value = screenValue;
}
function Rtan() {
    screenValue = Math.tan(screen.value);
    screen.value = screenValue;
}
function pow() {
    screenValue = Math.pow(screen.value, 2);
    screen.value = screenValue;
}
function pown() {

}
function fact() {
    var i, num, f;
    f = 1;
    num = screen.value;
    for (i = 1; i <= num; i++) {
        f = f * i
    }
    i = i - 1;
    screenValue = f;
    screen.value = screenValue;
}
function sqrt() {
    screenValue = Math.sqrt(screen.value, 2);
    screen.value = screenValue;
}
function ln() {
    screenValue = Math.log(screen.value);
    screen.value = screenValue;
}

function log() {
    screenValue = (Math.log(screen.value)) / Math.log(10);
    screen.value = screenValue;
}
function pi() {
    screenValue += 3.14159265359;
    screen.value = screenValue;
}
function exp() {
    screenValue += 2.718281828459045;
    screen.value = screenValue;
}