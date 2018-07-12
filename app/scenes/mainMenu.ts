export default class MainMenu extends Phaser.Scene {
    raisin;
    
    constructor(){
        super({
            key: 'MainMenu'
        });
    }

    create(){
        this.raisin = this.add.sprite(50,50,'raisins');
        this.raisin.setScale(4);
    }

    update(){
        
    }
}

