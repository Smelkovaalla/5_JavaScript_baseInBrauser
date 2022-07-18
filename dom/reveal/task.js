const reveal = document.querySelectorAll('.reveal')
function isVisible(elem) {
    const viewportHeight = window.innerHeight;
    const revealTop = elem.getBoundingClientRect().top;

    return ((revealTop < viewportHeight) && (revealTop > 0)) ? true : false;   
};
function checkReveals () {
    reveal.forEach((reveal) => {
    if (isVisible(reveal)) {
      reveal.classList.add("reveal_active");
    } else {
      reveal.classList.remove("reveal_active");
    }
  })
}
window.onscroll =  checkReveals
