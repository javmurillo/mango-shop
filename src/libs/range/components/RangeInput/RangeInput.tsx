import React from 'react';
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

/**
 * RangeIpunt component. Cursor will show as not allowed if the input is disabled.
 * Each change will update its parent state.
 * @param props RangeInputProps
 */
export const RangeInput = (props: RangeInputProps) => {
  return (
    <StyledInputWrapper>
      <StyledInput
        type="number"
        value={props.value}
        onChange={ev => {
          props.onChange(ev, props.rangeKey);
        }}
        style={props.disabled ? { cursor: 'not-allowed' } : {}}
        disabled={props.disabled}
      />
      <StyledEuro style={{ marginRight: '1rem' }}>€</StyledEuro>
    </StyledInputWrapper>
  );
};
