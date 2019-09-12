
cc.Class({
    extends: cc.Component,
    properties: {
        scene: cc.SceneAsset,
    },

    onLoad() {
        this.node.once(cc.Node.EventType.TOUCH_END, () => {
            this.loadScene();
        });
    },

    loadScene() {
        if (cc.sys.isMobile) {
            let el = document.documentElement;
            let rfs = el.requestFullScreen || el.webkitRequestFullScreen || el.mozRequestFullScreen || el.msRequestFullscreen;      
            if(rfs) {
                rfs.call(el);
            };
        }
        this.scheduleOnce(() => {
            cc.director.loadScene(this.scene.name);   
        }, 0.5);
         
    }
});
