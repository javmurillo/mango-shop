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

  setTrackDimensions = (track: HTMLDivElement): void => {
    if (track) {
      const trackLength = track.clientWidth;
      this.setState({
        trackLength,
      });
    }
  };

  setHandleSize = (bullet: HTMLDivElement | null): void => {
    if (bullet) {
      const handleSize = bullet.clientWidth;
      if (!this.state.handleSize) {
        this.setState({
          handleSize,
        });
      }
    }
  };

  startHandleMove = (increase: number): void => {
    const { step } = this.props;
    const { start } = this.state;
    const nextStart = start + increase * step;
    const updatedStart = this.getStartValue(nextStart);
    if (updatedStart !== start) {
      this.updateState(updatedStart, this.state.end);
      this.onChange(updatedStart, this.state.end);
    }
  };

  endHandleMove = (increase: number): void => {
    const { step } = this.props;
    const { end } = this.state;
    const nextEnd = end + increase * step;
    const updatedEnd = this.getEndValue(nextEnd);
    if (updatedEnd !== end) {
      this.updateState(this.state.start, updatedEnd);
      this.onChange(this.state.start, updatedEnd);
    }
  };

  getStartValue(nextStart: number): number {
    if (nextStart < this.props.min) {
      return this.props.min;
    } else if (nextStart > this.state.end) {
      return this.state.end;
    }
    return nextStart;
  }

  getEndValue(nextEnd: number): number {
    if (nextEnd > this.props.max) {
      return this.props.max;
    } else if (nextEnd < this.state.start) {
      return this.state.start;
    }
    return nextEnd;
  }

  updateState = (start: number, end: number): void => {
    this.setState({
      start,
      end,
    });
  };

  onChange = (start: number, end: number): void => {
    this.props.onChange({
      start,
      end,
    });
  };

  render(): Object {
    let startValue = 0;
    let endValue = 0;
    let percentageFactor = 1;
    const { handleSize, trackLength, start, end } = this.state;
    const { min, max, step } = this.props;
    if (trackLength && handleSize) {
      const calculatedTrackWidth = trackLength - handleSize;
      this.factor = calculatedTrackWidth / (max - min);
      startValue = (start - min) * this.factor;
      endValue = (end - min) * this.factor;
      percentageFactor = 100 / trackLength;
    }
    return (
      <StyledRangeSlider>
        <Track trackRef={this.setTrackDimensions} />
        <RangeBullet
          offset={`${startValue * percentageFactor}%`}
          handleRef={this.setHandleSize}
          handleMove={this.startHandleMove}
          factor={this.factor}
          step={step}
        />
        <RangeBullet
          offset={`${endValue * percentageFactor}%`}
          handleRef={this.setHandleSize}
          handleMove={this.endHandleMove}
          factor={this.factor}
          step={step}
        />
      </StyledRangeSlider>
    );
  }
}
