let gamePattern = []
let buttonColours = ["red", "blue", "green", "yellow"];
let randomChosenColour= buttonColours[Math.floor(Math.random()*4)];
console.log(randomChosenColour)
crearSecuencia(randomChosenColour);

nuevaSecuencia = ()=>{
let chosenColour = randomChosenColour;
 crearSecuencia(chosenColour);
}

let sonidos = [ 
    new Audio("https://drive.google.com/uc?id=1OSSqWcDfm4o6uoCY_LpiVXTzd0u3n0h-"), 
    new Audio("https://drive.google.com/uc?id=1D1wia5vXlMd_hDXZUVe13W4zWhysPSb5"), 
    new Audio("https://drive.google.com/uc?id=1qwpwvmds9NlhWM1EPzvxvF05qNx7dNqq"),
    new Audio("https://drive.google.com/uc?id=196S_PPkATgYeH5KKumVwA0LGfbJSZ0yf")
]


$(`#${randomChosenColour}`).click(function(e){
  alert(randomChosenColour);
    // gamePattern.push(randomChosenColour);
    // gamePattern.forEach(x=>crearSecuencia(x));
    // nuevaSecuencia()
  });

function crearSecuencia(color){
    switch(color){
       
        case "yellow":
        $(`#${randomChosenColour}`).fadeOut(100).fadeIn(100);
        sonidos[0].play()
        break
        
        case "red":
        $(`#${randomChosenColour}`).fadeOut(100).fadeIn(100);
        sonidos[1].play()
        break
        
        case "blue":
        $(`#${randomChosenColour}`).fadeOut(100).fadeIn(100);
        sonidos[2].play()
        break
        case "green":
        $(`#${randomChosenColour}`).fadeOut(100).fadeIn(100);    
        sonidos[3].play()
        break
    }  

}


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
// }