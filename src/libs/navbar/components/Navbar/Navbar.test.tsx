import { cleanup, render, screen } from '@testing-library/react';
import { createMemoryHistory } from 'history';
import { Router } from 'react-router-dom';
import TestRenderer from 'react-test-renderer';
import { renderWithProviderAndRouter } from '../../../../utils/test.utils';
import { MangoNavbar } from './Navbar';

afterEach(cleanup);

const setup = () => {
  const utils = renderWithProviderAndRouter(
    <MangoNavbar aria-label="navbar" />
  );
  const navbar = utils.getByLabelText('navbar');
  return {
    navbar,
    ...utils,
  };
};

describe('<Navbar/> tests', () => {
  test('renders correctly', () => {
    const { navbar } = setup();
    expect(navbar).toBeInTheDocument();
  });

  test('shoud match snapshot', () => {
    const testRendererJson = TestRenderer.create(
      <Router history={createMemoryHistory({ initialEntries: ['/'] })}>
        <MangoNavbar aria-label="navbar" />
      </Router>
    ).toJSON();
    expect(testRendererJson).toMatchSnapshot();
  });

  test('mango logo is present', () => {
    setup();
    const mangoLogo = screen.getByLabelText('mango logo');
    expect(mangoLogo).toBeInTheDocument();
  });

  test('github logo is present', () => {
    setup();
    const mangoLogo = screen.getByLabelText('github logo');
    expect(mangoLogo).toBeInTheDocument();
  });
});
