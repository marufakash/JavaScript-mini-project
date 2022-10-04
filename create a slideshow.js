let elements = document.querySelectorAll(".slideshow-element");


let countElements = 1;
setInterval(()=>{
    countElements++;
    let currentElement = document.querySelector(".current");
    currentElement.classList.remove("current");

    if(countElements > elements.length){
        countElements = 1;
        elements[0].classList.add("current");
    }else{
        currentElement.nextElementSibling.classList.add("current");
    }
},2000);