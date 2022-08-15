import {IncomingPacket} from "../../../IncomingPacket";
import {Buffer} from "buffer";
import {store} from "../../../../../store";
import {InitializeRoomMessageComposer} from "../../../outgoing/room/engine/InitializeRoomMessageComposer";
import {AddUserToRoomMessageComposer} from "../../../outgoing/room/engine/AddUserToRoomMessageComposer";
import {FloorFurniture} from "scuti-renderer";
import {ChangeFloorItemStateMessageComposer} from "../../../outgoing/room/item/ChangeFloorItemStateMessageComposer";

export class FloorItemsMessageEvent extends IncomingPacket {

    constructor(packet: Buffer) {
        super(packet);
    }

    public handle(): void {

        const ownerSize: number = this.readInt();

        for (let i: number = 0; i < ownerSize; i++) {
            const key: number = this.readInt();
            const value: string = this.readString();
        }

        const itemSize: number = this.readInt();

        for (let i: number = 0; i < itemSize; i++) {
            const virtualId: number = this.readInt();
            const spriteId: number = this.readInt();
            const x: number = this.readInt();
            const y: number = this.readInt();
            const direction: number = this.readInt();
            const z: number = parseFloat(this.readString());
            const height: number = parseFloat(this.readString());

            this.readInt();
            this.readInt();

            const extradata: string = this.readString();

            this.readInt();
            this.readInt();
            const ownerId: number = this.readInt();

            const furniture: FloorFurniture = new FloorFurniture(store.getters['Room/Renderer/getRenderer'], {
                x: x,
                y: y,
                z: z,
                direction: direction,
                id: spriteId,
                state: Number(extradata),
            });

            furniture.doubleClick = (event) => {
                console.log("doubleClick");
                store.getters['getWebsocket'].sendMessageComposer(new ChangeFloorItemStateMessageComposer(virtualId));
            }

            furniture.click = async (event) => {
                store.commit('Room/InfoStands/setSelectedItem', {
                    id: virtualId,
                    className: furniture.furnidata.className,
                    name: furniture.furnidata.name,
                    description: furniture.furnidata.description,
                    ownerId: ownerId,
                    ownerName: "",
                    image: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEQAAABDCAMAAAASyFM4AAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAMUExURQAAACIiImZmZgAAAKwNFlgAAAAEdFJOU////wBAKqn0AAAACXBIWXMAAA7DAAAOwwHHb6hkAAABgElEQVRYR93W646DIBAFYKzv/87l4FCcOyLZH3uSrVzGL+5gk5YzS5kooauXUo4jZeJ9EEjCRLulfC7jOD4h4+9VooaMmoDxdu4EEjL2uiSQgLFWWzsFgWDJZPRaPxEvBiNXMgJRDJ/fDjWK7M19ZrXTimrxGM8SiGD66AmBMOa6eocaBeXE4HPmRLw0prwikMpMHmqU2pvaUJosBg3ehbxhrqMGQgtL6QhNF7MPub2pD7j7TUB+QZNomIRXMmSWkVUCmWF0hUJqEV3dqAIDeZ5diPv4YsOvA+Ls8gbqdvYkb+y40SdSpN8cERNILfl9eNn3BdyCxA+bR3yLV/NXSN6z/4dkNSky87Ll+xNIlp3IGwZ3v/+Z04g9v9mQVaYRHSHmwf+FUiIGAsZusb3W2tkzRh5jrTCCIzaj54KQSGOouEc9iSQ0AoaKKRJRhIVIhiMGYSPEyF7UP5PwEDC8xUY7R7x1zoREhAwmIWKkMe1BQiJDwLjtHMn2wdDAy3l+Ae/DGyW1PaEwAAAAAElFTkSuQmCC"
                });
                let selectedItem = store.getters['Room/InfoStands/getSelectedItem'];
                selectedItem.image = await furniture.image(2, 0);
                store.commit('Room/InfoStands/setSelectedItem', selectedItem);
            }

            store.getters['Room/Renderer/getRoom'].addRoomObject(furniture);

            store.commit('Room/Furnitures/addFloorItem', {
                id: virtualId,
                furniture: furniture
            });

        }


    }

}