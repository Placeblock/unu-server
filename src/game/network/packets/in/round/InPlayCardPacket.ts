import { Player } from "../../../../player/Player";
import { InPacket } from "../InPacket";

export class InPlayCardPacket extends InPacket {
    private readonly cardid: string;

    constructor(player: Player, cardid: string) {
        super(player);
        this.cardid = cardid;
    }

    public getCardID(): string {
        return this.cardid;
    }

    public getPlayer(): Player {
        return this.player;
    }

    public static getFromJSON(player: Player, json: {}): InPlayCardPacket {
        if(!("card" in json)) return null;
        let card: {} = json["card"] as {};
        if(!("uuid" in card)) return null;
        return new InPlayCardPacket(player, card["uuid"].toString());
    }

}