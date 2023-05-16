function _(className){
    return document.getElementsByClassName(className)[0];
}
let email           = _('email-address'),
    password        = _('password'),
    svgScreen       =  _('password-screen-space'),
    lockLayer       = _('lock-layer'),
    button          = _('svg-button'),
    lockBackLayer   = _('back-layer');

function CheckBoxes(){
    if (this.value == ''){
        svgScreen.classList.add('red');
        lockLayer.classList.add('white');
        button.classList.add('white');
        lockBackLayer.classList.add('white');
        svgScreen.classList.remove('green');
    } else {
        svgScreen.classList.add('green');
        svgScreen.classList.remove('red');
    }
}
email.onkeyup = CheckBoxes;
password.onkeyup = CheckBoxes;