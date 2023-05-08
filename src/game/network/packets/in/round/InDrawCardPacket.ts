import { Player } from "../../../../player/Player";
import { InPacket } from "../InPacket";

export class InDrawCardPacket extends InPacket {

    constructor(player: Player) {
        super(player);
    }

    public getPlayer(): Player {
        return this.player;
    }

    public static getFromJSON(player: Player, json: {}): InDrawCardPacket {
        return new InDrawCardPacket(player);
    }

}