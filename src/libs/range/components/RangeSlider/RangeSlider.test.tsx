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
  const rangeSlider = utils.getByLabelText('range-slider');
  return {
    rangeSlider,
    ...utils,
  };
};

describe('<RangeSlider/> tests', () => {
  test('renders correctly', () => {
    const { rangeSlider } = setup();

    expect(rangeSlider).toBeInTheDocument();
  });

  test('state initialized correctly', () => {
    const { rangeSlider } = setup();

    expect(rangeSlider).toBeInTheDocument();
  });

  test('shoud match snapshot', () => {
    const testRendererJson = TestRenderer.create(
      <RangeSlider
        min={0}
        max={100}
        step={5}
        rangeValue={rangeValue}
        ariaLabel="range-slider"
      />
    ).toJSON();
    expect(testRendererJson).toMatchSnapshot();
  });
});
