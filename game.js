let userClickedPattern = [];
let gamePattern = [];
let buttonColours = ["red", "blue", "green", "yellow"];
let chequeo = [];
let randomChosenColour = Math.floor(Math.random()*4)
let i = 0;
let started = false;
$('html').keypress(()=>{
  if (started===false){
    nextSequence();
    started=true;
  }
})

  function nextSequence(){
    i++
   $('#level-title').fadeOut(200).html(`Nivel ${i}`).fadeIn(300);
   let chosenColour = buttonColours[Math.floor(Math.random()*4)];
    crearSecuencia(chosenColour);
    gamePattern.push(chosenColour);
    
    }

let sonidos = [ 
    new Audio("https://drive.google.com/uc?id=1OSSqWcDfm4o6uoCY_LpiVXTzd0u3n0h-"), 
    new Audio("https://drive.google.com/uc?id=1D1wia5vXlMd_hDXZUVe13W4zWhysPSb5"), 
    new Audio("https://drive.google.com/uc?id=1qwpwvmds9NlhWM1EPzvxvF05qNx7dNqq"),
    new Audio("https://drive.google.com/uc?id=196S_PPkATgYeH5KKumVwA0LGfbJSZ0yf"),
    new Audio("https://drive.google.com/uc?id=1XL_uY_eEYrCiRaHdOUCoLm_nIoOR0-Zb")
]


$('.btn').click((event)=>{
  if (started == true){
  let userChosenColour = event.target.id;
  $(`#${userChosenColour}`).toggleClass("pressed")
  setTimeout(() => {
  $(`#${userChosenColour}`).toggleClass("pressed") 
  }, 100);
   
   userClickedPattern.push(userChosenColour)
   crearSecuencia(userChosenColour)
   checkAnswer(i) 

  
  }
});


const checkAnswer = ((i)=>{

if(gamePattern[i-1] == userClickedPattern[i-1] ){
  console.log(`OK`)
  if (gamePattern.length == userClickedPattern.length){  
    setTimeout(() => {
      console.log('El tamaño es igual y esta OK')
      userClickedPattern = []
     
     // gamePattern.forEach((x)=> setTimeout(()=>{crearSecuencia(x)},1000)) POSIBLE REPRODUCCION DE TODO
      nextSequence()  
       }, 1000);
 }
else if(gamePattern[i-1] != userClickedPattern[i-1]){
  $('#level-title').fadeOut(200).html(`Has fallado,
  Quieres intentarlo de nuevo? Presiona cualquier tecla`).fadeIn(300);
  sonidos[4].play();
}

}
else {
  console.log('not yet')
}


}
)


function crearSecuencia(color){

    switch(color){
        case "yellow":
        $(`#${color}`).fadeOut(10).fadeIn(10);
        sonidos[0].play()
        break
        
        case "red":
        $(`#${color}`).fadeOut(10).fadeIn(10);
        sonidos[1].play()
        break
        
        case "blue":
        $(`#${color}`).fadeOut(10).fadeIn(10);
        sonidos[2].play()
        break
        case "green":
        $(`#${color}`).fadeOut(10).fadeIn(10);    
        sonidos[3].play()
        break
    }  

  }

