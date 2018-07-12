export default {

  init: function (data) {
    console.debug('init', data, this);
  },

  preload: function () {
  },

  create: function () {
    const sky = this.add.image(400, 300, 'sky');
    sky.alpha = 0.5;
    const logo = this.physics.add.image(400, 100, 'logo');
    logo.setVelocity(100, 200);
    logo.setBounce(1, 1);
    logo.setCollideWorldBounds(true);
  },

  update: function () {
    if(this.input.activePointer.isDown){
      this.scene.start('MainMenu');
    }
  },

  extend: {

    progressBar: null,

    onLoadComplete: function (loader, totalComplete, totalFailed) {
      console.debug('complete', totalComplete);
      console.debug('failed', totalFailed);
      this.progressBar.destroy();
    },

    onLoadProgress: function (progress) {
      console.debug('progress', progress);
      this.progressBar
        .clear()
        .fillStyle(0xffffff, 0.75)
        .fillRect(0, 0, 800 * progress, 50);
    }

  }

};
