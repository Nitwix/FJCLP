interface ButtonConfig{
    scene: any, //devrait être de type Phaser.Scene mais ne fonctionne pas...
    texture: string,

    scale?: number,

    font?: string,
    text?: string,
    textSize?: number,
    textAlign?: number

    x?: number,
    y?: number,

    callback?: Function,
    callbackContext?: any,

    outFrame?: number, //0
    overFrame?: number, //1
    downFrame?: number, //2
    upFrame?: number, //3

    align?: {
        relativity: string, //'In' ou 'To'
        gameObject: any, // d.ê Phaser.GameObject
        pos: string,
        offsetX?: number,
        offsetY?: number
    }
}

export default class Button extends Phaser.GameObjects.Image {
    container;

    btnCfg: ButtonConfig;

    buttonText: any; // devrait être de type Phaser.GameObjects.BitmapText

    constructor(btnCfg: ButtonConfig){
        super(btnCfg.scene, btnCfg.x, btnCfg.y, btnCfg.texture);
        this.type = 'button';

        if (btnCfg.text) {
            this.buttonText = this.scene.add.bitmapText(0, 0, btnCfg.font, btnCfg.text, btnCfg.textSize, btnCfg.textAlign);
            Phaser.Display.Align.In.Center(this.buttonText, this, 5, 5);
            this.buttonText.depth = 1;
        }

        this.container = btnCfg.scene.add.container(0, 0, [this, this.buttonText]);

        if(btnCfg.align){
            Phaser.Display.Align[btnCfg.align.relativity][btnCfg.align.pos](this.container, btnCfg.align.gameObject, btnCfg.align.offsetX, btnCfg.align.offsetY);
        }

        this.btnCfg = this._setDefaults(btnCfg);

        this.setInteractive();
        this._setEvents(btnCfg);
        this.setScale(btnCfg.scale);

        btnCfg.scene.add.existing(this.container); //ADDS THE BUTTON TO THE GIVEN SCENE
    }

    _setDefaults(btnCfg: ButtonConfig): ButtonConfig{
        btnCfg.textSize = btnCfg.textSize || 30;
        btnCfg.textAlign = btnCfg.textAlign || 0;

        return btnCfg;
    }


    _setEvents(btnCfg: ButtonConfig){
        if(typeof btnCfg.outFrame === "number"){
            this.on('pointerout', () => {
                this.setFrame(btnCfg.outFrame);
            });
        }
        if(typeof btnCfg.overFrame === "number"){
            this.on('pointerover', () => {
                this.setFrame(btnCfg.overFrame);
            });
        }
        if(typeof btnCfg.downFrame === "number"){
            this.on('pointerdown', () => {
                this.setFrame(btnCfg.downFrame);

                //execute la callback du bouton
                if(typeof btnCfg.callback === "function"){
                    let callback = btnCfg.callback.bind(btnCfg.callbackContext);
                    callback();
                }
            });
        }
        if(typeof btnCfg.upFrame === "number"){
            this.on('pointerup', () => {
                this.setFrame(btnCfg.upFrame);
            });
        }
    }
}