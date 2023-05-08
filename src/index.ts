import { UnUServer } from "./UnuServer";
import * as express from "express";
import * as http from "http";
import * as shrikRay from "shrink-ray-current";

const unuServer: UnUServer = new UnUServer;

const app = express();

app.use(shrikRay({filter: shouldCompress}));
function shouldCompress(req, res) {
    if (req.headers['x-no-compression']) {
        return false;
    }
    return shrikRay.filter(req, res);
}

app.use(express.static(__dirname + "/dist"));
app.use("*", (req, res) => {
    res.sendFile(__dirname + '/dist/index.html');
});

const server = http.createServer(app);
server.listen(9100);
