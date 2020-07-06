/*function AutoPlay() {}
AutoPlay.prototype.run = function(player) {
  if (!player.muted) {
    player.muted = true;
  }
  player.play();
};

export default AutoPlay;
*/

import MediaPlayer from "../MediaPlayer";

//convertir funcion a typescript

class AutoPlay {
  constructor() { }
  run(player:MediaPlayer) {
    if (!player.media.muted) {
      player.media.muted = true;
    }
    player.play();
  }
}

export default AutoPlay;