export interface RangeState {
  rangeValue: {
    start: number;
    end: number;
  };
  min: number;
  max: number;
  step: number | number[];
}
