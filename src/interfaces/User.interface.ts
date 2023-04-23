export interface UserData {
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

}
