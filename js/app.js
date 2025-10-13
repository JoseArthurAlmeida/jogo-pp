let btHit = document.getElementById("btHit");

btHit.onclick = function () {
	Game.Instance().attackPlayer(10);
};
