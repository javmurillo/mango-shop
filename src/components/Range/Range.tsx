import React, { Component } from 'react';
import styled from 'styled-components';
import RangeInput from '../RangeInput/RangeInput';
import RangeSlider from '../RangeSlider/RangeSlider';
import { RangeProps } from './range-props.interface';
import { RangeState } from './range-state.interface';

const StyledMainRange = styled.div`
  width: 33%;
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
    const { rangeValue } = this.state;
    return (
      <StyledMainRange>
        <RangeInput
          onChange={this.handleChange}
          value={this.state.rangeValue.start}
          rangeKey="start"
        ></RangeInput>
        <StyledWrapperRange>
          <RangeSlider
            min={this.state.min}
            max={this.state.max}
            step={5}
            rangeValue={rangeValue}
            onChange={this.onChange}
          />
        </StyledWrapperRange>
        <RangeInput
          onChange={this.handleChange}
          value={this.state.rangeValue.end}
          rangeKey="end"
        ></RangeInput>
      </StyledMainRange>
    );
  }
}
