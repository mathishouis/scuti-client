export interface Room {
  roomId: number;
  roomName: string | null;
  ownerId: number;
  ownerName: string | null;
  showOwner: boolean;
  skipAuth: number;
  userCount: number;
  maxUserCount: number;
  description: string | null;
  trade: number;
  score: number;
  ranking: number;
  categoryId: number;
  tags: string[];
  thumbnail: string | null;
  groupId: number | null;
  groupName: string | null;
  groupBadge: string | null;
  eventName: string | null;
  eventDescription: string | null;
  eventExpiresIn: number | null;
  allowPets: boolean;
  displayEvent: boolean;
  bitMask: number;
}

export interface Player {
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
