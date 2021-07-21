const $pregunta = document.querySelector('#question'),
      $opcionA = document.querySelector('#opcionA'),
      $opcionB = document.querySelector('#opcionB'),
      $opcionC = document.querySelector('#opcionC'),
      $score = document.querySelector('#score');
      $check_correcto = document.querySelector('.correcto')
      $check_incorrecto = document.querySelector('.incorrecto')

let puntaje = 0;
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

$pregunta.innerHTML = pregunta1.pregunta;
$opcionA.innerHTML = pregunta1.opcion_A;
$opcionB.innerHTML = pregunta1.opcion_B;
$opcionC.innerHTML = pregunta1.opcion_C;


// DECLARAR FUNCION DE PREGUNTA

function preguntaFun (pregunta1){
    if (pregunta1.value === pregunta1.correcta){
        $check_correcto.style.visibility = "visible"; 
    }else{
        $check_incorrecto.style.visibility = "visible";
    }
}

$opcionA.addEventListener('click', (pregunta1) =>{
    preguntaFun(pregunta1);
})
$opcionB.addEventListener('click', (pregunta1) =>{
    preguntaFun(pregunta1);
})
$opcionC.addEventListener('click', (pregunta1) =>{
    preguntaFun(pregunta1);
})




// este evento cambia el color de la respuesta correcta
// este evento cambia el color de la respuesta incorrecta
// opcionA.addEventListener('click', (evento) =>{
//     console.log(evento);
    
    // if (pregunta1.opcion_A === pregunta1.correcta){
    //     document.querySelector('#opcionA').style.backgroundColor = '#35e835e6' ;
    // }else{
    //     document.querySelector('#opcionA').style.backgroundColor = 'rgba(232, 53, 53, 0.9)' ;
    // }
// })
// opcionC.addEventListener('click', () =>{
//     if (pregunta1.opcion_C === pregunta1.correcta){
//         document.querySelector('#opcionC').style.backgroundColor = '#35e835e6' ;
//     }else{
//         document.querySelector('#opcionC').style.backgroundColor = 'rgba(232, 53, 53, 0.9)' ;
//     }
// })
// const pregunta = () =>{

// }