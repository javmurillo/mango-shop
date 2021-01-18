export interface RangeSliderProps {
  min: number;
  max: number;
  step: number;
  rangeValue: {
    start: number;
    end: number;
  };
  onChange?: Function;
}
