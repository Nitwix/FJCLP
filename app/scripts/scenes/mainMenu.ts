import { SCALE, TEXT_PROPS } from '../const';
import Button from '../components/button';

export default class MainMenu extends Phaser.Scene {
    gameZone;

    constructor(){
        super({
            key: 'MainMenu'
        });
    }

    create(){
        const worldBounds = this.physics.world.bounds;
        this.gameZone = this.add.zone(worldBounds.width/2, worldBounds.height/2, worldBounds.width, worldBounds.height);

        let playBtn = new Button({
            scene: this,
            texture: 'largeBtn',

            scale: SCALE,

            outFrame: 0,
            overFrame: 1,
            downFrame: 2,
            upFrame: 1,

            callback: () => {
                console.log("clicked!");
            },

            text: "Jouer",
            textSize: TEXT_PROPS.sizes.huge,
            font: TEXT_PROPS.font,

            align: {
                relativity: 'In',
                gameObject: this.gameZone,
                pos: "Center",
                offsetY: -10
            }
        });

        console.log(playBtn.scaleY);
        
        let cross = this.add.image(0, 0, 'mainMenuCross');
        cross.setScale(SCALE);
        Phaser.Display.Align.In.TopCenter(cross, this.gameZone, 0, cross.displayHeight);
        this.add.tween({
            targets: cross,
            y: worldBounds.height - 100,
            ease: 'Quad.easeIn',
            duration: 1000,
            onComplete: this._onCrossFall,
            onCompleteParams: [this, playBtn]
        });
        
        let gameTitle = this.add.bitmapText(0,0,TEXT_PROPS.font, 'Frère Jean\ncontre\nles Pichrocoliens voleurs de raisin', TEXT_PROPS.sizes.big, 1);
        Phaser.Display.Align.In.TopCenter(gameTitle, this.gameZone, 0, -20);
    }

    _onCrossFall(tween, targets, scene, playBtn){
        scene.cameras.main.shake(1500, .02);

        scene.cameras.main.on('camerashakecomplete', () => {
            scene.add.tween({
                targets: playBtn.container,
                yoyo: true,
                repeat: -1,
                duration: 1024,
                y: playBtn.container.y + 8
            });
        });
    }
}

