export interface RangeProps {
  onChange: (min: number, max: number) => void;
  min: number;
  max: number;
  step: number | number[];
  disableInputs: boolean;
}
