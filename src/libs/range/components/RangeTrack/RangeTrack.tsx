import React, { Component } from 'react';
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

export default class RangeTrack extends Component<RangeTrackProps> {
  render(): JSX.Element {
    const { trackRef } = this.props;
    return <StyleTrack ref={trackRef} />;
  }
}
