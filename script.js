const toggleButton = document.getElementById('toggleButton');
const song = document.getElementById('song');
const lyricsSection = document.getElementById('lyricsSection');

// Track the state of the song (whether it's playing or paused)
let isPlaying = false;

// Show the toggle button when the page loads
window.onload = function() {
    toggleButton.style.display = 'inline-block'; // Make button visible
};

// Toggle button functionality
toggleButton.addEventListener('click', function() {
    if (!isPlaying) {
        // If song is not playing, play the song
        song.play();
        // Show the lyrics section
        lyricsSection.style.display = 'block';
        // Smooth scroll to lyrics section
        window.scrollTo({
            top: lyricsSection.offsetTop,
            behavior: "smooth",
        });
        // Change the button text and add playing state
        toggleButton.innerHTML = '<span>Pause</span>';
        toggleButton.classList.add('playing');
        toggleButton.classList.remove('paused', 'resume');
        isPlaying = true;
    } else if (song.paused) {
        // If the song is paused, resume it
        song.play();
        // Change the button text and add playing state
        toggleButton.innerHTML = '<span>Pause</span>';
        toggleButton.classList.add('playing');
        toggleButton.classList.remove('paused', 'resume');
        isPlaying = true;
    } else {
        // If the song is playing, pause it
        song.pause();
        // Change the button text and add paused state
        toggleButton.innerHTML = '<span>Resume</span>';
        toggleButton.classList.add('paused');
        toggleButton.classList.remove('playing', 'resume');
        isPlaying = false;
    }
});
