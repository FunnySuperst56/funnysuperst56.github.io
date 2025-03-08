const openBtn = document.getElementById("openVideo");
const popup = document.getElementById("videoPopup");
const closeBtn = document.getElementById("closePopup");
const video = document.getElementById("videoPlayer");

openBtn.addEventListener("click", () => {
    popup.style.display = "flex"; 
    video.play(); 
});

closeBtn.addEventListener("click", () => {
    popup.style.display = "none";
    video.pause(); 
    video.currentTime = 0; 
});

popup.addEventListener("click", (e) => {
    if (e.target === popup) {
        popup.style.display = "none";
        video.pause();
        video.currentTime = 0;
    }
});
