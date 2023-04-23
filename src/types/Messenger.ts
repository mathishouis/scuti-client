export interface Friend {
  id: number;
  username: string;
  figure: string;
  motto: string;
  online: boolean;
  inRoom: boolean;
}

export interface FriendRequest {
  id: number;
  username: string;
  figure: string;
}
