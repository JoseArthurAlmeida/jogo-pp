const VIDA_MAXIMA = 30;
let vida = VIDA_MAXIMA;

let scream = new Audio("./audio/scream.mp3");

let labelVida = document.getElementById("texto-vida");
labelVida.innerText = vida;

btAtack.onclick = () => {
	if (vida <= 0) return;

	vida -= 5;

	face.src = "./img/hit.png";
	labelVida.innerText = vida;

	life.style.width = vida + "%";

	if (vida <= 12) {
		life.classList.replace("yellow", "red");
	} else if (vida <= 20) {
		life.classList.replace("green", "yellow");
	}

	scream.play();

	if (vida <= 0) {
		face.src = "./img/dead.png";
	} else {
		setTimeout(() => {
			face.src = "./img/happy.png";
		}, 800);
	}
};
