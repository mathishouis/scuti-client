import {IncomingPacket} from "../../../IncomingPacket";
import {Buffer} from "buffer";
import {store} from "../../../../../stores/store";

export class NavigatorSearchResultsSetMessageEvent extends IncomingPacket {

    constructor(packet: Buffer) {
        super(packet);
    }

    public handle(): void {
        const tabName: string = this.readString();
        const data: string = this.readString();

        if(tabName !== null) {
            store.commit('clearCategories', tabName);


            const size: number = this.readInt();

            for (let i: number = 0; i < size; i++) {
                const id: string = this.readString();
                const name: string = this.readString();
                const rank: number = this.readInt();
                const minimised: boolean = this.readBool();
                const view: number = this.readInt();

                store.commit('addCategory', {
                    'id': id,
                    'name': name,
                    'rank': rank,
                    'minimised': minimised,
                    'view': view,
                    'tabName': tabName
                });

                const roomSize: number = this.readInt();

                for (let j: number = 0; j < roomSize; j++) {
                    const roomId: number = this.readInt();
                    const roomName: string = this.readString();
                    const roomOwnerId: number = this.readInt();
                    const roomOwnerName: string = this.readString();
                    const skipAuth: number = this.readInt();
                    const userCount: number = this.readInt();
                    const maxUsers: number = this.readInt();
                    const description: string = this.readString();
                    const trade: number = this.readInt();
                    const score: number = this.readInt();
                    this.readInt();
                    const categoryId: number = this.readInt();

                    store.commit('addRoom', {
                        'id': roomId,
                        'name': roomName,
                        'ownerId': roomOwnerId,
                        'ownerName': roomOwnerName,
                        'skipAuth': skipAuth,
                        'userCount': userCount,
                        'maxUsers': maxUsers,
                        'description': description,
                        'trade': trade,
                        'score': score,
                        'categoryId': categoryId,
                        'tags': [],
                        'tabName': tabName,
                        'categoryTabId': id,
                    });

                    const tagSize: number = this.readInt();

                    for (let k: number = 0; k < tagSize; k++) {
                        const tag: string = this.readString();
                        // TODO: Add tags
                    }

                    // TODO: Thumbnails
                    const thumbnail: number = this.readInt();
                    if(thumbnail === 1) {
                        const thumbnailUrl: string = this.readString();
                    }
                }
            }
        }
        store.commit('setLoading', false);
        store.commit('setSelectedTab', tabName);
    }

}