import { cleanup, render, screen } from '@testing-library/react';
import TestRenderer from 'react-test-renderer';
import { CustomSpinner } from './Spinner';

afterEach(cleanup);

const setup = (error: boolean) => {
  const utils = render(<CustomSpinner message="Test error" error={error} />);
  const spinner = utils.getByLabelText('spinner');
  return {
    spinner,
    ...utils,
  };
};

describe('<NotFound/> tests', () => {
  test('renders correctly with error', () => {
    const { spinner } = setup(true);
    expect(spinner).toBeInTheDocument();
  });

  test('renders correctly with no error', () => {
    const { spinner } = setup(false);
    expect(spinner).toBeInTheDocument();
  });

  test('shoud match snapshot', () => {
    const testRendererJsonError = TestRenderer.create(
      <CustomSpinner message="Test error" error={true} />
    ).toJSON();
    expect(testRendererJsonError).toMatchSnapshot();
    const testRendererJsonNoError = TestRenderer.create(
      <CustomSpinner message="Test error" error={false} />
    ).toJSON();
    expect(testRendererJsonNoError).toMatchSnapshot();
  });
});
