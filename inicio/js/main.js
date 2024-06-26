const formriel = document.getElementById('formriel');
const toregibtn = document.getElementById('toregibtn');
const tologibtn = document.getElementById('tologibtn');

toregibtn.addEventListener('click', function() {
    var formrielwi = formriel.offsetWidth ;
    formriel.scroll(formrielwi,0);
    Limpiarregistro();
})
tologibtn.addEventListener('click', function() {
    var formrielwi = formriel.offsetWidth ;
    formriel.scroll(0,0);
})

let alerton1 = 0;
let alerton2 = 0;
let alerton3 = 0;
let alert1 = 0;
const nombrealert = document.getElementById('nombrealert');
const inputElement = document.getElementById('nombre');
inputElement.addEventListener('input', function() {
    alert1 = 1;
    const inputValue = this.value; 
    if (/[^A-Za-z]/.test(inputValue)) {
       nombrealert.style.display = "flex";
       alerton1 = 1; 
    } else {
        alerton1 = 0;
        if (alerton1 == 0 && alerton2 == 0 && alerton3 == 0){
            nombrealert.style.display = "none";
            alert1 = 0;
        }
    }
});
const inputapp = document.getElementById('app');
inputapp.addEventListener('input', function() {
    alert1 = 1;
    const inputValue = this.value; 
    if (/[^A-Za-z]/.test(inputValue)) {
       nombrealert.style.display = "flex";
       alerton2 = 1; 
    } else {
        alerton2 = 0;
        if (alerton1 == 0 && alerton2 == 0 && alerton3 == 0){
            nombrealert.style.display = "none";
            alert1 = 0;
        }
    }
});
const inputapm = document.getElementById('apm');
inputapm.addEventListener('input', function() {
    alert1 = 1;
    const inputValue = this.value; 
    if (/[^A-Za-z]/.test(inputValue)) {
       nombrealert.style.display = "flex";
       alerton3 = 1; 
    } else {
        alerton3 = 0;
        if (alerton1 == 0 && alerton2 == 0 && alerton3 == 0){
            nombrealert.style.display = "none";
            alert1 = 0;
        }
    }
});
let alert4 = 0;
let alert4stat = 0;
let alertpass = 0;
const mailalert = document.getElementById('mailalert');
const mailinput = document.getElementById('mailreg');
mailinput.addEventListener('blur', () => {
    alert4 = 1;
    var mailinputval = mailinput.value;
    for (let letter of mailinputval) {
        mailalert.style.display = "flex";
        if(alertpass == 0){
            if(alert4stat == 0){
                if(letter == "@"){
                    alert4stat = 1;
                }
            } else if (alert4stat == 1) {
                if(letter == ".") {
                    alert4stat = 2;
                }
            } else if (alert4stat == 2){
                alert4 = 0;
                mailalert.style.display = "none";
            }
        } else if (alertpass == 1){
            console.log('reset');
            alertpass = 0;
            alert4stat = 0;
            alert4 = 1;
        }
    }
    alertpass = 1;
})

//telefono
let alert5 = 0;
const telefono = document.getElementById('telefono');
const telalert = document.getElementById('telalert');
telefono.addEventListener('input', function() {
    alert5 = 1;
    const inputValue = this.value;
    let telelen = inputValue.length;
    if (/[^A-Za-z]/.test(inputValue) && telelen >= 10){
            alert5 = 0;
            telalert.style.display = "none";
    } else {
        alert5 = 1;
        telalert.style.display = "flex";
    }
})

//contrasena
const passalert = document.getElementById('passalert');
const regpassword = document.getElementById('regpassword');
let passup = 0;
let passnum = 0;
let alert6 = 0;
regpassword.addEventListener('blur', () => {
    alert6 = 1;
    passup = 0;
    passnum = 0;
    const regpassval = regpassword.value;
    const regpasslen = regpassval.length;
    for (let passletter of regpassval) {
        const matuslet = passletter.toUpperCase();
        if (/[^A-Za-z]/.test(passletter)) {
            passnum = passnum + 1;
        } else if (passletter === matuslet){
            passup = passup + 1;
        }
        if(regpasslen >= 8 && passnum > 0 && passup > 0){
            alert6 = 0;
            passalert.style.display = "none";
        } else {
            passalert.style.display = "flex";
        }
    }
})

//confirmacion de password

const passeqalert = document.getElementById('passeqalert');
const passwordconfirm = document.getElementById('passwordconfirm');
let alert7 = 0;

passwordconfirm.addEventListener('input', function(){
    alert7 = 1;
    if (passwordconfirm.value == regpassword.value) {
        passeqalert.style.display = "none";
        alert7 = 0;
    } else {
        passeqalert.style.display = "flex";
        alert7 = 1;
    }
})

//cuadro privacidad

const privcont = document.getElementById('privcont');
const privshadow = document.getElementById('privshadow');
const privbtn = document.getElementById('privbtn');

privbtn.addEventListener('click', () => {
    privcont.style.display = "flex";
})
privshadow.addEventListener('click', () => {
    privcont.style.display = "none";
})

//checkpriv
const condiciones = document.getElementById('condiciones');



//preventdefault

const regisubmit = document.getElementById('regisubmit');

regisubmit.addEventListener('click', (e) => {
    e.preventDefault();
    if (inputElement.value == "" || inputapp.value == "" || inputapm.value == "" || mailinput.value == "" || telefono.value == "" || regpassword.value == "" || passwordconfirm == "") {
        console.log('faltan datos por llenar');
    } else {
        if (condiciones.checked) {
            console.log('conidicones aceptadas');
            if (alert1 == 0 && alert4 == 0 && alert5 == 0 && alert6 == 0 && alert7 == 0) {
                console.log('verificacion completa');
                alert('Registro Exitoso');
            }
        } else {
            console.log('condiciones no aceptadas');
        }
    }
})


function Limpiarregistro() {
    inputElement.value = "";
    inputapp.value = "";
    inputapm.value = "";
    mailinput.value = "";
    telefono.value = "";
    regpassword.value = "";
    passwordconfirm.value = "";
    const alertas = document.getElementsByClassName('formalert');
    for (let alertap of alertas) {
        alertap.style.display = "none";
    }
}

function cambiarinicio() {
    window.location = ".../../../index.html";
}