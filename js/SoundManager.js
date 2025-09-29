class SoundManager {

    static mySelf;

    static Instance() {

        if(SoundManager.mySelf === undefined) {
            SoundManager.mySelf = new SoundManager();
        }

        return SoundManager.mySelf;

    }

    constructor() {
        this.screamAudio = new Audio("./audio/scream.mp3");
        this.dieAudio = new Audio("./audio/die.mp3");
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
                this.playScreamAudio();
                break;

            case Notification.PLAYER_DEAD:
                this.playDieAudio();
                break;

        }

    }

}