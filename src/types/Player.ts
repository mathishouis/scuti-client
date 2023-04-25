export interface PlayerData {
  id: number;
  username: string;
  motto: string;
  figure: string;
  gender: string;
  achievementPoints: number;
  rank: number;
  ambassador: boolean;
  club: boolean;
  currencies: Map<number, number>;
  homeRoom: number;
}

export interface PlayerSettings {}
