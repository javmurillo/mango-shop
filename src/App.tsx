import React from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';
import styled from 'styled-components';
import './App.css';
import { MangoNavbar } from './libs/navbar/components/Navbar/Navbar';
import { NotFound } from './libs/not-found/components/NotFound';
import FixedValuesRange from './mango-shop/containers/FixedValuesRange/FixedValuesRange';
import NormalRange from './mango-shop/containers/NormalRange/NormalRange';

const StyledContainer = styled.main`
  width: 75%;
  margin: 1rem auto;
`;

/**
 * Main app
 */
const App = (): JSX.Element => {
  return (
    <div>
      <MangoNavbar />
      <StyledContainer>
        <Switch>
          <Route exact path="/exercise1" component={NormalRange} />
          <Route exact path="/exercise2" component={FixedValuesRange} />
          <Route exact path="/not-found" component={NotFound} />
          {/* Root route redirects to exercise 1 */}
          <Redirect exact from="/" to="/exercise1" />
          <Redirect to="/not-found" />
        </Switch>
      </StyledContainer>
    </div>
  );
};

export default App;
