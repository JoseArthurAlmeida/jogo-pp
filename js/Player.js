class Player {

    static mySelf;
    static observers = [];
    #jaDeuGritoDaMorte = false;

    constructor() {
        this.life = 30;
    }
    
    /**
     * Retorna a instância única do Player (Singleton).
     * @returns {Player} A instância do Player. <--- ISTO É CRÍTICO
     */
    static Instance() {

        if (Player.mySelf === undefined) {
            Player.mySelf = new Player();
        }

        return Player.mySelf;

    }

    /**
     * Adiciona um observador ao player.
     * @param {Function} observer - A função a ser chamada na notificação.
     */
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
        this.life -= damageValue;
        this.life = Math.max(0, this.life);

        this.notifyObservers(new Notification(Notification.PLAYER_DAMAGED, this.life));

        if (this.isDead() && !this.#jaDeuGritoDaMorte) {
            this.#jaDeuGritoDaMorte = true;
            this.notifyObservers(new Notification(Notification.PLAYER_DEAD, this.life));
        }
    }
}