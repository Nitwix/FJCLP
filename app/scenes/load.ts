export default class Load extends Phaser.Scene{
    constructor(){
        super({key:'Load'});
    }

    preload(){
        console.log('loading...');
        this.load.image('raisins', 'raisins.png');

        this.load.on('complete', () => {
            console.log('load completed');
            this.scene.start('MainMenu');
        });
    }
}