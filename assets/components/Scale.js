
cc.Class({
    extends: cc.Component,

    properties: {
      
    },


    start () {
        let scale1 = cc.scaleTo(0.1, 0.8);
        let scale2 = cc.scaleTo(0.1, 1);
        let seq = cc.sequence(scale1, scale2).repeatForever();
        this.node.runAction(seq);
    },
});
