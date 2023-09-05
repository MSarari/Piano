const keys = document.querySelectorAll(".key");

function playSound(note) {
    const audio = new Audio('sounds'+ '/' +note+'.ogg');
    audio.play();
}

keys.forEach(key => {
    key.addEventListener("click", () => {
        const note = key.id;
        playSound(note);
    });
});