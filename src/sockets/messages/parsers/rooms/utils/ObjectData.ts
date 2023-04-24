import { IncomingMessage } from "@/sockets/messages/incoming/IncomingMessage";

export abstract class ObjectData {
  abstract parse(message: IncomingMessage): void;
  abstract set flags(flags: number);
  abstract get flags(): number;
  abstract get data(): any;
}
