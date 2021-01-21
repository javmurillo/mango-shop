// setupTests.tsx

import React from 'react';
import { Router } from 'react-router-dom';
import { render } from '@testing-library/react';
import { createMemoryHistory, MemoryHistory } from 'history';
import { Provider } from 'react-redux';
import { store } from '../store/app.store';

interface RenderWithRouterProps {
  route?: string;
  history?: MemoryHistory;
}

export const renderWithProviderAndRouter = (
  ui: React.ReactNode,
  {
    route = '/',
    history = createMemoryHistory({ initialEntries: [route] }),
  }: RenderWithRouterProps = {}
) => {
  return {
    ...render(
      <Provider store={store}>
        <Router history={history}>{ui}</Router>
      </Provider>
    ),
    history,
  };
};
