import { cleanup, render } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import RangeInput from './RangeInput';
import TestRenderer from 'react-test-renderer';

afterEach(cleanup);

const setup = () => {
  const utils = render(
    <RangeInput
      value={50}
      max={100}
      min={0}
      rangeKey="start"
      ariaLabel="range-input"
    />
  );
  const input = utils.getByLabelText('range-input');
  return {
    input,
    ...utils,
  };
};

describe('<RangeInput/> tests', () => {
  test('renders correctly', () => {
    const { input } = setup();

    expect(input).toBeInTheDocument();
  });

  test('value cant exceed max', () => {
    const { input } = setup();

    userEvent.type(input, '10');

    expect(input).toHaveValue(50);
  });

  test('should allow numbers', () => {
    const { input } = setup();

    userEvent.clear(input);
    userEvent.type(input, '10');

    expect(input).toHaveValue(10);
  });

  test('should not allow letters nor symbols', () => {
    const { input } = setup();

    userEvent.clear(input);
    userEvent.type(input, 'test€');

    expect(input).toHaveValue(null);
  });

  test('should allow to delete input', () => {
    const { input } = setup();

    userEvent.type(input, '{backspace}');

    expect(input).toHaveValue(5);
  });

  test('should be disable', () => {
    const input = render(
      <RangeInput
        value={50}
        max={100}
        min={0}
        rangeKey="start"
        ariaLabel="range-input"
        disabled={true}
      />
    ).getByLabelText('range-input');

    expect(input).toBeDisabled();
  });

  test('shoud match snapshot', () => {
    const testRendererJson = TestRenderer.create(
      <RangeInput
        value={50}
        max={100}
        min={0}
        rangeKey="start"
        ariaLabel="range-input"
      />
    ).toJSON();
    expect(testRendererJson).toMatchSnapshot();
  });
});
