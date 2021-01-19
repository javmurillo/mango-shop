export interface RangeSliderProps {
  min: number;
  max: number;
  step: number | number[];
  rangeValue: {
    start: number;
    end: number;
  };
  onChange: (rangeValue: { start: number; end: number }) => void;
}
