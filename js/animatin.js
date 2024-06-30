document.addEventListener("DOMContentLoaded", function() {
    const spans = document.querySelectorAll(".NEW-animatins span");
    let index = 0;

    function showNextSpan() {
        spans[index].classList.remove("hidden");
        spans[index].style.animationName = "NEW-animation"; 
        index++;

        if (index >= spans.length) {
            clearInterval(intervalId); 
            setTimeout(restartAnimation, 6000); 
        }
    }

    function restartAnimation() {
        index = 0;
        spans.forEach(span => {
            span.classList.add("hidden");
            span.style.animationName = ""; 
        });
        intervalId = setInterval(showNextSpan, 100); 
    }

    let intervalId = setInterval(showNextSpan, 100); 
});
