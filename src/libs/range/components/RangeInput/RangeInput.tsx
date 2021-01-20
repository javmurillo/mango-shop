import React, { FC, useEffect, useState } from 'react';
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
  margin-right: 1rem;
`;

/**
 * RangeIpunt component. Cursor will show as not allowed if the input is disabled.
 * Each change will update its parent state.
 * @param props RangeInputProps
 */
const RangeInput: FC<RangeInputProps> = (props: RangeInputProps) => {
  const [internalValue, setValue] = useState(props.value.toString());

  useEffect(() => {
    setValue(props.value.toString());
  }, [props.value]);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;
    setValue(value);

    if (!isNaN(Number(value))) {
      if (props.onChange) {
        props.onChange(event, props.rangeKey);
      }
    }
  };

  return (
    <StyledInputWrapper>
      <StyledInput
        aria-label={props.ariaLabel}
        type="number"
        value={internalValue}
        onChange={ev => {
          handleChange(ev);
        }}
        style={props.disabled ? { cursor: 'not-allowed' } : {}}
        disabled={props.disabled}
      />
      <StyledEuro>€</StyledEuro>
    </StyledInputWrapper>
  );
};

export default RangeInput;
