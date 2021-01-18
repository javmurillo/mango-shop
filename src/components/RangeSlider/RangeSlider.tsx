import React, { Component } from 'react';
import Track from '../Track/Track';
import RangeBullet from '../RangeBullet/RangeBullet';
import styled from 'styled-components';
import { RangeSliderProps } from './range-slider.props.interface';
import { RangeSliderState } from './range-slider.state.interface';

const StyledRangeSlider = styled.div`
  position: relative;
  width: 100%;
  height: 34px;
`;

export default class RangeSlider extends Component<
  RangeSliderProps,
  RangeSliderState
> {
  public state: RangeSliderState;
  public factor = 1;
  public trackLeft: number | undefined;
  public start: number | undefined;
  public end: number | undefined;
  public trackOffset = 0;

  constructor(props: RangeSliderProps) {
    super(props);
    const start = props.rangeValue.start;
    const end = props.rangeValue.end;
    this.state = {
      start,
      end,
    };
  }

  static getDerivedStateFromProps(
    props: RangeSliderProps,
    state: RangeSliderState
  ): {
    start: number;
    end: number;
  } | null {
    if (
      props.rangeValue.start !== state.start ||
      props.rangeValue.end !== state.end
    ) {
      return {
        start: props.rangeValue && props.rangeValue.start,
        end: props.rangeValue && props.rangeValue.end,
      };
    }
    return null;
  }

  _setTrackDimensions = (track: HTMLDivElement): void => {
    if (track) {
      const trackLength = track.clientWidth;
      this.setState({
        trackLength,
      });
      this.trackOffset = Number(
        track.offsetParent && (track.offsetParent as any).offsetLeft
      );
    }
  };

  _setHandleSize = (bullet: HTMLDivElement | null): void => {
    if (bullet) {
      const handleSize = bullet.clientWidth;
      if (!this.state.handleSize) {
        this.setState({
          handleSize,
        });
      }
    }
  };

  _startHandleMove = (increase: number): void => {
    const { step } = this.props;
    const { start } = this.state;
    const newStart = this._getStartValue(start + increase * step);
    if (newStart !== start) {
      this._updateState(newStart, this.state.end);
      this._onChange(newStart, this.state.end);
    }
  };

  _endHandleMove = (increase: number): void => {
    const { step } = this.props;
    const { end } = this.state;
    const newEnd = this._getEndValue(end + increase * step);
    if (newEnd !== end) {
      this._updateState(this.state.start, newEnd);
      this._onChange(this.state.start, newEnd);
    }
  };

  _getStepValue = (position: number) => {
    const { step } = this.props;
    const remainder = position % step;
    if (remainder < step / 2) {
      return position - remainder;
    }
    return position - remainder + step;
  };

  _getStartValue(start: number): number {
    let startValue = start;
    if (startValue < this.props.min) {
      startValue = this.props.min;
    } else if (startValue > this.state.end) {
      startValue = this.state.end;
    }
    return startValue;
  }

  _getEndValue(end: number): number {
    let endValue = end;
    if (endValue > this.props.max) {
      endValue = this.props.max;
    } else if (endValue < this.state.start) {
      endValue = this.state.start;
    }
    return endValue;
  }

  _updateState = (start: number, end: number): void => {
    this.setState({
      start,
      end,
    });
  };

  _onChange = (start: number, end: number): void => {
    if (this.props.onChange) {
      this.props.onChange({
        start,
        end,
      });
    }
  };

  render(): Object {
    let startValue = 0;
    let endValue = 0;
    let percentageFactor = 1;
    const { handleSize, trackLength, start, end } = this.state;
    const { min, max, step } = this.props;
    this.start = start;
    this.end = end;
    if (trackLength && handleSize) {
      const calculatedTrackWidth = trackLength - handleSize;
      this.factor = calculatedTrackWidth / (max - min);
      if (this.start < min || this.end < min) {
        startValue = min;
      } else if (this.start > Math.min(this.end, max)) {
        startValue = Math.min(this.end, max);
      } else {
        startValue = this.start;
      }
      startValue = (startValue - min) * this.factor;
      if (this.end > max || this.start > max) {
        endValue = max;
      } else if (this.end < Math.max(start, min)) {
        endValue = Math.max(start, min);
      } else {
        endValue = this.end;
      }
      endValue = (endValue - min) * this.factor;
      percentageFactor = 100 / trackLength;
    }

    return (
      <StyledRangeSlider>
        <Track trackRef={this._setTrackDimensions} />
        <RangeBullet
          offset={`${startValue * percentageFactor}%`}
          handleRef={this._setHandleSize}
          handleMove={this._startHandleMove}
          factor={this.factor}
          step={step}
        />
        <RangeBullet
          offset={`${endValue * percentageFactor}%`}
          handleRef={this._setHandleSize}
          handleMove={this._endHandleMove}
          factor={this.factor}
          step={step}
        />
      </StyledRangeSlider>
    );
  }
}
