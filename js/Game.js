class Game {
    static mySelf;

    #monsterSlot1 = document.getElementById("enemy-face-1");
    #monsterSlot2 = document.getElementById("enemy-face-2");
    #monsterSlot3 = document.getElementById("enemy-face-3");
    #monsterSlot4 = document.getElementById("enemy-face-4");

    #monsterLifeBar1 = document.getElementById("enemy-life-bar-1");
    #monsterLifeBar2 = document.getElementById("enemy-life-bar-2");
    #monsterLifeBar3 = document.getElementById("enemy-life-bar-3");
    #monsterLifeBar4 = document.getElementById("enemy-life-bar-4");

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

    showMonsters() {
        let monsterFabric = new MonsterFabric();
        this.configureMonsterSlot(1, monsterFabric.createMonsterType1("Boris", 100));
        this.configureMonsterSlot(2, monsterFabric.createMonsterType2("Sonso", 200));
        this.configureMonsterSlot(3, monsterFabric.createMonsterType3("Bin", 300));
        this.configureMonsterSlot(4, monsterFabric.createMonsterType4("Borrado", 400));
    }

    configureMonsterSlot(slotNumber, monster) {
        switch (slotNumber) {
            case 1:
                this.#monsterSlot1.src = monster.image;
                this.#monsterSlot1.title = monster.name;
                this.#monsterLifeBar1.className = monster.color;
                break;
            case 2:
                this.#monsterSlot2.src = monster.image;
                this.#monsterSlot2.title = monster.name;
                this.#monsterLifeBar2.className = monster.color;

                break;
            case 3:
                this.#monsterSlot3.src = monster.image;
                this.#monsterSlot3.title = monster.name;
                this.#monsterLifeBar3.className = monster.color;
                break;
            case 4:
                this.#monsterSlot4.src = monster.image;
                this.#monsterSlot4.title = monster.name;
                this.#monsterLifeBar4.className = monster.color;
                break;
        }
    }
}