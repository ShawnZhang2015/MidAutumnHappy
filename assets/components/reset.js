
cc.Class({
    extends: cc.Component,

    properties: {
     
    },

    start () {
        
        this.particale = this.getComponent(cc.ParticleSystem);
        this.play()
    },

    play() {
        this.scheduleOnce(() => {
            this.particale.resetSystem();
            this.play();
        }, Math.random());
    }

    // update (dt) {},
});
