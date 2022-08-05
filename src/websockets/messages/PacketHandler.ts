import {IncomingPacket} from "./IncomingPacket";
import {OutgoingPacket} from "./OutgoingPacket";
import {Incoming} from "./headers/Incoming";
import {UniqueIdMessageEvent} from "./incoming/handshake/UniqueIdMessageEvent";
import {Buffer} from "buffer";

export class PacketHandler {

    private readonly _incomingPackets: Map<number, IncomingPacket> = new Map();
    private readonly _outgoingPackets: Map<number, OutgoingPacket> = new Map();

    constructor() {
        this._registerPackets();
    }

    private _registerPackets(): void {
        this._registerPacket(Incoming.UniqueIdMessageEvent, <IncomingPacket><unknown>UniqueIdMessageEvent);
    }

    private _registerPacket(header: number, handler: IncomingPacket): void {
        if(this._incomingPackets.has(header)) return console.warn('Header is already registered. Failed to register ' + handler + ' with header [' + header + '].');
        this._incomingPackets.set(header, handler);
    }

    public handle(packet: Buffer) {
        const incomingPacket = new IncomingPacket(packet);
        if(this._incomingPackets.has(incomingPacket.header)) {
            const handlerClass = this._incomingPackets.get(incomingPacket.header);
            const handler = new handlerClass(packet);
            handler.handle();
            return console.warn('Handled message [' + incomingPacket.header + ']');
        } else {
            return console.error('Unknown message [' + incomingPacket.header + ']');
        }
    }

}