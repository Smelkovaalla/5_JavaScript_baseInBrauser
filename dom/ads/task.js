const rotators = Array.from(document.querySelectorAll(".rotator__case"));

setInterval (function rotation() {
    let indexRotator = rotators.findIndex((rotator) => 
        rotator.classList.contains("rotator__case_active"));
    
    rotators[indexRotator].classList.remove("rotator__case_active");
    indexRotator += 1;


    if (indexRotator === rotators.length) {
        indexRotator = 0
        rotators[indexRotator].classList.add("rotator__case_active");
    } else {
        rotators[indexRotator].classList.add("rotator__case_active");
    }
    

}, 1000);
