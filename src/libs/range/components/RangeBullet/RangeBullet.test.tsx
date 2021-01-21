import { cleanup, render } from '@testing-library/react';
import TestRenderer from 'react-test-renderer';
import RangeBullet from './RangeBullet';

afterEach(cleanup);

const setup = () => {
  const utils = render(
    <RangeBullet
      factor={1}
      offset="100"
      step={{ left: 0, right: 50 }}
      ariaLabel="range bullet"
    />
  );
  const rangeBullet = utils.getByLabelText('range bullet');
  return {
    rangeBullet,
    ...utils,
  };
};

describe('<RangeBullet/> tests', () => {
  test('renders correctly', () => {
    const { rangeBullet } = setup();

    expect(rangeBullet).toBeInTheDocument();
  });

  test('state initialized correctly', () => {
    const { rangeBullet } = setup();

    expect(rangeBullet).toBeInTheDocument();
  });

  test('shoud match snapshot', () => {
    const testRendererJson = TestRenderer.create(
      <RangeBullet factor={1} offset="100" step={{ left: 0, right: 50 }} />
    ).toJSON();
    expect(testRendererJson).toMatchSnapshot();
  });
});
