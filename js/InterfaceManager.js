class InterfaceManager {
	static mySelf;

	static Instance() {
		if (InterfaceManager.mySelf === undefined) {
			InterfaceManager.mySelf = new InterfaceManager();
		}
		return InterfaceManager.mySelf;
	}

	constructor() {
		this.lifeElement = document.getElementById("life");
	}

	updateBarLife() {
		let lifeBar = document.getElementById("life-bar");
		lifeBar.style.width = Player.Instance().life + "%";

		if (Player.Instance().life >= 20) {
			lifeBar.className = "yellow";
		} else {
			lifeBar.className = "red";
		}
	}
}
