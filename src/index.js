import Phaser from "phaser";
import config from './config/config';

class Game extends Phaser.Game {
  constructor () {
    super(config);

    this.scene.add('Boot', BootScene);
    this.scene.start('Boot');
  }
}
 
window.game = new Game();