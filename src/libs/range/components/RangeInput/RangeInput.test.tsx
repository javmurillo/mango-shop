import { cleanup, render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import RangeInput from './RangeInput';

const setup = () => {
  const utils = render(
    <RangeInput value={50} rangeKey="start" ariaLabel="range-input" />
  );
  const input = utils.getByLabelText('range-input');
  return {
    input,
    ...utils,
  };
};

describe('InvisibleInput operations', () => {
  test('should allow numbers', () => {
    const { input } = setup();

    userEvent.clear(input);
    userEvent.type(input, '12');

    expect(input).toHaveValue(12);
  });
});
