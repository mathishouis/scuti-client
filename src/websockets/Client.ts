import {PacketHandler} from "./messages/PacketHandler";
import {OutgoingPacket} from "./messages/OutgoingPacket";

export class Client {

    private readonly _secure: boolean;
    private readonly _host: string;
    private readonly _port: number;

    private _connection: WebSocket;
    private _packetHandler: PacketHandler = new PacketHandler();

    private _onConnect: () => void;

    constructor(secure: boolean, host: string, port: number) {

        this._secure = secure;
        this._host = host;
        this._port = port;

    }

    public connect(): void {
        try {
            this._connection = new WebSocket(this._secure ? 'wss://' : 'ws://' + this._host + ':' + this._port);
            this._connection.binaryType = "arraybuffer";
            this._connection.onopen = () => {
                if(this._onConnect) this._onConnect();
            }
            this._connection.onmessage = (message: MessageEvent) => {
                this._packetHandler.handle(message.data);
            }
        } catch(e) {
            console.error(e);
        }
    }

    public get onConnect() {
        return this._onConnect;
    }

    public set onConnect(value) {
        this._onConnect = value;
    }

    public get connection(): WebSocket {
        return this._connection;
    }

    public sendMessageComposer(packet: OutgoingPacket): void {
        this._connection.send(packet.compose());
    }


}