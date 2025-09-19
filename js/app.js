let btHit = document.getElementById("btHit");

btHit.onclick = function () {
	Player.Instance().takeDamage(10);
	InterfaceManager.Instance().updateBarLife();

	if (!Player.Instance().isDead()) {
		face.src = "./img/hit.png";
		setTimeout(voltaAoNormal, 200);
	}

	if (Player.Instance().isDead()) {
		face.src = "./img/dead.png";
	}

	function voltaAoNormal() {
		if (!Player.Instance().isDead()) {
			face.src = "./img/happy.png";
		}
	}
};
