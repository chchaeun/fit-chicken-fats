import { ChickenData } from './ChickenData';

export interface ChickenState {
  data: ChickenData[];
  selected: ChickenData[];
  currentPage: number;
}
