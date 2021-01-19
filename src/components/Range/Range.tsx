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

const StyledWrapperRange = styled.div`
  width: 75%;
`;

export default class Range extends Component<RangeProps, RangeState> {
  public state: RangeState = {
    rangeValue: {
      start: 0,
      end: 100,
    },
    min: 0,
    max: 100,
  };

  constructor(props: RangeProps) {
    super(props);
    const { min, max, step } = props;
    if (Array.isArray(step)) {
      const stepArray = step as number[];
      const minArray = stepArray[0];
      const maxArray = stepArray[stepArray.length - 1];
      this.state = {
        min: minArray,
        max: maxArray,
        rangeValue: {
          start: minArray,
          end: maxArray,
        },
      };
    } else {
      this.state = {
        min,
        max,
        rangeValue: {
          start: min,
          end: max,
        },
      };
    }
  }

  private onChange = (rangeValue: { start: number; end: number }): void => {
    this.setState({ rangeValue });
    this.props.onFilterArticles(rangeValue.start, rangeValue.end);
  };

  private handleChange = (
    event: React.ChangeEvent<HTMLInputElement>,
    key: 'start' | 'end'
  ): void => {
    const target = event.target;
    const newValue = Number(target.value);
    const { min, max, rangeValue } = this.state;
    if (key === 'start') {
      const canMoveStart =
        newValue >= 0 && newValue >= min && newValue <= rangeValue.end;
      if (canMoveStart) {
        this.patchState(key, newValue);
      }
    } else {
      const canMoveEnd =
        newValue && newValue <= max && newValue >= rangeValue.start;
      if (canMoveEnd) {
        this.patchState(key, newValue);
      }
    }
  };

  private patchState(key: 'start' | 'end', value: number): void {
    this.setState(
      previousState => ({
        ...previousState,
        rangeValue: {
          ...previousState.rangeValue,
          [key]: value,
        },
      }),
      () => {
        this.props.onFilterArticles(
          this.state.rangeValue.start,
          this.state.rangeValue.end
        );
      }
    );
  }

  render(): JSX.Element {
    return (
      <StyledMainRange>
        <RangeInput
          onChange={this.handleChange}
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
          onChange={this.handleChange}
          value={this.state.rangeValue.end}
          rangeKey="end"
          disabled={this.props.disableInputs}
        ></RangeInput>
      </StyledMainRange>
    );
  }
}
