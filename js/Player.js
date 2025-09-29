class Player {

    static mySelf;
    static observers = [];

    constructor() {
        this.life = 30;
    }

    static Instance() {

        if(Player.mySelf === undefined) {
            Player.mySelf = new Player();
        }

        return Player.mySelf;

    }

    addObserver(observer) {
        Player.observers.push(observer);
    }

    notifyObservers(notification) {
        for (let observer of Player.observers) {
            observer.getNotification(notification);
        }
    }

    isDead() {
        return this.life === 0;
    }

    takeDamage(damageValue) {

        if(!this.isDead()) {
            this.life -= damageValue;
            this.notifyObservers(new Notification(Notification.PLAYER_DAMAGED, this.life));
        }
        else {
            this.notifyObservers(new Notification(Notification.PLAYER_DEAD, this.life));
        }



    }

}