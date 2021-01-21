export interface RangeBulletProps {
  offset: string;
  factor: number;
  handleRef?:
    | string
    | ((instance: HTMLDivElement | null) => void)
    | React.RefObject<HTMLDivElement>
    | null
    | undefined;
  handleMove?: (increase: number) => void;
  step: {
    left: number;
    right: number;
  };
  ariaLabel?: string;
}
