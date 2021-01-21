import { Component, CSSProperties } from 'react';
import { RangeBulletProps } from './range-bullet-props.interface';
import { RangeBulletState } from './range-bullet-state.interface';
import { bulletStyles } from './styles';

/**
 * RangeBullet class
 */
export default class RangeBullet extends Component<
  RangeBulletProps,
  RangeBulletState
> {
  // RangeBullet state
  public state: RangeBulletState = {
    hovered: false,
    focused: false,
    active: false,
  };

  private style: CSSProperties; // CSS Style for this component.
  private lastPos: number | undefined; // Last bullet position.
  private currentPos: number | undefined; // Current bullet position.

  constructor(props: RangeBulletProps) {
    super(props);
    // Style initialization
    this.style = {
      ...bulletStyles.handle,
      left: this.props.offset,
    };
  }

  componentDidMount(): void {
    document.addEventListener('mousemove', this.onBulletMouseMove);
    document.addEventListener('mouseup', this.onBulletMouseUp);
  }

  /**
   * @event onMouseEnter Hover style activated.
   */
  onMouseEnterBullet = (): void => {
    this.style = this.getBulletStyle(
      { ...this.state, hovered: true },
      this.props
    );
    this.setState({
      hovered: true,
    });
  };

  /**
   * @event onMouseLeave Hover style deactivated.
   */
  onMouseLeaveBullet = (): void => {
    this.style = this.getBulletStyle(
      { ...this.state, hovered: false },
      this.props
    );
    this.setState({
      hovered: false,
    });
  };

  /**
   * Sets the bullet ready to start moving.
   * @event onMouseDown Hover style deactivated.
   */
  onMouseDownBullet = (
    event: React.MouseEvent<HTMLDivElement, MouseEvent>
  ): void => {
    this.setBulletToStartMoving(event, event.pageX);
  };

  /**
   * Moves the bullet if active.
   * @event mousemove
   * @param event MouseEvent
   */
  onBulletMouseMove = (event: MouseEvent): void => {
    if (this.state.active) {
      this.move(event, event.clientX);
    }
  };

  /**
   * If the range bullet is active, just stop it where the event mouse up was fired.
   * @param event MouseEvent
   */
  onBulletMouseUp = (event: MouseEvent): void => {
    if (this.state.active) {
      this.move(event, event.pageX);
      this.moveEnd();
    }
  };

  /**
   * Updates the state setting [active] to true, and setting the [currentPos] and [lastPos] global properties.
   * @param event MouseEvent | React.MouseEvent<HTMLDivElement, MouseEvent>
   * @param position number
   */
  setBulletToStartMoving = (
    event: MouseEvent | React.MouseEvent<HTMLDivElement, MouseEvent>,
    position: number
  ): void => {
    event.preventDefault();
    event.stopPropagation();
    this.style = this.getBulletStyle(
      { ...this.state, active: true },
      this.props
    );
    this.currentPos = position;
    this.lastPos = position;
    this.setState({
      active: true,
    });
  };

  /**
   * Moves the bullet.
   * @param event MouseEvent
   * @param position Current bullet position
   */
  move = (event: MouseEvent, position: number): void => {
    event.preventDefault();
    event.stopPropagation();
    const { factor, step, handleMove } = this.props;
    const direction = position - this.lastPos!;
    const distance = position - this.currentPos!;
    const increment = direction > 0 ? 1 : -1;
    const directionStep = increment === 1 ? step.right : step.left;
    if (direction * distance > (factor || 1) * directionStep) {
      if (handleMove) {
        handleMove(increment);
      }
      this.currentPos! += factor * directionStep * increment;
    }
    this.lastPos = position;
  };

  /**
   * Updates the state setting [active] to false, finishing the movement.
   */
  moveEnd = (): void => {
    this.style = this.getBulletStyle(
      { ...this.state, active: false },
      this.props
    );
    this.setState({
      active: false,
    });
  };

  /**
   * Returns the new style given the current state and properties.
   * @param state RangeBulletState
   * @param props RangeBulletProps
   */
  getBulletStyle(state: RangeBulletState, props: RangeBulletProps): Object {
    const { hovered, focused, active } = state;
    const { offset } = props;
    const calcHoverStyle = hovered ? bulletStyles.hoveredHandle : undefined;
    const calcFocusStyle = focused ? bulletStyles.focusedHandle : undefined;
    const calcActiveStyle = active ? bulletStyles.activeHandle : undefined;

    return {
      ...bulletStyles.handle,
      ...calcHoverStyle,
      ...calcFocusStyle,
      ...calcActiveStyle,
      left: offset,
      zIndex: props.zIndex,
    };
  }

  render(): JSX.Element {
    this.style = this.getBulletStyle(this.state, this.props);

    return (
      <div
        aria-label={this.props.ariaLabel}
        ref={this.props.handleRef}
        style={this.style}
        onMouseEnter={this.onMouseEnterBullet}
        onMouseLeave={this.onMouseLeaveBullet}
        onMouseDown={this.onMouseDownBullet}
      ></div>
    );
  }
}
