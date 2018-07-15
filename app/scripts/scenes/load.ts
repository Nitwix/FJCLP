export default class Load extends Phaser.Scene{
    constructor(){
        super({key:'Load'});
    }

    preload(){
        let startTime = (new Date()).getTime();
        console.log('loading...');

        //load UI
        this.load.spritesheet('largeBtn', 'UI/largeBtn.png', {frameWidth: 64, frameHeight: 32});

        //load images
        this.load.image('mainMenuBG', 'mainMenu/background.png');
        this.load.image('mainMenuCross', 'mainMenu/cross.png');
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