import {
  FETCH_RANGE_DATA_FAILED,
  RangeDataAction,
  SetRangeDataAction,
  SET_RANGE_DATA,
} from '../../models/range-data.types';

export interface RangeDataState {
  min?: number;
  max?: number;
  rangeValues?: number[];
  error: boolean;
}

/**
 * State initialization
 */
export const rangeDataInitialState: RangeDataState = {
  error: false,
};

/**
 * @returns Updated state given an action.
 * @param state Current range data state.
 * @param action SetRangeDataAction.
 */
const setRangeData = (
  state: RangeDataState,
  action: SetRangeDataAction
): RangeDataState => {
  return {
    ...state,
    min: action.payload.rangeData.min,
    max: action.payload.rangeData.max,
    rangeValues: action.payload.rangeData.rangeValues,
    error: false,
  };
};

/**
 * @returns Sets error to true.
 * @param state Current range data state.
 */
const fetchRangeDataFailed = (state: RangeDataState): RangeDataState => {
  return {
    ...state,
    error: true,
  };
};

/**
 * Range data reducer which handles dispatched actions.
 * @param state Current range data state.
 * @param action RangeDataAction.
 */
export const rangeDataReducer = (
  state = rangeDataInitialState,
  action: RangeDataAction
): RangeDataState => {
  switch (action.type) {
    case SET_RANGE_DATA:
      return setRangeData(state, action);
    case FETCH_RANGE_DATA_FAILED:
      return fetchRangeDataFailed(state);
    default:
      return state;
  }
};
