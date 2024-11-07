import {URL_ROOT} from "@/api/index";

export interface JetData {
  amount: number;
  position: number;
}

export interface Specials {
  kmPosition: number;
  auctionPosition: number;
  hotPotPosition: number;
  floppyPosition: number;
}

export type TeamId = string;

export interface ResultsApiAnswer {
  results?: Record<TeamId, number>;
  tour?: number;
  jets?: JetData[];
  specials?: Specials; // Record<string, unknown>;
  kmPlayed?: boolean;
  auctionPlayed?: boolean;
  hotPotPlayed?: boolean;
}

export const getResults = async (id: number): Promise<ResultsApiAnswer> => {
  // console.log('will get results for', id)
  const r = await fetch(`${URL_ROOT}/api/results/${id}?timestamp=${Date.now()}`);
  return await r.json();
};