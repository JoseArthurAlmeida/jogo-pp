class Game {
    static mySelf;

    constructor() {
        let lifeBarDependency = document.getElementById("life-bar");
        let playerFaceDependency = document.getElementById("player-face");

        let screamAudioDependency = new Audio("./audio/scream.mp3");
        let dieAudioDependency = new Audio("./audio/die.mp3")

        Player.Instance().addObserver(SoundManager.Instance(screamAudioDependency, dieAudioDependency));
        Player.Instance().addObserver(InterfaceManager.Instance(lifeBarDependency, playerFaceDependency));
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