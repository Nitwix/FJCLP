interface ButtonConfig{
    scene: any, //devrait être de type Phaser.Scene mais ne fonctionne pas...
    texture: string,

    x?: number,
    y?: number,

    callback?: Function,
    callbackContext?: any,

    outFrame?: number, //0
    overFrame?: number, //1
    downFrame?: number, //2
    upFrame?: number //3
}

export default class Button extends Phaser.GameObjects.Image {
    constructor(buttonConfig: ButtonConfig){
        super(buttonConfig.scene, buttonConfig.x, buttonConfig.y, buttonConfig.texture);

        this.type = 'button';

        let buttonRectangle = new Phaser.Geom.Rectangle(0,0,this.width, this.height);
        this.setInteractive(buttonRectangle, Phaser.Geom.Rectangle.Contains);

        
        if(buttonConfig.outFrame){ //ne fonctionne pas
            this.on('pointerout', () => {
                this.setFrame(0);
                console.log('pointerout')
            });
        }
        if(buttonConfig.overFrame){
            this.on('pointerover', () => {
                this.setFrame(1);
                console.log('pointerover')
            });
        }
        if(buttonConfig.downFrame){
            this.on('pointerdown', () => {
                this.setFrame(2);
                console.log('pointerdown')
            });
        }
        if(buttonConfig.upFrame){ //ne fonctionne pas
            this.on('pointerup', () => {
                this.setFrame(3);
                console.log('pointerup')
            });
        }
    }
}