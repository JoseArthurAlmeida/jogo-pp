class InterfaceManager {
	static mySelf;

	static Instance() {

		if (InterfaceManager.mySelf === undefined) {
			InterfaceManager.mySelf = new InterfaceManager();
		}

		return InterfaceManager.mySelf;

	}

	constructor() {
		this.lifeBar = document.getElementById("life-bar");
		this.playerFace = document.getElementById("player-face");
	}

	updateLifeBar(playerLife) {

		this.lifeBar.style.width = playerLife + "%";

		if (playerLife >= 20) {
			this.lifeBar.className = "yellow";
		} else {
			this.lifeBar.className = "red";
		}

	}

	updatePlayerFace(isDead) {

		if (!isDead) {
			this.playerFace.src = "./img/hit.png";
			setTimeout(() => this.playerFace.src = "./img/happy.png", 200);
		}
		else {
			this.playerFace.src = "./img/dead.png";
		}

	}
}
