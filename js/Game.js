class Game {
    static mySelf;

    static Instance() {

        if (Game.mySelf === undefined) {
            Game.mySelf = new Game();
        }

        return Game.mySelf;
    }

    attackPlayer(damage) {
        Player.Instance().takeDamage(damage);

        SoundManager.Instance().playScreamAudio(Player.Instance().isDead());

        InterfaceManager.Instance().updateLifeBar(Player.Instance().life);
        InterfaceManager.Instance().updatePlayerFace(Player.Instance().isDead());
    }
}