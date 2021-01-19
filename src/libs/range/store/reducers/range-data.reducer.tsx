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

const initialState: RangeDataState = {
  error: false,
};

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

const fetchRangeDataFailed = (state: RangeDataState): RangeDataState => {
  return {
    ...state,
    error: true,
  };
};

const rangeDataReducer = (
  state = initialState,
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

export default rangeDataReducer;
