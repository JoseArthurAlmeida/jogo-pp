class Notification {

    static PLAYER_DAMAGED = "PLAYER_DAMAGED";
    static PLAYER_DEAD = "PLAYER_DEAD";
    static GAME_OVER = "GAME_OVER";
    static BOSS_APPEARED = "BOSS_APPEARED";

    constructor(type, content){
        this.type = type;
        this.content = content;
    }
}