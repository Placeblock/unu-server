import { Player } from "../../../../player/Player";
import { InPacket } from "../InPacket";

export class InStartRoundPacket extends InPacket {

    constructor(player: Player) {
        super(player);
    }

    public getPlayer(): Player {
        return this.player;
    }

    public static getFromJSON(player: Player, json: {}): InStartRoundPacket {
        return new InStartRoundPacket(player);
    }
}