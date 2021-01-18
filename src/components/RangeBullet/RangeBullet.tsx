import { Component } from 'react';
import { getBulletStyle } from '../../utils/bullet-utils';
import { RangeBulletProps } from './range-bullet-props.interface';
import { RangeBulletState } from './range-bullet-state.interface';
import { bulletStyles } from './styles';

export default class RangeBullet extends Component<
  RangeBulletProps,
  RangeBulletState
> {
  public state: RangeBulletState = {
    hovered: false,
    focused: false,
    active: false,
  };

  lastPos: number | undefined;
  currentPos: number | undefined;

  style: Object = {
    ...bulletStyles.handle,
    left: this.props.offset,
  };

  componentDidMount(): void {
    document.addEventListener('mousemove', this.onBulletMouseMove);
    document.addEventListener('mouseup', this.onBulletMouseUp);
  }

  componentDidUpdate(props: RangeBulletProps): void {
    this.style = getBulletStyle(bulletStyles, this.state, props);
  }

  onMouseEnterBullet = (): void => {
    this.style = getBulletStyle(
      bulletStyles,
      { ...this.state, ...{ hovered: true } },
      this.props
    );
    this.setState({
      hovered: true,
    });
  };

  onMouseLeaveBullet = (): void => {
    this.style = getBulletStyle(
      bulletStyles,
      { ...this.state, ...{ hovered: false } },
      this.props
    );
    this.setState({
      hovered: false,
    });
  };

  onMouseDownBullet = (
    event: React.MouseEvent<HTMLDivElement, MouseEvent>
  ): void => {
    this.moveStart(event, event.pageX);
  };

  onBulletMouseMove = (event: MouseEvent): void => {
    if (this.state.active || this.state.activeCount === 0) {
      this.move(event, event.pageX);
    }
    this.setState({
      activeCount: 1,
    });
  };

  onBulletMouseUp = (event: MouseEvent): void => {
    if (this.state.active) {
      this.move(event, event.pageX);
      this.moveEnd();
    }
  };

  moveStart = (
    event: MouseEvent | React.MouseEvent<HTMLDivElement, MouseEvent>,
    position: number
  ): void => {
    event.preventDefault();
    event.stopPropagation();
    this.style = getBulletStyle(
      bulletStyles,
      { ...this.state, ...{ active: true } },
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
    let direction;
    let distance;
    let incrementFactor;

    direction = position - this.lastPos!;
    distance = position - this.currentPos!;
    incrementFactor = 1;

    const increment = direction > 0 ? 1 : -1;
    if (direction * distance > (factor || 1) * step) {
      handleMove(increment);
      this.currentPos! += incrementFactor * factor * step * increment;
    }
    this.lastPos = position;
  };

  moveEnd = (): void => {
    this.style = getBulletStyle(
      bulletStyles,
      { ...this.state, ...{ active: false } },
      this.props
    );
    this.setState({
      active: false,
      activeCount: 0,
    });
  };

  onFocus = (): void => {
    this.style = getBulletStyle(
      bulletStyles,
      { ...this.state, ...{ focused: true } },
      this.props
    );
    this.setState({
      focused: true,
    });
  };

  onBlur = (): void => {
    this.style = getBulletStyle(
      bulletStyles,
      { ...this.state, ...{ focused: false } },
      this.props
    );
    this.setState({
      focused: false,
    });
  };

  render(): Object {
    return (
      <div
        ref={this.props.handleRef}
        style={this.style}
        onFocus={this.onFocus}
        onBlur={this.onBlur}
        onMouseEnter={this.onMouseEnterBullet}
        onMouseLeave={this.onMouseLeaveBullet}
        onMouseDown={this.onMouseDownBullet}
      ></div>
    );
  }
}
