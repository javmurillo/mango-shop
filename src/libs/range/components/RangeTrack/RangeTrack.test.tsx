import { cleanup, render } from '@testing-library/react';
import TestRenderer from 'react-test-renderer';
import { RangeTrack } from './RangeTrack';

afterEach(cleanup);

const setup = () => {
  const utils = render(<RangeTrack ariaLabel="track" />);
  const rangeTrack = utils.getByLabelText('track');
  return {
    rangeTrack,
    ...utils,
  };
};

describe('<RangeTrack/> tests', () => {
  test('renders correctly', () => {
    const { rangeTrack } = setup();
    expect(rangeTrack).toBeInTheDocument();
  });

  test('shoud match snapshot', () => {
    const testRendererJson = TestRenderer.create(<RangeTrack />).toJSON();
    expect(testRendererJson).toMatchSnapshot();
  });
});
