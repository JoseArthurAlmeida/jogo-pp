let buttonHit = document.getElementById("button-hit");

buttonHit.onclick = function () {
	Game.Instance().attackPlayer(10);
};

Game.Instance().showMonsters();
