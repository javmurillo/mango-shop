import { cleanup, render } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import TestRenderer from 'react-test-renderer';
import { RangeTrack } from './RangeTrack';

afterEach(cleanup);

const setup = () => {
  const utils = render(<RangeTrack ariaLabel="track" />);
  const input = utils.getByLabelText('track');
  return {
    input,
    ...utils,
  };
};

describe('<RangeTrack/> tests', () => {
  test('renders correctly', () => {
    const { input } = setup();
    expect(input).toBeInTheDocument();
  });

  test('shoud match snapshot', () => {
    const tree = TestRenderer.create(<RangeTrack />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
