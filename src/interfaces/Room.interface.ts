export interface Avatar {
  playerId: number;
  username: string | null;
  motto: string | null;
  figure: string | null;
  avatarId: number;
  gender: string | null;
  achievementPoints: number;
  favouriteGroupId: number;
  favouriteGroupTitle?: string | null;
}

export interface RoomSettings {
  isLoading: boolean;
  checkEntry: boolean;
  staffPicked: boolean;
  muted: boolean;
  muteState: number;
  kickState: number;
  banState: number;
  canMute: boolean;
  bubbleMode: number;
  bubbleType: number;
  bubbleScroll: number;
  chatDistance: number;
  antiFlood: number;
}
