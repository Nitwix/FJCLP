export default class Load extends Phaser.Scene{
    constructor(){
        super({key:'Load'});
    }

    preload(){
        let startTime = (new Date()).getTime();
        console.log('loading...');

        //load UI
        this.load.spritesheet('largeBtn', 'sprites/UI/largeBtn.png', {frameWidth: 128, frameHeight: 64});

        //load images
        this.load.image('mainMenuBG', 'sprites/mainMenu/background.png');
        this.load.image('mainMenuCross', 'sprites/mainMenu/cross.png');
        this.load.image('raisins', 'sprites/raisins.png');

        //load fonts
        this.load.bitmapFont('pixel_font', 'fonts/pixel_font.png', 'fonts/pixel_font.fnt');

        this.load.on('complete', () => {
            let finishTime = (new Date()).getTime();
            console.log('load completed in', finishTime-startTime, 'ms');
            this.scene.start('MainMenu');
        });
    }
}