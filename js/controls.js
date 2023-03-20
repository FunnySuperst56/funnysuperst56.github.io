const musicPlayer = document.querySelector('.music-player');
const audio = document.querySelector('#audio');
const title = document.querySelector('#title');
const cover = document.querySelector('#cover');
const lineContainer = document.querySelector('.line-container');
const line = document.querySelector('.line');
const prevButton = document.querySelector('#previous');
const playPauseButton = document.querySelector('#play-pause');
const nextButton = document.querySelector('#next');

//Songs titles
const songs = ['Symbolism', 'Heroes Tonight', 'Sky High']

let songIdx = 0;

loadSong(songs[songIdx])

//Update name, audio, duration and image
function loadSong(song){
        title.innerText = song;
        audio.src = `Songs/${song}.mp3`;
        cover.src = `Images/${song}.jpg`;
}

function playSong(){
        musicPlayer.classList.add('play')
        playPauseButton.querySelector('i.fas').classList.remove('fa-play')
        playPauseButton.querySelector('i.fas').classList.add('fa-pause')

        audio.play()
}

function pauseSong(){
        musicPlayer.classList.remove('play')
        playPauseButton.querySelector('i.fas').classList.add('fa-play')
        playPauseButton.querySelector('i.fas').classList.remove('fa-pause')

        audio.pause()
}

playPauseButton.addEventListener('click', () =>{
        const isPlaying = musicPlayer.classList.contains('play');
        if(isPlaying){
              pauseSong()  
        }else{
              playSong() 
        }
})

