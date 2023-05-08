import { Player } from "../../../../player/Player";
import { InPacket } from "../InPacket";

export class InEndTurnPacket extends InPacket {

    constructor(player: Player) {
        super(player);
    }

    public getPlayer(): Player {
        return this.player;
    }

    public static getFromJSON(player: Player, json: {}): InEndTurnPacket {
        return new InEndTurnPacket(player);
    }
}