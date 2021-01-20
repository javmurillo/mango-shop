import { RangeState } from '../Range/range-state.interface';

export interface RangeSliderState {
  start: RangeState['rangeValue']['start'];
  end: RangeState['rangeValue']['end'];
  handleSize?: number;
  trackLength?: number;
}
