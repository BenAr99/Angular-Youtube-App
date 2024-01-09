import { SortSetting } from './sort-setting.interface';

export interface FilterChange {
  filter?: string,
  sort?: SortSetting,
}
