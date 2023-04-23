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
