import { cleanup, render } from '@testing-library/react';
import TestRenderer from 'react-test-renderer';
import Range from './Range';

afterEach(cleanup);

const setup = () => {
  const utils = render(<Range min={0} max={100} ariaLabel="range" step={5} />);
  const range = utils.getByLabelText('range');
  return {
    range,
    ...utils,
  };
};

describe('<RangeBullet/> tests', () => {
  test('renders correctly', () => {
    const { range } = setup();

    expect(range).toBeInTheDocument();
  });

  test('state initialized correctly', () => {
    const { range } = setup();

    expect(range).toBeInTheDocument();
  });

  test('shoud match snapshot', () => {
    const testRendererJson = TestRenderer.create(
      <Range min={0} max={100} ariaLabel="range" step={5} />
    ).toJSON();
    expect(testRendererJson).toMatchSnapshot();
  });
});
