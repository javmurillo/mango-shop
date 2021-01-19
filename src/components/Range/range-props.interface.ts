export interface RangeProps {
  onFilterArticles: (min: number, max: number) => void;
  min: number;
  max: number;
  step: number | number[];
  disableInputs: boolean;
}
