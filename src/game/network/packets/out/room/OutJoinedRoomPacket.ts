import { Player } from "../../../../player/Player";
import { Room } from "../../../../Room";
import { OutPacket } from "../OutPacket";

export class OutJoinedRoomPacket extends OutPacket {
    protected readonly action: string = "joinedRoom";
    private readonly room: Room;
    private readonly player: Player;

    constructor(room: Room, player: Player) {
        super();
        this.room = room;
        this.player = player;
    }

    asJSON(): {} {
        return {"action":this.action,"room":this.room.asJSON(),"me":this.player.asJSON()};
    }

    public getRoom(): Room {
        return this.room;
    }
}