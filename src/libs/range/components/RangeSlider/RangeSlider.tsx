import React, { Component } from 'react';
import styled from 'styled-components';
import RangeBullet from '../RangeBullet/RangeBullet';
import { RangeTrack } from '../RangeTrack/RangeTrack';
import { RangeSliderProps } from './range-slider.props.interface';
import { RangeSliderState } from './range-slider.state.interface';

const StyledRangeSlider = styled.div`
  position: relative;
  width: 100%;
  height: 34px;
`;

/**
 * RangeSlider class
 */
export default class RangeSlider extends Component<
  RangeSliderProps,
  RangeSliderState
> {
  public state: RangeSliderState; // Component's state
  public factor = 1; // Factor to calculate the bullets positions
  public startSteps: {
    // Object to store each start bullet step: left and right.
    left: number;
    right: number;
  };
  public endSteps: {
    // Object to store each start bullet step: left and right.
    left: number;
    right: number;
  };
  public startIndex = 0; // Start bullet index position
  public endIndex = 0; // End bullet index position

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
      startRightStep = step[this.startIndex + 1] - step[this.startIndex];
      endLeftStep = step[this.endIndex] - step[this.endIndex - 1];
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

  /**
   * Updates the state with the current track length.
   * @param track HTMLDivElement
   */
  setTrackDimensions = (track: HTMLDivElement): void => {
    if (track) {
      const trackLength = track.clientWidth;
      this.setState({
        trackLength,
      });
    }
  };

  /**
   * Updates the state with the current handleSize.
   * @param bullet HTMLDivElement
   */
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

  /**
   * Updates the global properties startIndex and endIndex given the following parameters [increase], [step], [startIndex], [endIndex], [key].
   * @param increase 1 if right, -1 if left.
   * @param step Steps array.
   * @param startIndex Index of the starting bullet.
   * @param endIndex Index of the ending bullet.
   * @param key Starting or Ending bullet.
   */
  updateIndexes(
    increase: number,
    step: number[],
    startIndex: number,
    endIndex: number,
    key: 'start' | 'end'
  ): void {
    if (key === 'start') {
      if (increase === 1 && startIndex < step.length - 1) {
        this.startIndex++;
      } else if (increase === -1 && startIndex > 0) {
        this.startIndex--;
      }
    } else if (key === 'end') {
      if (increase === 1 && endIndex < step.length - 1) {
        this.endIndex++;
      } else if (increase === -1 && endIndex > 0) {
        this.endIndex--;
      }
    }
  }

  /**
   * Updates the global properties startSteps and endSteps given the following parameters [step], [startIndex], [endIndex], [key].
   * @param step Steps array.
   * @param startIndex Index of the starting bullet.
   * @param endIndex Index of the ending bullet.
   * @param key Starting or Ending bullet.
   */
  updateSteps(
    step: number[],
    startIndex: number,
    endIndex: number,
    key: 'start' | 'end'
  ): void {
    if (key === 'start') {
      const startLeftStep = step[startIndex] - step[startIndex - 1];
      const startRightStep = step[startIndex + 1] - step[startIndex];
      this.startSteps = {
        left: !isNaN(startLeftStep) ? startLeftStep : 0,
        right: !isNaN(startRightStep) ? startRightStep : 0,
      };
    } else if (key === 'end') {
      const endRightStep = step[endIndex + 1] - step[endIndex];
      const endLeftStep = step[endIndex] - step[endIndex - 1];
      this.endSteps = {
        left: !isNaN(endLeftStep) ? endLeftStep : 0,
        right: !isNaN(endRightStep) ? endRightStep : 0,
      };
    }
  }

  /**
   * @returns The next step for the starting bullet
   * @param increase 1 if right, -1 if left.
   * @param step Steps array.
   * @param startSteps Steps object for the starting bullet.
   */
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

  /**
   * @returns The next step for the ending bullet
   * @param increase 1 if right, -1 if left.
   * @param step Steps array.
   * @param endSteps Steps object for the ending bullet.
   */
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

  /**
   * Updates the state if the new start position differs from the current start position.
   * @param increase 1 if right, -1 if left.
   */
  startHandleMove = (increase: number): void => {
    const { start } = this.state;
    const calculatedStep = this.getStartStep(
      increase,
      this.props.step,
      this.startSteps
    );
    if (Array.isArray(this.props.step)) {
      this.updateIndexes(
        increase,
        this.props.step,
        this.startIndex,
        this.endIndex,
        'start'
      );
      this.updateSteps(
        this.props.step as number[],
        this.startIndex,
        this.endIndex,
        'start'
      );
    }
    const nextStart = start + increase * calculatedStep;
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

  /**
   * Updates the state if the new ending position differs from the current ending position.
   * @param increase 1 if right, -1 if left.
   */
  endHandleMove = (increase: number): void => {
    const { end } = this.state;
    const calculatedStep = this.getEndStep(
      increase,
      this.props.step,
      this.endSteps
    );
    if (Array.isArray(this.props.step)) {
      this.updateIndexes(
        increase,
        this.props.step,
        this.startIndex,
        this.endIndex,
        'end'
      );
      this.updateSteps(
        this.props.step as number[],
        this.startIndex,
        this.endIndex,
        'end'
      );
    }
    const nextEnd = end + increase * calculatedStep!;
    const updatedEnd = this.getEndValue(
      nextEnd,
      this.state.start,
      this.props.max
    );
    if (updatedEnd !== end) {
      this.updateState(this.state.start, updatedEnd);
      this.onChange(this.state.start, updatedEnd);
    }
  };

  /**
   * Returns the next start position. If it is higher than the [end], returns this one. If it is lower than the [min], returns this one.
   * @param nextStart Value of the next start bullet position.
   * @param min Current min value.
   * @param end Current ending value.
   */
  getStartValue(nextStart: number, min: number, end: number): number {
    if (nextStart < min) {
      return min;
    } else if (nextStart > end) {
      return end;
    }
    return nextStart;
  }

  /**
   * Returns the next end position. If it is higher than the [max], returns this one. If it is lower than the [start], returns this one.
   * @param nextStart Value of the next start bullet position.
   * @param start Current starting value.
   * @param max Current max value.
   */
  getEndValue(nextEnd: number, start: number, max: number): number {
    if (nextEnd > max) {
      return max;
    } else if (nextEnd < start) {
      return start;
    }
    return nextEnd;
  }

  /**
   * Updates the state given the [start] and [end] values.
   * @param start Current start value.
   * @param end Current end value.
   */
  updateState = (start: number, end: number): void => {
    this.setState({
      start,
      end,
    });
  };

  /**
   * Calls the onChange property.
   * @param start Current start value.
   * @param end Current end value.
   */
  onChange = (start: number, end: number): void => {
    const parsedStart = Number(start.toFixed(2));
    const parsedEnd = Number(end.toFixed(2));
    this.props.onChange({
      start: parsedStart,
      end: parsedEnd,
    });
  };

  render(): JSX.Element {
    let startValue = 0;
    let endValue = 0;
    let percentageFactor = 1;
    const { handleSize, trackLength, start, end } = this.state;
    const { min, max } = this.props;
    if (trackLength && handleSize) {
      // We get the track width
      const calculatedTrackWidth = trackLength - handleSize;
      // We get the factor given the track width and the max and min values.
      this.factor = calculatedTrackWidth / (max - min);
      // We calculate the new start and end value.
      startValue = (start - min) * this.factor;
      endValue = (end - min) * this.factor;
      percentageFactor = 100 / trackLength;
    }
    return (
      <StyledRangeSlider>
        <RangeTrack trackRef={this.setTrackDimensions} />
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
