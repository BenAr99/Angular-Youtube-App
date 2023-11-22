import { SortStatus } from '../enum/sort-button-status.enum';

export interface SortSetting {
  date: SortStatus
  countOfViews: SortStatus
  wordOrSentance: string;
}
