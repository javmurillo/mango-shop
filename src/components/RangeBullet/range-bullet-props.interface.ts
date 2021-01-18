export interface RangeBulletProps {
  offset: string;
  factor: number;
  handleRef:
    | string
    | ((instance: HTMLDivElement | null) => void)
    | React.RefObject<HTMLDivElement>
    | null
    | undefined;
  handleMove: Function;
  step: number;
}
