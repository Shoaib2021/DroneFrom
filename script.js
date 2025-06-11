// Video hover play preview
document.querySelectorAll('.result-item video').forEach(video => {
    // Pause all videos when one starts playing
    video.addEventListener('play', function() {
        document.querySelectorAll('.result-item video').forEach(otherVideo => {
            if (otherVideo !== video) otherVideo.pause();
        });
    });
    
    // Optional: Preview on hover
    video.addEventListener('mouseenter', function() {
        if (video.paused) {
            video.muted = true;
            video.play().catch(e => console.log("Autoplay prevented:", e));
        }
    });
    
    video.addEventListener('mouseleave', function() {
        if (!video.controls) {
            video.pause();
            video.currentTime = 0;
        }
    });
});