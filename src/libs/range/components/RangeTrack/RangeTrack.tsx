import React from 'react';
import styled from 'styled-components';
import { RangeTrackProps } from './range-track-props.interface';

const StyleTrack = styled.div`
  position: absolute;
  width: 100%;
  margin-top: 11px;
  border-radius: 10%;
  background-color: white;
  border: 3px solid black;
`;

/**
 * RangeTrack component
 * @param props RangeTrackProps
 */
export const RangeTrack = (props: RangeTrackProps) => {
  return <StyleTrack ref={props.trackRef} aria-label={props.ariaLabel} />;
};
