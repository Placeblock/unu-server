import { Player } from "../../../player/Player";
import { Packet } from "../../Packet";

export abstract class InPacket extends Packet {
    protected readonly player: Player;

    constructor(player: Player) {
        super();
        this.player = player;
    }
}