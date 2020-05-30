var nombre = document.getElementById("nombre");
var pass = document.getElementById("pass");
var passConf = document.getElementById("passConf");
var email = document.getElementById("email");
var error = document.getElementById("error");

error.style.color = 'red';

function validarReg(){
    var mensajesError=[];
    if (nombre.value=='' && pass.value=='' && passConf.value=='' && email.value==''){
        mensajesError.push('Completa los campos solicitados');
        //return false;
    }
    else{
        if (nombre.value==''){
            mensajesError.push('Ingresa nombre');
        }else if(nombre.value.length > 8){
            mensajesError.push('El nombre no debe tener más de 8 caracteres');
        }
        if (pass.value==''){
            mensajesError.push('Ingresa contraseña');
        }else if(pass.value.length < 8){
            mensajesError.push('La contraseña debe tener al menos 8 caracteres.');
        }else if(tiene_num(pass.value)==0){
            mensajesError.push('La contraseña no tiene números.');
        }
        if (pass.value !== '' && passConf.value==''){
            mensajesError.push('Confirma contraseña');
        }else if(pass.value != passConf.value){
            mensajesError.push('No coinciden las contraseñas');
        }
        if (email.value==''){
            mensajesError.push('Ingresa email');
        }else  if (validarEmail(email.value)==0){
            mensajesError.push('El email no es valido')
        }
    }
    error.innerHTML = mensajesError.join('. ');
    return false;
}
//Devuelve 0 si no se encuenta 1 si se encuentra
var numeros="0123456789";
function tiene_num(texto){
    for(i=0; i<texto.length; i++){
        if (numeros.indexOf(texto.charAt(i),0)!=-1){
            return 1;
        }
    }
    return 0;
}
//Devuelve 0 si no contiene letra
var letras="abcdefghyjklmnñopqrstuvwxyz";
function tiene_letras(texto){
    texto = texto.toLowerCase();
    for(i=0; i<texto.length; i++){
        if (letras.indexOf(texto.charAt(i),0)!=-1){
            return 1;
        }
    }
    return 0;
}
var letras_mayusculas="ABCDEFGHYJKLMNÑOPQRSTUVWXYZ";
function tiene_mayusculas(texto){
    for(i=0; i<texto.length; i++){
        if (letras_mayusculas.indexOf(texto.charAt(i),0)!=-1){
            return 1;
        }
    }
    return 0;
} 
//Validar Email
function validarEmail(texto) {
    if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(texto)){
        return 1;
    } else {
        return 0;
    }
}
