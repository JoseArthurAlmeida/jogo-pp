class Game {
    static mySelf;

    constructor() {
        Player.Instance().addObserver(SoundManager.Instance());
        Player.Instance().addObserver(InterfaceManager.Instance());
    }

    static Instance() {

        if (Game.mySelf === undefined) {
            Game.mySelf = new Game();
        }

        return Game.mySelf;
    }

    attackPlayer(damage) {
        Player.Instance().takeDamage(damage);
    }
}