// @ts-nocheck
import { IncomingMessage } from "@/sockets/messages/incoming/IncomingMessage";
import { OutgoingMessage } from "@/sockets/messages/outgoing/OutgoingMessage";
import { Buffer } from "buffer";
import { Incoming } from "@/sockets/messages/headers/Incoming";
import { UniqueIDMessageEvent } from "@/sockets/messages/incoming/handshake/UniqueIDMessageEvent";

export class MessageHandler {
  private readonly _incomingMessages: Map<number, IncomingMessage> = new Map();
  private readonly _outgoingMessages: Map<number, OutgoingMessage> = new Map();

  constructor() {
    this._registerMessages();
  }

  private _registerMessages(): void {
    this._registerMessage(
      Incoming.UniqueIDMessageEvent,
      <IncomingMessage>(<unknown>UniqueIDMessageEvent)
    );
  }

  private _registerMessage(header: number, handler: IncomingMessage): void {
    if (this._incomingMessages.has(header))
      return console.warn(
        "Header is already registered. Failed to register " +
          handler +
          " with header [" +
          header +
          "]."
      );
    this._incomingMessages.set(header, handler);
  }

  public handle(packet: Buffer) {
    const incomingPacket = new IncomingMessage(packet);
    if (this._incomingMessages.has(incomingPacket.header)) {
      const handlerClass = this._incomingMessages.get(incomingPacket.header);
      const handler = new handlerClass(packet);
      handler.handle();
      return console.warn("Handled message [" + incomingPacket.header + "]");
    } else {
      return console.error("Unknown message [" + incomingPacket.header + "]");
    }
  }
}
