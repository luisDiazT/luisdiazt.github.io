let userClickedPattern = []
let gamePattern = []
let buttonColours = ["red", "blue", "green", "yellow"];
let randomChosenColour = Math.floor(Math.random()*4)
let i = 0
let started = false;
//console.log(randomChosenColour)
//crearSecuencia(randomChosenColour);

$('html').keypress(()=>{
  if (started===false){
    nextSequence();
    started=true;
  }
})




  function nextSequence(){
    i++
    $('#level-title').fadeOut(200).html(`Nivel ${i}`).fadeIn(300)
   let chosenColour = buttonColours[Math.floor(Math.random()*4)];
    crearSecuencia(chosenColour);
    gamePattern.push(chosenColour);
  }
// //  

let sonidos = [ 
    new Audio("https://drive.google.com/uc?id=1OSSqWcDfm4o6uoCY_LpiVXTzd0u3n0h-"), 
    new Audio("https://drive.google.com/uc?id=1D1wia5vXlMd_hDXZUVe13W4zWhysPSb5"), 
    new Audio("https://drive.google.com/uc?id=1qwpwvmds9NlhWM1EPzvxvF05qNx7dNqq"),
    new Audio("https://drive.google.com/uc?id=196S_PPkATgYeH5KKumVwA0LGfbJSZ0yf")
]


$('.btn').click((event)=>{
  let userChosenColour = event.target.id;
  $(`#${userChosenColour}`).toggleClass("pressed")
  setTimeout(() => {
  $(`#${userChosenColour}`).toggleClass("pressed") 
  }, 100);
  
  
  crearSecuencia(userChosenColour)
  // crearSecuencia(buttonColours[randomChosenColour]);
  userClickedPattern.push(userChosenColour);
  let gamePatternTamaño = gamePattern.length-1;
  console.log(gamePatternTamaño)
  if (gamePatternTamaño==i){  
    console.log("holi")
    checkAnswer(i)
    userPatternPosition=[]
  }

});
  //nextSequence()
    //console.log(userClickedPattern)
  //   gamePattern.forEach(x=>{const intervalID = setInterval(myCallback, 1000)
  //     crearSecuencia(x)

const checkAnswer = ((i)=>{
let gamePatternPosition = gamePattern[i];
let userPatternPosition = userClickedPattern[i]
if(gamePatternPosition == userPatternPosition ){
  setTimeout(() => {
    console.log(i)
    i=i+1
       nextSequence()
       
  }, 1000);
}else{
$('#level-title').fadeOut(200).html(`Has perdido :'(`).fadeIn(300)
}

})


// playSound((color)=>{
//   switch(color){
       
//     case "yellow":
//     $(`#${color}`).fadeOut(100).fadeIn(100);
//     sonidos[0].play()
//     break
    
//     case "red":
//     $(`#${color}`).fadeOut(100).fadeIn(100);
//     sonidos[1].play()
//     break
    
//     case "blue":
//     $(`#${color}`).fadeOut(100).fadeIn(100);
//     sonidos[2].play()
//     break
//     case "green":
//     $(`#${color}`).fadeOut(100).fadeIn(100);    
//     sonidos[3].play()
//     break
// }  
// });

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

/*
//https://drive.google.com/uc?id=196S_PPkATgYeH5KKumVwA0LGfbJSZ0yf

// const intervalID = setInterval(myCallback, 12000, 'Parameter 1', 'Parameter 2');

// function myCallback(a, b)
// {
    
//   
    
//     
//     console.log(gamePattern)
//  // Your code here
//  // Parameters are purely optional.
//  console.log(a);
//  console.log(b);
// */