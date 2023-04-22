import { IncomingMessage } from "@/sockets/messages/incoming/IncomingMessage";

export interface MessageParser {
  flush(message: IncomingMessage): void;
  parse(message: IncomingMessage): void;
}
