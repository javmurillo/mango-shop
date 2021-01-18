import { RangeBulletProps } from '../components/RangeBullet/range-bullet-props.interface';
import { RangeBulletState } from '../components/RangeBullet/range-bullet-state.interface';
import { BulletStyles } from '../components/RangeBullet/styles';

export function getBulletStyle(
  styles: BulletStyles,
  state: RangeBulletState,
  props: RangeBulletProps
) {
  const { hovered, focused, active } = state;
  const { offset } = props;
  let calcHoverStyle;
  let calcFocusStyle;
  let calcActiveStyle;

  if (hovered) {
    calcHoverStyle = { ...styles.hoveredHandle };
  }
  if (focused) {
    calcFocusStyle = { ...styles.focusedHandle };
  }
  if (active) {
    calcActiveStyle = { ...styles.activeHandle };
  }

  return {
    ...styles.handle,
    left: offset,
    ...calcHoverStyle,
    ...calcFocusStyle,
    ...calcActiveStyle,
  };
}
