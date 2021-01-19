import React from 'react';
import {
  BrowserRouter as Router,
  Redirect,
  Route,
  Switch,
} from 'react-router-dom';
import styled from 'styled-components';
import './App.css';
import { MangoNavbar } from './libs/navbar/components/Navbar/Navbar';
import FixedValuesRange from './mango-shop/containers/FixedValuesRange/FixedValuesRange';
import NormalRange from './mango-shop/containers/NormalRange/NormalRange';

const StyledContainer = styled.main`
  width: 75%;
  margin: 1rem auto;
`;

function App() {
  return (
    <div>
      <Router>
        <MangoNavbar />
        <StyledContainer>
          <Switch>
            <Route path="/exercise1">
              <NormalRange />
            </Route>
            <Route path="/exercise2">
              <FixedValuesRange />
            </Route>
            <Redirect exact from="/" to="/exercise1" />
          </Switch>
        </StyledContainer>
      </Router>
    </div>
  );
}

export default App;
