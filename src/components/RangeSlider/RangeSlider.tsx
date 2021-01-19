import React, { Component } from 'react';
import Track from '../Track/Track';
import RangeBullet from '../RangeBullet/RangeBullet';
import styled from 'styled-components';
import { RangeSliderProps } from './range-slider.props.interface';
import { RangeSliderState } from './range-slider.state.interface';
import { parseConfigFileTextToJson } from 'typescript';

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
  public step: number | number[];
  public startSteps: {
    left: number;
    right: number;
  };
  public endSteps: {
    left: number;
    right: number;
  };
  public startIndex?: number;
  public endIndex?: number;

  constructor(props: RangeSliderProps) {
    super(props);
    const start = props.rangeValue.start;
    const end = props.rangeValue.end;
    const step = props.step;
    this.step = step;

    this.state = {
      start,
      end,
    };
    if (Array.isArray(step)) {
      this.startIndex = 0;
      this.endIndex = step.length - 1;
      this.startSteps = {
        left: 0,
        right: step[this.startIndex! + 1] - step[this.startIndex!],
      };
      this.endSteps = {
        left: step[this.endIndex!] - step[this.endIndex! - 1],
        right: 0,
      };
    } else {
      this.startSteps = {
        left: step,
        right: step,
      };
      this.endSteps = {
        left: step,
        right: step,
      };
    }
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

  updateIndexes(increase: number, key: 'start' | 'end'): void {
    if (key === 'start') {
      increase === 1 ? this.startIndex!++ : this.startIndex!--;
    } else if (key === 'end') {
      increase === 1 ? this.endIndex!++ : this.endIndex!--;
    }
  }

  updateSteps(step: number[], key: 'start' | 'end'): void {
    if (key === 'start') {
      this.startSteps = {
        left: step[this.startIndex!] - step[this.startIndex! - 1],
        right: step[this.startIndex! + 1] - step[this.startIndex!],
      };
    } else if (key === 'end') {
      this.endSteps = {
        left: step[this.endIndex!] - step[this.endIndex! - 1],
        right: step[this.endIndex! + 1] - step[this.endIndex!],
      };
    }
  }

  getStartStep(increase: number): number {
    if (Array.isArray(this.step)) {
      return increase === 1 ? this.startSteps?.right : this.startSteps?.left;
    }
    return this.step;
  }

  getEndStep(increase: number): number | undefined {
    if (Array.isArray(this.step)) {
      return increase === 1 ? this.endSteps?.right : this.endSteps?.left;
    }
    return this.step;
  }

  startHandleMove = (increase: number): void => {
    const { start } = this.state;
    const calculatedStep = this.getStartStep(increase);
    if (Array.isArray(this.step)) {
      this.updateIndexes(increase, 'start');
      this.updateSteps(this.step as number[], 'start');
    }
    const nextStart = start + increase * calculatedStep!;
    const updatedStart = this.getStartValue(nextStart);
    if (updatedStart !== start) {
      this.updateState(updatedStart, this.state.end);
      this.onChange(updatedStart, this.state.end);
    }
  };

  endHandleMove = (increase: number): void => {
    const { end } = this.state;
    const calculatedStep = this.getEndStep(increase);
    if (Array.isArray(this.step)) {
      this.updateIndexes(increase, 'end');
      this.updateSteps(this.step as number[], 'end');
    }

    const nextEnd = end + increase * calculatedStep!;
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
    const { min, max } = this.props;
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
          step={this.startSteps}
        />
        <RangeBullet
          offset={`${endValue * percentageFactor}%`}
          handleRef={this.setHandleSize}
          handleMove={this.endHandleMove}
          factor={this.factor}
          step={this.endSteps}
        />
      </StyledRangeSlider>
    );
  }
}
