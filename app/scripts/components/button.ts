interface ButtonConfig{
    scene: any, //devrait être de type Phaser.Scene mais ne fonctionne pas...
    texture: string,

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

    alignIn?: {
        gameObject: any, // d.ê Phaser.GameObject
        pos: string
    }
}

export default class Button extends Phaser.GameObjects.Image {
    buttonConfig: ButtonConfig;

    buttonText: any; // devrait être de type Phaser.GameObjects.BitmapText

    constructor(buttonConfig: ButtonConfig){
        super(buttonConfig.scene, buttonConfig.x, buttonConfig.y, buttonConfig.texture);
        this.type = 'button';

        if(buttonConfig.alignIn){
            Phaser.Display.Align.In[buttonConfig.alignIn.pos](this, buttonConfig.alignIn.gameObject);
        }

        buttonConfig = this._setDefaults(buttonConfig);
        this.buttonConfig = buttonConfig;

        this.setInteractive();

        if(buttonConfig.text){
            this.buttonText = this.scene.add.bitmapText(0,0,buttonConfig.font, buttonConfig.text, buttonConfig.textSize, buttonConfig.textAlign);
            Phaser.Display.Align.In.Center(this.buttonText, this, 5, 5);
            this.buttonText.depth = 1;
        }

        this._setEvents(buttonConfig);
    }

    _setDefaults(buttonConfig: ButtonConfig) : ButtonConfig{
        buttonConfig.textSize = buttonConfig.textSize || 30;
        buttonConfig.textAlign = buttonConfig.textAlign || 0;

        return buttonConfig;
    }


    _setEvents(buttonConfig: ButtonConfig){
        if(typeof buttonConfig.outFrame === "number"){
            this.on('pointerout', () => {
                this.setFrame(buttonConfig.outFrame);
            });
        }
        if(typeof buttonConfig.overFrame === "number"){
            this.on('pointerover', () => {
                this.setFrame(buttonConfig.overFrame);
            });
        }
        if(typeof buttonConfig.downFrame === "number"){
            this.on('pointerdown', () => {
                this.setFrame(buttonConfig.downFrame);

                //execute la callback du bouton
                if(typeof buttonConfig.callback === "function"){
                    let callback = buttonConfig.callback.bind(buttonConfig.callbackContext);
                    callback();
                }
            });
        }
        if(typeof buttonConfig.upFrame === "number"){
            this.on('pointerup', () => {
                this.setFrame(buttonConfig.upFrame);
            });
        }
    }
}