//select the button and assign it to a variable
const sayHelloBtn = document.querySelector(".say-hello-button");

//create a function to pass it later to the event listener
const makeFigureShake = () => {
    //select the image and assign it
    const helloImage = document.querySelector(".main-landing-image");
    
    //add a class to it that plays the animation
    helloImage.classList.remove("animate__animated", "animate__shakeX",) //remove the class
    void helloImage.offsetWidth // trigger reflow/refresh the DOM (I need to learn what "reflow" is and why this works
    // https://developers.google.com/speed/docs/insights/browser-reflow)
    helloImage.classList.add("animate__animated", "animate__shakeX",) //add the class after it was removed earlier
    
}
//add the event listener to the button , trigger the function on the click event
sayHelloBtn.addEventListener("click", makeFigureShake )
