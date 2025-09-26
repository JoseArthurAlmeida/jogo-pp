class Player {
	static mySelf;

	constructor() {
		this.life = 30;
	}

	static Instance() {
		if (Player.mySelf === undefined) {
			Player.mySelf = new Player();
		}
		return Player.mySelf;
	}

	isDead() {
		return this.life === 0;
	}

	takeDamage(damageValue) {
		if (!this.isDead()) {
			this.life -= damageValue;
		}
	}
}
