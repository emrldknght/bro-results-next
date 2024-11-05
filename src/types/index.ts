export interface TeamIDData {
  id: number;
  game_date: string;
}

export interface TeamData {
  id: number;
  name: string;
}

export type TourType =
  'Обычный тур' |
  'Тур-аукцион' |
  'Тур-КМ' |
  'Тур "постучали"' |
  'Тур "горячая картошка"'


export type TourData = {
  order?: number;
  questionsAmount?: number;
  results?: Record<number, number>;
  tourTypeId?: number;
}// Record<number, number>

export interface GameData {
  teams: number[]; // Record<number, TeamData>;
  tours: TourData[]; //Record<number, TourData>;
}

export interface Game {
  id: number;
  name: string;
  season: number;
  game_date: string;
  data: GameData;
  has_data: boolean;
}