import React, { Component } from 'react';
import styled from 'styled-components';
import { TrackProps } from './track-props.interface';

const StyleTrack = styled.div`
  position: absolute;
  width: 100%;
  margin-top: 11px;
  border-radius: 10%;
  background-color: white;
  border: 3px solid black;
`;

export default class Track extends Component<TrackProps> {
  render(): JSX.Element {
    const { trackRef } = this.props;
    return <StyleTrack ref={trackRef} />;
  }
}
