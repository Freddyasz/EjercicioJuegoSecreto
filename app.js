
//let titulo = document.querySelector('h1');
//titulo.innerHTML='Juego del numero secreto';
//let parrafo  = document.querySelector('p');
//parrafo.innerHTML='indica un numero del 1 a l 10';
let numIntentos=1;
let numMaxIntentos = 3; 
let numSorteados=[];
let iMaxMtNumSorteados=10;
let numSecreto  = 0; // generarNumeroSecreto();//  esto es una Variable  de Ambito  global 
console.log(numSecreto);
function verificarIntento(){
    //alert ('esta es una alertra desde la funcion');
    let  NumUsuario= parseInt(document.getElementById('valorUsuario').value);
    console.log(typeof(NumUsuario));
    console.log(NumUsuario);
    console.log(numSecreto);
    console.log(typeof(numSecreto));
    console.log(NumUsuario===numSecreto);  // con  esta sentencia de comparacion  los  3 iguales es porque comparta el valor  y el tipo de datos. 
    if  (NumUsuario===numSecreto){
        /* if (numIntentos>1 ) {
            configurarElementoHTML('p',`Acertaste al adivinar el  numero secreto en ${numIntentos} veces`);
        }else{
            configurarElementoHTML('p','Acertaste al adivinar el  numero secreto a la primera ¡¡!');
        }  */
        configurarElementoHTML('p',`Acertaste al adivinar el  numero secreto  en ${numIntentos} ${(numIntentos>1) ? ' intentos ' : 'intento'}`);
        document.getElementById('reiniciar').removeAttribute('disabled');
    } else {
        if (NumUsuario > numSecreto)  {
            configurarElementoHTML('p','El numero  secreto es Menor');
        }else {
            configurarElementoHTML('p','El numero  secreto es Mayor');    
        }
        numIntentos++;
        Limpiarcaja();
        if (numIntentos > numMaxIntentos){
            configurarElementoHTML('p','Haz alcanzando  el numero maximo  de intentos permitidos');                      
            document.getElementById('reiniciar').removeAttribute('disabled');
            document.querySelector('#intentar').setAttribute('disabled',true); // desabilito  el boton  de Intentar.  y habilito  la opcion de   reiniciar el juego. 
        }
    }
    //return;
}

function ReiniciarJuego() {
    Limpiarcaja();  // limpiarcaja    
    CondicionesIniciales();    
    document.querySelector('#reiniciar').setAttribute('disabled',true);
    document.getElementById('intentar').removeAttribute('disabled');
}

function Limpiarcaja(params) {
    let Valorcaja = document.querySelector('#valorUsuario');
    Valorcaja.value ='';
    //return Valorcaja;
    //  o tambien se podria haber hehco  con una sola linea de codigo. 
    //  document.querySelector('#valorUsuario').value ='';
}
function configurarElementoHTML(Elemento, text){
    let ElementoHTML = document.querySelector(Elemento);
    ElementoHTML.innerHTML=text;
    //return;
}

function generarNumeroSecreto() {
    let numSecreto = Math.floor(Math.random()*10)+1;
    console.log (numSecreto);
    console.log(numSorteados);
    if  (numSorteados.includes(numSecreto)){
        return generarNumeroSecreto();
    }else{
        if  ((numSorteados.length +1) < iMaxMtNumSorteados ){
            // esto  es para solucionar un problema generado por la recursividad  del programa. 
            numSorteados.push(numSecreto) ;        
            return numSecreto;
        }else{
            configurarElementoHTML('p','Upss  ya se sortearon todos los numeros posibles ¡!!!');
        }            
    }
}

function CondicionesIniciales() {
    configurarElementoHTML('h1','Juego del numero secreto');
    configurarElementoHTML('p',`indica un numero del 1 al ${iMaxMtNumSorteados}`);    
    numIntentos=1;  // iniciaizar el  contador  de intentos
    numSecreto  = generarNumeroSecreto();
}

CondicionesIniciales();
