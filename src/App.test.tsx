// app.test.js
import '@testing-library/jest-dom/extend-expect';
import { render, screen } from '@testing-library/react';
import { createMemoryHistory } from 'history';
import React from 'react';
import { Provider } from 'react-redux';
import { Router } from 'react-router-dom';
import App from './App';
import { store } from './store/app.store';
import { renderWithProviderAndRouter } from './utils/test.utils';

describe('<App/> tests', () => {
  test('renders App', () => {
    const history = createMemoryHistory();
    renderWithProviderAndRouter(<App />, {
      history,
    });
  });

  test('exercise1 route working with active class', () => {
    const history = createMemoryHistory();
    history.push('/exercise1');
    const utils = renderWithProviderAndRouter(<App />, {
      history,
    });
    const exercise1Element = utils.getByLabelText('exercise1');
    const exercise2Element = utils.getByLabelText('exercise2');

    expect(exercise1Element).toHaveClass('nav-link active');
    expect(exercise2Element).toHaveClass('nav-link');
  });

  test('exercise2 route working with active class', () => {
    const history = createMemoryHistory();
    history.push('/exercise2');
    const utils = renderWithProviderAndRouter(<App />, {
      history,
    });
    const exercise1Element = utils.getByLabelText('exercise1');
    const exercise2Element = utils.getByLabelText('exercise2');

    expect(exercise1Element).toHaveClass('nav-link');
    expect(exercise2Element).toHaveClass('nav-link active');
  });

  test('not found page shows an alert', () => {
    const history = createMemoryHistory();
    history.push('/not-found');
    const utils = renderWithProviderAndRouter(<App />, {
      history,
    });
    const alert = screen.getByRole('alert');
    expect(alert).toHaveClass('fade alert alert-dark show');
  });
});
