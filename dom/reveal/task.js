const reveal = document.querySelectorAll('.reveal')
function isVisible(el) {
    const {top, bottom } = el.getBoundingClientRect()
    if (bottom < 0) {
        el.classList.remove('reveal_active');
    };
    if (top > window.innerHeight){
        el.classList.remove('reveal_active');
    };
    el.classList.add('reveal_active');  
};


for(i = 0; i < reveal.length; i++) {
    isVisible(reveal[i])
}
