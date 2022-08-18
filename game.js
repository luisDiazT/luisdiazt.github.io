let userClickedPattern = []
let gamePattern = []
let buttonColours = ["red", "blue", "green", "yellow"];
let randomChosenColour = Math.floor(Math.random()*4)
//console.log(randomChosenColour)
//crearSecuencia(randomChosenColour);

  function nextSequence(){
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
  }, 50);
  
  
  crearSecuencia(userChosenColour)
  // crearSecuencia(buttonColours[randomChosenColour]);
  userClickedPattern.push(userChosenColour);
  userClickedPattern === gamePattern ? nextSequence():$('level-title').html('Perdiste! Jugamos otra vez?')
});
  //nextSequence()
    //console.log(userClickedPattern)
  //   gamePattern.forEach(x=>{const intervalID = setInterval(myCallback, 1000)
  //     crearSecuencia(x)
    

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
        $(`#${color}`).fadeOut(100).fadeIn(100);
        sonidos[0].play()
        break
        
        case "red":
        $(`#${color}`).fadeOut(100).fadeIn(100);
        sonidos[1].play()
        break
        
        case "blue":
        $(`#${color}`).fadeOut(100).fadeIn(100);
        sonidos[2].play()
        break
        case "green":
        $(`#${color}`).fadeOut(100).fadeIn(100);    
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