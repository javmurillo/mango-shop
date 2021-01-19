import React, { Component } from 'react';
import styled from 'styled-components';
import { RangeInputProps } from './range-input-props.interface';

const StyledInput = styled.input`
  border: none;
  text-align: right;
  outline: none;
  width: 50px;
  font-weight: bold;
`;

const StyledInputWrapper = styled.div`
  display: flex;
`;

const StyledEuro = styled.span`
  font-weight: bold;
`;
export default class RangeInput extends Component<RangeInputProps> {
  render(): JSX.Element {
    return (
      <StyledInputWrapper style={{ marginRight: '2rem' }}>
        <StyledInput
          type="number"
          value={this.props.value}
          onChange={ev => {
            this.props.onChange(ev, this.props.rangeKey);
          }}
          disabled={this.props.disabled}
        />
        <StyledEuro>€</StyledEuro>
      </StyledInputWrapper>
    );
  }
}
