import Phaser from "phaser";
import config from '../config/config';
import Button from '../objects/Button';
 
export default class TitleScene extends Phaser.Scene {
  constructor () {
    super('Title');
  }
 
  preload () {
    console.log('Title preload');
  }
 
  create () {
    let w = config.width;
    let h = config.height;
    let padding = 100;
    // Game
    this.gameButton = new Button(this, w/2, h/2 - padding, 'blueButton1', 'blueButton2', 'Play', 'Game');
     
    // Options
    this.optionsButton = new Button(this, w/2, h/2, 'blueButton1', 'blueButton2', 'Options', 'Options');
   
    // Credits
    this.creditsButton = new Button(this, w/2, h/2 + padding, 'blueButton1', 'blueButton2', 'Credits', 'Credits');
   
    /*  
      check to see if the musicOn property is set to true, 
      if it is then we add a new sound Game Object to game
    */
    let model = this.sys.game.globals.model;
    if (model.musicOn === true && model.bgMusicPlaying === false) {
      this.bgMusic = this.sound.add('bgMusic', { volume: 0.5, loop: true });
      this.bgMusic.play();
      model.bgMusicPlaying = true;
      this.sys.game.globals.bgMusic = this.bgMusic;
    }
  }
};