import { Room } from "./Room";

export class RoomManager {

    private static readonly registeredRooms: {[key: string]: Room} = {};

    static registerRoom(room: Room) {
        if(room.getID() in this.registeredRooms) {
            console.warn("Tried to register already registered Room!");
            return;
        }
        this.registeredRooms[room.getID()] = room;
    }

    static unregisterRoom(room: Room) {
        if(!(room.getID() in this.registeredRooms)) {
            console.warn("Tried to unregister non existing Room!");
            return;
        }
        delete this.registeredRooms[room.getID()];
    }

    static getRegisteredRooms(): {[key: string]: Room} {
        return this.registeredRooms;
    }

    static getRoom(id: string): Room | undefined {
        return this.registeredRooms[id];
    }

    static generateRoomID(): string {
        let roomIDS: string[] = [];
        for (let roomID in this.registeredRooms) {
            roomIDS.push(roomID);
        }
        let newRoomID = "1234";
        do {
            console.log("GENERATING NEW ROOMID");
            newRoomID = Math.floor(1000 + Math.random() * 9000).toString();
        }
        while (roomIDS.includes(newRoomID));
        return newRoomID;
    }
}