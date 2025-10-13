class InterfaceManager {
	static mySelf;

	static Instance(lifeBar, playerFace) {

		if (InterfaceManager.mySelf === undefined) {
			InterfaceManager.mySelf = new InterfaceManager(lifeBar, playerFace);
		}

		return InterfaceManager.mySelf;

	}

	constructor(lifeBar, playerFace) {
		this.lifeBar = lifeBar;
		this.playerFace = playerFace;
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

	getNotification(notification) {
		switch (notification.type) {
			case Notification.PLAYER_DAMAGED:
				this.updateLifeBar(notification.content);
				this.updatePlayerFace(notification.content === 0);
				break;
		}
	}
}
