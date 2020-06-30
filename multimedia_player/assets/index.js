import MediaPlayer from './MediaPlayer.js'
import AutoPlay from './plugins/AutoPlay.js'

const video = document.querySelector("video")
const button = document.querySelector("button")
const buttonUnMute = document.querySelector("#buttonUnMute")

const player = new MediaPlayer({el: video, plugins: [
     //new AutoPlay()
]});

button.onclick = () => player.togglePlay();
//button.onclick = () =>video.play();

buttonUnMute.onclick = () => player.unmute();