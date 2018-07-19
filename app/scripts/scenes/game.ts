import { SCALE } from '../const';

export default class Game extends Phaser.Scene{
    gameZone;

    constructor(){
        super({key:'Game'});
    }

    create(){
        const worldBounds = this.physics.world.bounds;
        this.gameZone = this.add.zone(worldBounds.width / 2, worldBounds.height / 2, worldBounds.width, worldBounds.height);

        let moneyBox = this.add.image(0,0,'smallBox');
        moneyBox.setScale(SCALE);
        Phaser.Display.Align.In.TopRight(moneyBox, this.gameZone, -40, -20);
    }
}