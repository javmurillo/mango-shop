import { cleanup, render } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import TestRenderer from 'react-test-renderer';
import RangeSlider from './RangeSlider';

afterEach(cleanup);

const rangeValue = { start: 0, end: 100 };

const setup = () => {
  const utils = render(
    <RangeSlider
      min={0}
      max={100}
      step={5}
      rangeValue={rangeValue}
      ariaLabel="range-slider"
    />
  );
  const input = utils.getByLabelText('range-slider');
  return {
    input,
    ...utils,
  };
};

describe('<RangeSlider/> tests', () => {
  test('renders correctly', () => {
    const { input } = setup();

    expect(input).toBeInTheDocument();
  });

  test('state initialized correctly', () => {
    const { input } = setup();

    expect(input).toBeInTheDocument();
  });

  test('shoud match snapshot', () => {
    const tree = TestRenderer.create(
      <RangeSlider
        min={0}
        max={100}
        step={5}
        rangeValue={rangeValue}
        ariaLabel="range-slider"
      />
    ).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
