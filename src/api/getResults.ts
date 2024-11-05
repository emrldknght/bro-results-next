import {URL_ROOT} from "@/api/index";

export interface JetData {
  amount: number;
  position: number;
}


export interface ResultsApiAnswer {
  results?: Record<string, number>;
  tour?: number;
  jets?: JetData[];
  specials?: Record<string, unknown>
  kmPlayed?: boolean;
  auctionPlayed?: boolean;
  hotPotPlayed?: boolean;
}

export const getResults = async (id: number): Promise<ResultsApiAnswer> => {
  console.log('will get results for', id)
  const r = await fetch(`${URL_ROOT}/api/results/${id}?timestamp=${Date.now()}`);
  return await r.json();
};