import { RangeData } from '../../models/range-data';
import { getRangeData } from '../../services/range.service';

import {
  FetchRangeDataFailedAction,
  SetRangeDataAction,
  SET_RANGE_DATA,
  FETCH_RANGE_DATA_FAILED,
  RangeDataDispatchType,
} from '../../models/range-data.types';

/**
 * @returns SetRangeDataAction
 * @param rangeData RangeData
 */
export const setRangeData = (rangeData: RangeData): SetRangeDataAction => {
  return {
    type: SET_RANGE_DATA,
    payload: { rangeData },
  };
};

/**
 * @returns FetchRangeDataFailedAction
 */
export const fetchRangeDataFailed = (): FetchRangeDataFailedAction => {
  return {
    type: FETCH_RANGE_DATA_FAILED,
  };
};

/**
 * HTTP call to retrieve the range data.
 */
export const initRangeData = (): ((
  dispatch: RangeDataDispatchType
) => void) => {
  return (dispatch: RangeDataDispatchType) => {
    getRangeData()
      .then(response => {
        dispatch(setRangeData(response.data));
      })
      .catch(error => {
        dispatch(fetchRangeDataFailed());
      });
  };
};
