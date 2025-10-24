class MonsterFabric {
    createMonsterType1(name, life) {
        return new Monster(name, life, "blue", "./img/monster1.png");
    }

    createMonsterType2(name, life) {
        return new Monster(name, life, "yellow-monster", "./img/monster2.png");
    }

    createMonsterType3(name, life) {
        return new Monster(name, life, "orange-monster", "./img/monster3.png");
    }

    createMonsterType4(name, life) {
        return new Monster(name, life, "pink-monster", "./img/monster4.png");
    }
}