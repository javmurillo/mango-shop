import React, { Component } from 'react';
import styled from 'styled-components';
import RangeInput from '../RangeInput/RangeInput';
import RangeSlider from '../RangeSlider/RangeSlider';
import { RangeProps } from './range-props.interface';
import { RangeState } from './range-state.interface';

const StyledMainRange = styled.div`
  width: 512px;
  text-align: center;
  display: flex;
  flex-direction: row;
  align-items: center;
  margin-top: 16px;
`;

/**
 * Range class
 */
export default class Range extends Component<RangeProps, RangeState> {
  public state: RangeState; // Range state

  constructor(props: RangeProps) {
    super(props);
    let { min, max, step } = props;
    if (Array.isArray(step)) {
      min = step[0];
      max = step[step.length - 1];
    }
    // Initializing state
    this.state = {
      min,
      max,
      rangeValue: {
        start: min,
        end: max,
      },
    };
  }

  /**
   * Updates the state and calls the [onChange] function.
   * @param rangeValue Rage of the current values
   */
  private onChange = (rangeValue: { start: number; end: number }): void => {
    this.setState({ rangeValue });
    this.props.onChange(rangeValue.start, rangeValue.end);
  };

  /**
   * Updates the state given the value from the input and the [key] value: starting or ending input.
   * @param event React.ChangeEvent<HTMLInputElement>
   * @param key Starting or Ending input.
   */
  private handleInputChange = (
    event: React.ChangeEvent<HTMLInputElement>,
    key: 'start' | 'end'
  ): void => {
    const target = event.target;
    const newValue = Number(target.value);
    const { min, max, rangeValue } = this.state;
    if (key === 'start') {
      if (!newValue) {
        this.patchState(key, min);
      } else if (newValue >= min && newValue <= rangeValue.end) {
        this.patchState(key, newValue);
      }
    } else if (key === 'end') {
      if (!newValue) {
        this.patchState(key, max);
      } else if (newValue <= max && newValue >= rangeValue.start) {
        this.patchState(key, newValue);
      }
    }
  };

  /**
   * Updates the state and calls the [onChange] function once finished.
   * @param event React.ChangeEvent<HTMLInputElement>
   * @param key Starting or Ending input.
   */
  private patchState = (key: 'start' | 'end', value: number): void => {
    this.setState(
      previousState => ({
        ...previousState,
        rangeValue: {
          ...previousState.rangeValue,
          [key]: value,
        },
      }),
      () => {
        this.props.onChange(
          this.state.rangeValue.start,
          this.state.rangeValue.end
        );
      }
    );
  };

  render(): JSX.Element {
    return (
      <StyledMainRange>
        <RangeInput
          onChange={this.handleInputChange}
          value={this.state.rangeValue.start}
          rangeKey="start"
          disabled={this.props.disableInputs}
        ></RangeInput>
        <RangeSlider
          min={this.state.min}
          max={this.state.max}
          step={this.props.step}
          rangeValue={this.state.rangeValue}
          onChange={this.onChange}
        />
        <RangeInput
          onChange={this.handleInputChange}
          value={this.state.rangeValue.end}
          rangeKey="end"
          disabled={this.props.disableInputs}
        ></RangeInput>
      </StyledMainRange>
    );
  }
}