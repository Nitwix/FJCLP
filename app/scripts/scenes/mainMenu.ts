import { GAME_PROPS, SCALE, TEXT_PROPS } from '../const';
import Button from '../components/button';

export default class MainMenu extends Phaser.Scene {
    gameZone;

    constructor(){
        super({
            key: 'MainMenu'
        });
    }

    create(){
        this.gameZone = this.add.zone(GAME_PROPS.width/2, GAME_PROPS.height/2, GAME_PROPS.width, GAME_PROPS.height);

        let cross = this.add.image(0,0,'mainMenuCross');
        cross.setScale(SCALE);
        Phaser.Display.Align.In.TopCenter(cross, this.gameZone, 0, cross.displayHeight);
        this.add.tween({
                targets:cross, 
                y:GAME_PROPS.height-100,
                ease: 'Quad.easeIn',
                duration: 1000,
                onComplete: this._onCrossFall,
                onCompleteParams: [ this ]
        });

        /* //bouton 'jouer'
        let playBtn = this.add.image(0,0,'largeBtn');
        playBtn.setScale(SCALE);
        Phaser.Display.Align.In.Center(playBtn, this.gameZone);

        //texte du bouton 'jouer'
        let playTxt = this.add.bitmapText(0,0,TEXT_PROPS.font, 'Jouer', TEXT_PROPS.sizes.huge);
        playBtn.setScale(SCALE);
        Phaser.Display.Align.In.Center(playTxt, playBtn, 5, 5); */

        let btn = new Button({
            scene: this,
            texture: 'largeBtn',
            outFrame: 0,
            overFrame: 1,
            downFrame: 2,
            upFrame: 0
        });
        btn.setScale(SCALE);
        Phaser.Display.Align.In.Center(btn, this.gameZone);
        this.add.existing(btn);

        let gameTitle = this.add.bitmapText(0,0,TEXT_PROPS.font, 'Frère Jean\ncontre\nles Pichrocoliens voleurs de raisin', TEXT_PROPS.sizes.big, 1);
        Phaser.Display.Align.In.TopCenter(gameTitle, this.gameZone, 0, -20);
    }

    _onCrossFall(tween, targets, scene){
        //scene.cameras.cameras[0].shake(1500, .03);
    }

    update(){
        
    }
}

