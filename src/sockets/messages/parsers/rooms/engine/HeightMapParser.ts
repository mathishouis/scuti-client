import { MessageParser } from "@/types/Socket";
import { IncomingMessage } from "@/sockets/messages/incoming/IncomingMessage";

export class HeightMapParser implements MessageParser {
  private _width!: number;
  private _height!: number;
  private _tilesHeight!: number[];

  constructor(message: IncomingMessage) {
    this.flush();
    this.parse(message);
  }

  public flush(): void {
    this._width = 0;
    this._height = 0;
    this._tilesHeight = [];
  }

  public parse(message: IncomingMessage): void {
    this._width = message.readInt();
    const tilesSize: number = message.readInt();
    this._height = tilesSize / this._width;

    for (let i = 0; i < tilesSize; i++) {
      this._tilesHeight[i] = message.readShort();
    }
  }

  public static decodeTileHeight(height: number): number {
    return height < 0 ? -1 : (height & 16383) / 0x0100;
  }

  public static decodeIsStackingBlocked(height: number): boolean {
    return !!(height & 0x4000);
  }

  public static decodeIsRoomTile(height: number): boolean {
    return height >= 0;
  }

  public getTileHeight(x: number, y: number): number {
    if (x < 0 || x >= this._width || y < 0 || y >= this._height) return -1;

    return HeightMapParser.decodeTileHeight(
      this._tilesHeight[y * this._width + x]
    );
  }

  public getStackingBlocked(x: number, y: number): boolean {
    if (x < 0 || x >= this._width || y < 0 || y >= this._height) return true;

    return HeightMapParser.decodeIsStackingBlocked(
      this._tilesHeight[y * this._width + x]
    );
  }

  public isRoomTile(x: number, y: number): boolean {
    if (x < 0 || x >= this._width || y < 0 || y >= this._height) return false;

    return HeightMapParser.decodeIsRoomTile(
      this._tilesHeight[y * this._width + x]
    );
  }

  public get width(): number {
    return this._width;
  }

  public get height(): number {
    return this._height;
  }

  public get tilesHeight(): number[] {
    return this._tilesHeight;
  }
}
