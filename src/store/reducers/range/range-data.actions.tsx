import axios from 'axios';

import {
  FetchRangeDataFailedAction,
  RangeData,
  SetRangeDataAction,
  SET_RANGE_DATA,
  FETCH_RANGE_DATA_FAILED,
  RangeDataDispatchType,
} from '../../types/range-data.types';

export const setRangeData = (rangeData: RangeData): SetRangeDataAction => {
  return {
    type: SET_RANGE_DATA,
    payload: { rangeData },
  };
};

export const fetchRangeDataFailed = (): FetchRangeDataFailedAction => {
  return {
    type: FETCH_RANGE_DATA_FAILED,
  };
};

export const initRangeData = () => {
  return (dispatch: RangeDataDispatchType) => {
    axios
      .get('https://demo4557431.mockable.io/range-data')
      .then(response => {
        dispatch(setRangeData(response.data));
      })
      .catch(error => {
        dispatch(fetchRangeDataFailed());
      });
  };
};
