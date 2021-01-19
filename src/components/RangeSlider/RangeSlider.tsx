import React, { Component } from 'react';
import Track from '../RangeTrack/RangeTrack';
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
    this.state = {
      start,
      end,
    };
    let startLeftStep = step;
    let startRightStep = step;
    let endLeftStep = step;
    let endRightStep = step;
    if (Array.isArray(step)) {
      this.startIndex = 0;
      this.endIndex = step.length - 1;
      startLeftStep = 0;
      startRightStep = step[this.startIndex! + 1] - step[this.startIndex!];
      endLeftStep = step[this.endIndex!] - step[this.endIndex! - 1];
      endRightStep = 0;
    }
    this.startSteps = {
      left: startLeftStep as number,
      right: startRightStep as number,
    };
    this.endSteps = {
      left: endLeftStep as number,
      right: endRightStep as number,
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

  updateIndexes(increase: number, step: number[], key: 'start' | 'end'): void {
    if (key === 'start') {
      if (increase === 1 && this.startIndex! < step.length - 1) {
        this.startIndex!++;
      } else if (increase === -1 && this.startIndex! > 0) {
        this.startIndex!--;
      }
    } else if (key === 'end') {
      if (increase === 1 && this.endIndex! < step.length - 1) {
        this.endIndex!++;
      } else if (increase === -1 && this.endIndex! > 0) {
        this.endIndex!--;
      }
    }
  }

  updateSteps(step: number[], key: 'start' | 'end'): void {
    if (key === 'start') {
      const startLeftStep = step[this.startIndex!] - step[this.startIndex! - 1];
      const startRightStep =
        step[this.startIndex! + 1] - step[this.startIndex!];
      this.startSteps = {
        left: !isNaN(startLeftStep) ? startLeftStep : 0,
        right: !isNaN(startRightStep) ? startRightStep : 0,
      };
    } else if (key === 'end') {
      const endRightStep = step[this.endIndex! + 1] - step[this.endIndex!];
      const endLeftStep = step[this.endIndex!] - step[this.endIndex! - 1];
      this.endSteps = {
        left: !isNaN(endLeftStep) ? endLeftStep : 0,
        right: !isNaN(endRightStep) ? endRightStep : 0,
      };
    }
  }

  getStartStep(
    increase: number,
    step: RangeSliderProps['step'],
    startSteps: {
      left: number;
      right: number;
    }
  ): number {
    if (Array.isArray(step)) {
      return increase === 1 ? startSteps.right : startSteps.left;
    }
    return step;
  }

  getEndStep(
    increase: number,
    step: RangeSliderProps['step'],
    endSteps: {
      left: number;
      right: number;
    }
  ): number {
    if (Array.isArray(step)) {
      return increase === 1 ? endSteps.right : endSteps.left;
    }
    return step;
  }

  startHandleMove = (increase: number): void => {
    const { start } = this.state;
    const calculatedStep = this.getStartStep(
      increase,
      this.props.step,
      this.startSteps
    );
    if (Array.isArray(this.props.step)) {
      this.updateIndexes(increase, this.props.step, 'start');
      this.updateSteps(this.props.step as number[], 'start');
    }
    const nextStart = start + increase * calculatedStep!;
    const updatedStart = this.getStartValue(
      nextStart,
      this.props.min,
      this.state.end
    );
    if (updatedStart !== start) {
      this.updateState(updatedStart, this.state.end);
      this.onChange(updatedStart, this.state.end);
    }
  };

  endHandleMove = (increase: number): void => {
    const { end } = this.state;
    const calculatedStep = this.getEndStep(
      increase,
      this.props.step,
      this.endSteps
    );
    if (Array.isArray(this.props.step)) {
      this.updateIndexes(increase, this.props.step, 'end');
      this.updateSteps(this.props.step as number[], 'end');
    }
    const nextEnd = end + increase * calculatedStep!;
    const updatedEnd = this.getEndValue(
      nextEnd,
      this.props.max,
      this.state.start
    );
    if (updatedEnd !== end) {
      this.updateState(this.state.start, updatedEnd);
      this.onChange(this.state.start, updatedEnd);
    }
  };

  getStartValue(nextStart: number, min: number, end: number): number {
    if (nextStart < min) {
      return min;
    } else if (nextStart > end) {
      return end;
    }
    return nextStart;
  }

  getEndValue(nextEnd: number, max: number, start: number): number {
    if (nextEnd > max) {
      return max;
    } else if (nextEnd < start) {
      return start;
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
    const parsedStart = Number(start.toFixed(2));
    const parsedEnd = Number(end.toFixed(2));
    this.props.onChange({
      start: parsedStart,
      end: parsedEnd,
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
