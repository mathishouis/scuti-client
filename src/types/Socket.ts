import { IncomingMessage } from "@/sockets/messages/incoming/IncomingMessage";

export interface MessageParser {
  flush(): void;
  parse(message: IncomingMessage): void;
}
