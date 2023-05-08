import { Player } from "../../../../player/Player";
import { InPacket } from "../InPacket";

export class InCreateRoomPacket extends InPacket {
    private readonly playerName: string;

    constructor(player: Player, playerName: string) {
        super(player);
        this.playerName = playerName;
    }

    public getPlayer(): Player {
        return this.player;
    }
    
    public getPlayerName(): string {
        return this.playerName;
    }

    public static getFromJSON(player: Player, json: {}): InCreateRoomPacket {
        if(!("player_name" in json)) return null;
        return new InCreateRoomPacket(player, json["player_name"].toString());
    }

}