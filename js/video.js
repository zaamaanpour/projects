document.addEventListener('DOMContentLoaded', function() {
    const video = document.getElementById('NEWVideo');

    video.addEventListener('click', function() {
        if (video.paused) {
            video.play(); 
        } else {
            video.pause(); 
    });

    video.addEventListener('play', function() {
        video.controls = true;
    });

    video.addEventListener('pause', function() {
        video.controls = true; 
    });
});
