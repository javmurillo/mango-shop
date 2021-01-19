import { Action } from 'redux';

export interface RangeData {
  min: number;
  max: number;
  rangeValues: number[];
}

export const SET_RANGE_DATA = 'SET_RANGE_DATA';
export const FETCH_RANGE_DATA_FAILED = 'FETCH_RANGE_DATA_FAILED';

export interface SetRangeDataAction extends Action {
  type: typeof SET_RANGE_DATA;
  payload: { rangeData: RangeData };
}

export interface FetchRangeDataFailedAction extends Action {
  type: typeof FETCH_RANGE_DATA_FAILED;
}

export type RangeDataAction = SetRangeDataAction | FetchRangeDataFailedAction;

export type RangeDataDispatchType = (args: RangeDataAction) => RangeDataAction;
