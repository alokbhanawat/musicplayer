const songs = [
    {
        title: 'Song 1',
        artist: 'Artist 1',
        src: 'song1.mp3'
    },
    {
        title: 'Song 2',
        artist: 'Artist 2',
        src: 'song2.mp3'
    },
    {
        title: 'Song 3',
        artist: 'Artist 3',
        src: 'song3.mp3'
    }
    
];

let currentSongIndex = 0;
const audioElement = document.getElementById('audio');
const titleElement = document.getElementById('title');
const artistElement = document.getElementById('artist');
const playButton = document.getElementById('play');

function loadSong(song) {
    titleElement.innerText = song.title;
    artistElement.innerText = song.artist;
    audioElement.src = song.src;
}

function playSong() {
    audioElement.play();
    playButton.innerText = '||';
}

function pauseSong() {
    audioElement.pause();
    playButton.innerText = '▶';
}

function togglePlayPause() {
    if (audioElement.paused) {
        playSong();
    } else {
        pauseSong();
    }
}

function prevSong() {
    currentSongIndex = (currentSongIndex > 0) ? currentSongIndex - 1 : songs.length - 1;
    loadSong(songs[currentSongIndex]);
    playSong();
}

function nextSong() {
    currentSongIndex = (currentSongIndex < songs.length - 1) ? currentSongIndex + 1 : 0;
    loadSong(songs[currentSongIndex]);
    playSong();
}

// Load the first song initially
loadSong(songs[currentSongIndex]);
