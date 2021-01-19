import { Component } from 'react';
import { RangeBulletProps } from './range-bullet-props.interface';
import { RangeBulletState } from './range-bullet-state.interface';
import { bulletStyles } from './styles';
import { CSSProperties } from 'react';

export default class RangeBullet extends Component<
  RangeBulletProps,
  RangeBulletState
> {
  public state: RangeBulletState = {
    hovered: false,
    focused: false,
    active: false,
  };

  private style: CSSProperties;
  private lastPos: number | undefined;
  private currentPos: number | undefined;

  constructor(props: RangeBulletProps) {
    super(props);
    this.style = {
      ...bulletStyles.handle,
      left: this.props.offset,
    };
  }

  componentDidMount(): void {
    document.addEventListener('mousemove', this.onBulletMouseMove);
    document.addEventListener('mouseup', this.onBulletMouseUp);
  }

  componentWillReceiveProps(props: RangeBulletProps): void {
    this.style = this.getBulletStyle(this.state, props);
  }

  onMouseEnterBullet = (): void => {
    this.style = this.getBulletStyle(
      { ...this.state, hovered: true },
      this.props
    );
    this.setState({
      hovered: true,
    });
  };

  onMouseLeaveBullet = (): void => {
    this.style = this.getBulletStyle(
      { ...this.state, hovered: false },
      this.props
    );
    this.setState({
      hovered: false,
    });
  };

  onMouseDownBullet = (
    event: React.MouseEvent<HTMLDivElement, MouseEvent>
  ): void => {
    this.setBulletToStartMoving(event, event.pageX);
  };

  onBulletMouseMove = (event: MouseEvent): void => {
    if (this.state.active) {
      this.move(event, event.clientX);
    }
  };

  /*
   *  If the range bullet is active, just stop it where the event mouse up was fired.
   */
  onBulletMouseUp = (event: MouseEvent): void => {
    if (this.state.active) {
      this.move(event, event.pageX);
      this.moveEnd();
    }
  };

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

  move = (event: MouseEvent, position: number): void => {
    event.preventDefault();
    event.stopPropagation();
    const { factor, step, handleMove } = this.props;
    const direction = position - this.lastPos!;
    const distance = position - this.currentPos!;

    const increment = direction > 0 ? 1 : -1;
    if (direction * distance > (factor || 1) * step) {
      handleMove(increment);
      this.currentPos! += factor * step * increment;
    }
    this.lastPos = position;
  };

  moveEnd = (): void => {
    this.style = this.getBulletStyle(
      { ...this.state, active: false },
      this.props
    );
    this.setState({
      active: false,
    });
  };

  getBulletStyle(state: RangeBulletState, props: RangeBulletProps) {
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
    };
  }

  render(): JSX.Element {
    return (
      <div
        ref={this.props.handleRef}
        style={this.style}
        onMouseEnter={this.onMouseEnterBullet}
        onMouseLeave={this.onMouseLeaveBullet}
        onMouseDown={this.onMouseDownBullet}
      ></div>
    );
  }
}
