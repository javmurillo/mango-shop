import { cleanup, render, screen } from '@testing-library/react';
import { createMemoryHistory } from 'history';
import { Router } from 'react-router-dom';
import TestRenderer from 'react-test-renderer';
import { NotFound } from './NotFound';

afterEach(cleanup);

const setup = () => {
  const utils = render(<NotFound aria-label="not found" />);
  const navbar = utils.getByLabelText('not found');
  return {
    navbar,
    ...utils,
  };
};

describe('<NotFound/> tests', () => {
  test('renders correctly', () => {
    const { navbar } = setup();
    expect(navbar).toBeInTheDocument();
  });

  test('shoud match snapshot', () => {
    const testRendererJson = TestRenderer.create(
      <NotFound aria-label="not found" />
    ).toJSON();
    expect(testRendererJson).toMatchSnapshot();
  });

  test('not found alert is present', () => {
    setup();
    const mangoLogo = screen.getByLabelText('not found alert');
    expect(mangoLogo).toBeInTheDocument();
  });
});
