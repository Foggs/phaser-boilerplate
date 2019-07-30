import Phaser from "phaser";


export default class BootScene extends Phaser.Scene {
  constructor () {
    super('Boot');
  }

  preload () {
    this.load.image('logo', 'assets/graphics/logo.png');
  }

  create () {
    console.log('Bootscene ::');
    this.scene.start('Preloader');
  }
};