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
            screen.value = eval(screenValue);
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
        else if (btnText == "sin-¹") {
            sinI();
        }
        else if (btnText == "cos-¹") {
            cosI();
        }
        else if (btnText == "tan-¹") {
            tanI();
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
        else if (btnText == "ABS") {
            abs();
        }
        else if (btnText == "LCM") {
            lcm();
        }
        else if (btnText == "HCF") {
            hcf();
        }
        else if(btnText == "10^") {
            power_of_10();
        }
        else {
            screenValue += btnText;
            screen.value = screenValue;
        }
    })
}
function Dsin() {
    var x = eval(screen.value);
    screenValue = 'sin(' + x + '°) ';
    x = x * Math.PI / 180;
    screenValue += '= ' + Math.sin(x);
    screen.value = screenValue;
}
function Dcos() {
    var x = eval(screen.value);
    screenValue = 'cos(' + x + '°) ';
    x = x * Math.PI / 180;
    screenValue += '= ' + Math.cos(x);
    screen.value = screenValue;
}
function Dtan() {
    var x = eval(screen.value);
    screenValue = 'tan(' + x + '°) ';
    x = x * Math.PI / 180;
    screenValue += '= ' + Math.tan(x);
    screen.value = screenValue;
}
function Rsin() {
    screenValue = 'sin(' + screen.value + ' rad) ';
    screenValue += '= ' + Math.sin(screen.value);
    screen.value = screenValue;
}
function Rcos() {
    screenValue = 'cos(' + screen.value + ' rad) ';
    screenValue += '= ' + Math.cos(screen.value);
    screen.value = screenValue;
}
function Rtan() {
    screenValue = 'tan(' + screen.value + ' rad) ';
    screenValue += '= ' + Math.tan(screen.value);
    screen.value = screenValue;
}
function sinI() {
    screenValue = 'sin-¹(' + screen.value + ') ';
    screenValue += '= ' + Math.asin(screen.value);
    screen.value = screenValue;
}
function cosI() {
    
    screenValue = 'cos-¹(' + screen.value + ') ';
    screenValue += '= ' + Math.acos(screen.value);
    screen.value = screenValue;
}
function tanI() {
    screenValue = 'tan-¹(' + screen.value + ') ';
    screenValue += '= ' + Math.atan(screen.value);
    screen.value = screenValue;
}
function pow() {
    screenValue = '= ' + Math.pow(screen.value, 2);
    screen.value = screenValue;
}
function power_of_10()
{
    screenValue = '= ' + Math.pow(10, screen.value);
    screen.value = screenValue;
}
function pown() {
    i = screen.value;
    j = prompt("power = ");
    screenValue = '= ' + Math.pow(i, j);
    screen.value = screenValue;
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
    screenValue = '= ' + Math.sqrt(screen.value, 2);
    screen.value = screenValue;
}
function ln() {
    screenValue = '= ' + Math.log(screen.value);
    screen.value = screenValue;
}

function log() {
    screenValue = '= ' + (Math.log(screen.value)) / Math.log(10);
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
function abs() {
    screenValue = Math.abs(eval(screen.value));
    screen.value = screenValue;
}
function lcm() {
    i = screen.value;
    j = prompt("2nd Number = ");
    screenValue = '= ' + lcm_two_numbers(i,j);
    screen.value = screenValue;
}

function lcm_two_numbers(num1, num2)
{
    let min = (num1 > num2) ? num1 : num2;
    while (true) {
        if (min % num1 == 0 && min % num2 == 0) {
            return min;
        }
        min++;
    }
}

function hcf() {
    i = screen.value;
    j = prompt("2nd Number = ");
    screenValue = '= ' + gcd_two_numbers(i, j);
    screen.value = screenValue;
}
function gcd_two_numbers(x, y) {
    x = Math.abs(x);
    y = Math.abs(y);
    while (y) {
        var t = y;
        y = x % y;
        x = t;
    }
    return x;
}
