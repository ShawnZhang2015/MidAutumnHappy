
cc.Class({
    extends: cc.Component,

    properties: {
       target: cc.Node,
       label: cc.Label,
       block: cc.Node,
       happy: cc.Node,
       clipOk: cc.AudioClip,
       clipOver: cc.AudioClip,
       clipTime: cc.AudioClip,
       clipBattle: cc.AudioClip,
       clipWarn: cc.AudioClip,
    },

    onLoad () {
        cc.game.on('finished', (num) => {
            if (num >= 3) {
                this.scheduleOnce(() => {
                    this.happy.active = true;    
                }, 1);
                cc.log('游戏结束');
                cc.audioEngine.stop(this.battleId);
                cc.audioEngine.playEffect(this.clipOver);
                return;
            }
            this.target.position = cc.v2(0,0);
            this.playStart(num);
        }, this);
        this.playStart();
    },

    playStart(num) {
       cc.audioEngine.stop(this.battleId);
        if (num === 2) {
            cc.audioEngine.playEffect(this.clipWarn);
        } else {
            cc.audioEngine.playEffect(this.clipTime);
        }
        

        this.block.active = true;
        this.label.string = '3';
        let n = 3;
        let f = () => {
            --n
            this.label.string = n.toString();
            if (n <= 0) {
                this.label.string = '';
                cc.game.emit('start');
                this.block.active = false;
                this.battleId = cc.audioEngine.playEffect(this.clipBattle, true);
            }
        }
        this.schedule(f, 1, 2, 0);
    }

});
