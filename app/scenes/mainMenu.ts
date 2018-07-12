export default class MainMenu extends Phaser.Scene {
    constructor(){
        super({
            key: 'MainMenu'
        });
    }

    create(){
        let raisins = this.add.image(0,0, 'raisins');
        raisins.setScale(4);

        let container = this.add.container(200,200, [raisins]);

        container.setInteractive(new Phaser.Geom.Rectangle(0,0,raisins.displayWidth, raisins.displayHeight), Phaser.Geom.Rectangle.Contains);

        container.on('pointerup', () => {
            console.log('clicked');
        });
    }

    update(){
        
    }
}

