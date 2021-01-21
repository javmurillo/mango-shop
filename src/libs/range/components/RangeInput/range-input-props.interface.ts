export interface RangeInputProps {
  value: number;
  onChange?: (
    event: React.ChangeEvent<HTMLInputElement>,
    key: 'start' | 'end'
  ) => void;
  rangeKey: 'start' | 'end';
  disabled?: boolean;
  ariaLabel?: string;
  max: number;
  min: number;
}
