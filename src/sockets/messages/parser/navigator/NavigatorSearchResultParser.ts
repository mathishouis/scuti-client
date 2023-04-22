import { NavigatorCategoryDataParser } from "@/sockets/messages/parser/navigator/data/NavigatorCategoryDataParser";
import { IncomingMessage } from "@/sockets/messages/incoming/IncomingMessage";
import { MessageParser } from "@/interfaces/Socket.interface";

export class NavigatorSearchResultParser implements MessageParser {
  private _id!: string | null;
  private _data!: string | null;
  private _categories!: NavigatorCategoryDataParser[];

  constructor(message: IncomingMessage) {
    this.flush();
    this.parse(message);
  }

  public flush(): void {
    this._id = null;
    this._data = null;
    this._categories = [];
  }

  public parse(message: IncomingMessage): void {
    this._id = message.readString();
    this._data = message.readString();

    const categoriesSize: number = message.readInt();

    for (let i = 0; i < categoriesSize; i++) {
      this._categories.push(new NavigatorCategoryDataParser(message));
    }
  }

  public get id(): string | null {
    return this._id;
  }

  public get data(): string | null {
    return this._data;
  }

  public get categories(): NavigatorCategoryDataParser[] {
    return this._categories;
  }
}
