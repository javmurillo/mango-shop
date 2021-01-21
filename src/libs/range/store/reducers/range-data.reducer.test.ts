import { cleanup } from '@testing-library/react';
import {
  FetchRangeDataFailedAction,
  SetRangeDataAction,
} from '../../models/range-data.types';
import {
  rangeDataInitialState,
  rangeDataReducer,
  RangeDataState,
} from './range-data.reducer';
import { RangeData } from '../../models/range-data';

afterEach(cleanup);

describe('range data reducer', () => {
  test('range data state does not mutate with dummy action', () => {
    const action: any = {
      type: 'DUMMY_ACTION',
    }; // Any because this is not an RangeDataAction, it is a dummy one which is not registered in the reducer.
    expect(rangeDataReducer(undefined, action)).toEqual(rangeDataInitialState);
    expect(rangeDataReducer(rangeDataInitialState, action)).toEqual(
      rangeDataInitialState
    );
  });

  test('returns correct state for SET_RANGE_DATA action', () => {
    const rangeDataAction: SetRangeDataAction = {
      type: 'SET_RANGE_DATA',
      payload: {
        rangeData: dummyRangeData,
      },
    };
    const expectedState: RangeDataState = {
      max: dummyRangeData.max,
      min: dummyRangeData.min,
      rangeValues: dummyRangeData.rangeValues,
      error: false,
    };
    expect(rangeDataReducer(undefined, rangeDataAction)).toEqual(expectedState);
    expect(rangeDataReducer(rangeDataInitialState, rangeDataAction)).toEqual(
      expectedState
    );
  });

  test('returns correct state for FETCH_RANGE_DATA_FAILED action', () => {
    const rangeDataAction: FetchRangeDataFailedAction = {
      type: 'FETCH_RANGE_DATA_FAILED',
    };
    const expectedState: RangeDataState = {
      error: true,
    };
    expect(rangeDataReducer(undefined, rangeDataAction)).toEqual(expectedState);
    expect(rangeDataReducer(rangeDataInitialState, rangeDataAction)).toEqual(
      expectedState
    );
  });
});

const dummyRangeData: RangeData = {
  min: 0,
  max: 100,
  rangeValues: [0, 1, 2, 3, 4],
};
