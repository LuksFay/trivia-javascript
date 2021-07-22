const $pregunta = document.querySelector('#question'),
      $opcionA = document.querySelector('#opcionA'),
      $opcionB = document.querySelector('#opcionB'),
      $opcionC = document.querySelector('#opcionC'),
      $score = document.getElementById('score');
      $check_correcto = document.querySelector('.correcto'),
      $check_incorrecto = document.querySelector('.incorrecto'),
      $botones = document.querySelectorAll("button");
    

let contador = 0;

let pregunta = 1;

const pregunta1 = {
    pregunta: '¿En que año fue lanzado el video juego PONG?',
    opcion_A: '1982',
    opcion_B: '1972',
    opcion_C: '1969',
    correcta: '1972'
}
const pregunta2 = {
    pregunta: '¿A qué género pertenece el video juego League of Legends?', 
    opcion_A: 'MOBA',
    opcion_B: 'MMORPG',
    opcion_C: 'SHOOTER',
    correcta: 'MOBA'
}
const pregunta3 = {
    pregunta: '¿Qué dicen los terroristas del Counter Strike al depositar la bomba?',
    opcion_A: 'Fire in the hole!',
    opcion_B: 'The bomb is activated!',
    opcion_C: 'The bomb has been planted!',
    correcta: 'The bomb has been planted!'
}


function printPregunta(pregunta){
    console.log('la pregunta es', pregunta );
    $pregunta.innerHTML = pregunta.pregunta;
    $opcionA.innerHTML = pregunta.opcion_A;
    $opcionB.innerHTML = pregunta.opcion_B;
    $opcionC.innerHTML = pregunta.opcion_C;
}

function cambio(){
    pregunta=pregunta+1;
    $check_correcto.style.visibility = "hidden";
    $check_incorrecto.style.visibility = "hidden";
    $opcionA.disabled=false;
    $opcionB.disabled=false;
    $opcionC.disabled=false;
    console.log(pregunta);
    if(pregunta===2){
        printPregunta(pregunta2);
    }else if(pregunta===3){
        printPregunta(pregunta3);
    }else{
        alert(`TERMINASTE! TU PUNTAJE ES ${contador}`);
    }
    
}

function preguntaFun(respuesta, pregunta){
    console.log(respuesta);
    console.log(pregunta.correcta);
    if(respuesta===pregunta.correcta){
        $check_correcto.style.visibility = "visible"; 
        (contador=contador+10);
        $score.textContent = contador;    
        $opcionA.disabled=true;
        $opcionB.disabled=true;
        $opcionC.disabled=true;
        setTimeout(cambio,1000);
        
    }else{
        $check_incorrecto.style.visibility = "visible";
        (contador--);
        $score.textContent = contador;
        $opcionA.disabled=true;
        $opcionB.disabled=true;
        $opcionC.disabled=true;
        setTimeout(cambio,1000);
        
    }
 }


if(pregunta===1){
    printPregunta(pregunta1);
}

$botones.forEach(element => {
    element.addEventListener('click', (e)=>{
        if (pregunta===1){preguntaFun(e.target.innerText, pregunta1);}
        else if(pregunta===2){preguntaFun(e.target.innerText, pregunta2);}
        else if(pregunta===3){preguntaFun(e.target.innerText, pregunta3);}
        
             })
});


// $main.addEventListener('click', (e)=>{
//     preguntaFun(e.target.innerText, pregunta1);
// })

  //'#35e835e6' 
 // 'rgba(232, 53, 53, 0.9)' 
 