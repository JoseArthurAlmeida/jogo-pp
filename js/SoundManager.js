class SoundManager {

    static mySelf;

    static Instance(screamAudio, dieAudio) {

        if(SoundManager.mySelf === undefined) {
            SoundManager.mySelf = new SoundManager(screamAudio, dieAudio);
        }

        return SoundManager.mySelf;

    }

    constructor(screamAudio, dieAudio) {
        this.screamAudio = screamAudio;
        this.dieAudio = dieAudio;
    }

    playScreamAudio() {
        this.screamAudio.play();
    }

    playDieAudio() {
        this.dieAudio.play();
    }

    getNotification(notification) {

        switch(notification.type) {

            case Notification.PLAYER_DAMAGED:
                if (notification.content > 0 ) this.playScreamAudio();
                break;

            case Notification.PLAYER_DEAD:
                this.playDieAudio();
                break;

        }

    }

}