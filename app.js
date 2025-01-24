let numeroSecreto = 0;
let intentos = 0;
let listaNumerosSorteados = [];
let numeroMaximo = 10;

function asignarTextoElemento(elemento,texto) {
    let elementoHTML = document.querySelector(elemento);
    elementoHTML.innerHTML = texto;
    return;
}

function verificarIntento() {
    let numeroDeUsuario = parseInt(document.getElementById('valorUsuario').value);

    //console.log(intentos);
    // console.log(typeof(numeroDeUsuario));
    // console.log(typeof(numeroSecreto));
    // console.log(numeroDeUsuario);
    // //El triple === sirve para que compare si es igual en valor y tipo.
    // console.log(numeroDeUsuario===numeroSecreto);

    if (numeroDeUsuario === numeroSecreto) {
        asignarTextoElemento('p',`¡Acertaste el número en ${intentos} ${(intentos ==1)? 'vez' : 'veces'}!`);

        //Habilitar el botón de nuevo juego cuando el usuario acierte, de otra forma siempre debería estar desactivado.
        document.querySelector('#reiniciar').removeAttribute('disabled')

    } else {
        if(numeroDeUsuario>numeroSecreto){
            asignarTextoElemento('p',`El número secreto es menor que ${numeroDeUsuario}`);
        } else {
            asignarTextoElemento('p',`El número secreto es mayor que ${numeroDeUsuario}`);
        }
        intentos++;
        limpiarCaja();
    }
    return;
}

function limpiarCaja() {
    // let valorCaja = document.querySelector('#valorUsuario');
    // valorCaja.value = '';
    document.querySelector('#valorUsuario').value = '';
}

function generarNumeroSecreto() {
    let  numeroGenerado = Math.floor(Math.random()*numeroMaximo)+1;
    console.log (numeroGenerado);
    console.log (listaNumerosSorteados);
    //Si ya sorteamos todos los números.
    if (listaNumerosSorteados.length == numeroMaximo) {
        asignarTextoElemento('p','Ya se sortearon todos los números posibles')
        listaNumerosSorteados = [];
    } else {
        //Si el número generado esta en la lista.
        if (listaNumerosSorteados.includes(numeroGenerado)) {
            return generarNumeroSecreto(); //Recursividad: Llamarse a si mismo en caso de que si exista el número en la lista.
        } else {
            listaNumerosSorteados.push(numeroGenerado);
            return numeroGenerado;
        }
    }
}

function condicionesIniciales() {
    asignarTextoElemento('h1', '¡Juego del número secreto!');
    asignarTextoElemento('p', `Escoge un número del 1 al ${numeroMaximo}`);
    numeroSecreto = generarNumeroSecreto();
    //console.log (numeroSecreto);
    intentos = 1;
}

function reiniciarJuego() {
    //Limpiar caja.
    limpiarCaja();
    //Indicar mensaje de intervalo de números.
    //Generar nuevo número aleatorio.
    //Inicializar el número de intentos.
    condicionesIniciales();
    //Deshabilitar el botón de nuevo juego.
    document.querySelector('#reiniciar').setAttribute('disabled','true')
}

condicionesIniciales();

