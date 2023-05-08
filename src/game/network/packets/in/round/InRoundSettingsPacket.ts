import { Player } from "../../../../player/Player";
import { InPacket } from "../InPacket";
import { RoundSettings } from "../../../../RoundSettings";

export class InRoundSettingsPacket extends InPacket {
    private readonly settings: RoundSettings;

    constructor(player: Player, settings: RoundSettings) {
        super(player);
        this.settings = settings;
    }

    public getPlayer(): Player {
        return this.player;
    }

    public getSettings(): RoundSettings {
        return this.settings;
    }

    public static getFromJSON(player: Player, json: {}): InRoundSettingsPacket {
        if(!("settings" in json)) return undefined;
        let settings: {} = json["settings"] as {};
        if(!("startcardamount" in settings)) return undefined;
        if(!("allowdraw2ondraw4" in settings)) return undefined;
        if(!("allowdraw4ondraw2" in settings)) return undefined;
        if(!("allowdraw4ondraw4" in settings)) return undefined;
        if(!("allowwishondraw4" in settings)) return undefined;
        if(!("allowdraw4onwish" in settings)) return undefined;
        if(!("allowwishonwish" in settings)) return undefined;
        return new InRoundSettingsPacket(player, {
            "startcardamount": Number(json["settings"]["startcardamount"]),
            "allowdraw2ondraw4": Boolean(json["settings"]["allowdraw2ondraw4"]),
            "allowdraw4ondraw2": Boolean(json["settings"]["allowdraw4ondraw2"]),
            "allowdraw4ondraw4": Boolean(json["settings"]["allowdraw4ondraw4"]),
            "allowwishondraw4": Boolean(json["settings"]["allowwishondraw4"]),
            "allowdraw4onwish": Boolean(json["settings"]["allowdraw4onwish"]),
            "allowwishonwish": Boolean(json["settings"]["allowwishonwish"])
        });
    }

}