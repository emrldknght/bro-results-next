import type {TeamId} from "@/api/getResults";

const URLS = {
  local: 'http://localhost:8000/game-manager',
  prod: 'https://broquiz.ru/game-manager'
};

export const URL_ROOT = URLS.local;

export const AVATARS: Record<TeamId, string> = {
  '1': 'kpb.svg',
  '2': 'pp.svg',
  '3': 'dy.svg',
  // 4 4ernovik
  '5': 'ss.svg',
  '6': '5k.svg',
  '7': 'spv.svg',
  // 8 iboshr
  '9': '1ok.svg',
};