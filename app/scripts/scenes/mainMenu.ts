import { gameProps, SCALE } from '../const';

export default class MainMenu extends Phaser.Scene {
    gameZone;

    constructor(){
        super({
            key: 'MainMenu'
        });
    }

    create(){
        this.gameZone = this.add.zone(gameProps.width/2, gameProps.height/2, gameProps.width, gameProps.height);

        let cross = this.add.image(0,0,'mainMenuCross');
        cross.setScale(SCALE);
        Phaser.Display.Align.In.TopCenter(cross, this.gameZone, 0, cross.displayHeight);
        this.add.tween({
                targets:cross, 
                y:gameProps.height-120,
                ease: 'Quad.easeIn',
                duration: 1000,
                onComplete: this._onCrossFall,
                onCompleteParams: [ this ]
        });


        let gameTitle = this.add.bitmapText(0,0,'pixel_font', 'Frère Jean\ncontre\nles Pichrocoliens voleurs de raisin', 50, 1);
        Phaser.Display.Align.In.TopCenter(gameTitle, this.gameZone, 0, -20);
    }

    _onCrossFall(tween, targets, scene){
        scene.cameras.cameras[0].shake(1500, .03);
    }

    update(){
        
    }
}

