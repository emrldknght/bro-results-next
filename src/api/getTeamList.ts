import {URL_ROOT} from "@/api";
import type {TeamData} from "@/types";

/** @return {} */
export const getTeamsList = async (): Promise<TeamData[]> => {
  const r = await fetch(`${URL_ROOT}/api/teams`);

  return await r.json();

};