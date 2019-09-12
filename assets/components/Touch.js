
cc.Class({
    extends: cc.Component,

    properties: {
        target: cc.Node,
        dy: 1,
        finter: cc.Node,
        layout: cc.Node,
        
    },

    start () {
        this.rect = this.node.getBoundingBoxToWorld();
        this.node.on(cc.Node.EventType.TOUCH_END, () => {
            this.finter.active = false;
            this.target.runAction(cc.moveBy(0.2, cc.v2(0, this.dy)).easing(cc.easeSineOut(1.0)))
        });
        this.schedule(this._update, 0.1);

        cc.game.on('start', () => {
            this.schedule(this._update, 0.1);     
        })
    },



    _update() {
        let rect = this.target.getBoundingBoxToWorld();
        if (cc.Intersection.rectRect(rect, this.rect)) {
            this.unschedule(this._update);
            cc.log('ok');
           
            let node = cc.instantiate(this.target);
            node.setContentSize(145, 145);
            node.parent = this.layout;
            cc.game.emit('finished', this.layout.children.length);
        }
    }
});
