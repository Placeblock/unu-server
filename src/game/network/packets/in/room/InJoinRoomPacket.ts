import { Player } from "../../../../player/Player";
import { InPacket } from "../InPacket";

export class InJoinRoomPacket extends InPacket {
    private readonly id: string;
    private readonly playerName: string;

    constructor(player: Player, id: string, playerName: string) {
        super(player);
        this.id = id;
        this.playerName = playerName;
    }

    public getPlayer(): Player {
        return this.player;
    }

    public getID(): string {
        return this.id;
    }

    public getPlayerName(): string {
        return this.playerName;
    }

    public static getFromJSON(player: Player, json: {}): InJoinRoomPacket {
        if(!("id" in json) || !("player_name" in json)) return null;
        return new InJoinRoomPacket(player, json["id"].toString(), json["player_name"].toString());
    }

}