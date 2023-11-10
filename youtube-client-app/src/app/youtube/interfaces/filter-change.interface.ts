import { SortStatus } from '../enum/sort-button-status.enum';

export interface FilterChange {
  filter?: string,
  sort?: {
    date: SortStatus
    countOfViews: SortStatus
    wordOrSentance: string
  },
}
