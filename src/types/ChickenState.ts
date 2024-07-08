import { IChickenData } from './ChickenData';

export interface ChickenState {
  data: IChickenData[];
  selected: IChickenData[];
  currentPage: number;
}
