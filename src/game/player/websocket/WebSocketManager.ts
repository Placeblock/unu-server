import { WebSocket, WebSocketServer } from 'ws';
import { createServer, Server } from "http";
import { readFileSync } from 'fs';
import { UnUServer } from '../../../UnuServer';
import { WebSocketPlayer } from './WebSocketPlayer';


export class WebSocketManager {
    private readonly httpserver: Server;
    private readonly ws: WebSocketServer;
    private readonly unuServer: UnUServer;

    constructor(unuServer: UnUServer) {
        this.unuServer = unuServer;
        this.httpserver = createServer({});
        this.ws = new WebSocketServer({"server":this.httpserver});
        this.ws.on("connection", (ws: WebSocket) => {
            var player = new WebSocketPlayer(ws);
        });
        this.httpserver.listen(9101);
    }
    
}