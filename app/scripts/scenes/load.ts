export default class Load extends Phaser.Scene{
    constructor(){
        super({key:'Load'});
    }

    preload(){
        let startTime = (new Date()).getTime();
        console.log('loading...');

        //load images
        this.load.image('raisins', 'raisins.png');

        //load fonts
        this.load.bitmapFont('pixel_font', 'fonts/pixel_font.png', 'fonts/pixel_font.fnt');

        this.load.on('complete', () => {
            let finishTime = (new Date()).getTime();
            console.log('load completed in', finishTime-startTime, 'ms');
            this.scene.start('MainMenu');
        });
    }
}