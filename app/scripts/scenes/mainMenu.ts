import { gameProps } from '../const';

export default class MainMenu extends Phaser.Scene {
    gameZone;

    constructor(){
        super({
            key: 'MainMenu'
        });
    }

    create(){
        this.gameZone = this.add.zone(gameProps.width/2, gameProps.height/2, gameProps.width, gameProps.height);

        let raisins = this.add.image(0,0, 'raisins');
        raisins.setScale(4);

        let container = this.add.container(200,200, [raisins]);
        container.setInteractive(new Phaser.Geom.Rectangle(0,0,raisins.displayWidth, raisins.displayHeight), Phaser.Geom.Rectangle.Contains);
        container.on('pointerup', () => {
            console.log('clicked');
        });

        //TODO: aligner le text de facon centrée
        let gameTitle = this.add.bitmapText(0,0,'pixel_font', 'Frère Jean\ncontre\nles Pichrocoliens voleurs de raisin', 50);
        Phaser.Display.Align.In.Center(gameTitle, this.gameZone);
    }

    update(){
        
    }
}

