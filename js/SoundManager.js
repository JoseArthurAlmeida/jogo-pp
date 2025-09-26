class SoundManager {
	static mySelf;

	static Instance() {
		if (SoundManager.mySelf === undefined) {
			SoundManager.mySelf = new SoundManager();
		}
		return SoundManager.mySelf;
	}

	constructor() {
		this.screamAudio = new Audio("./audio/scream.mp3");
	}

	playScreamAudio(isDead) {
		if (!isDead) this.screamAudio.play();
	}
}
