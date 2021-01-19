import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from 'react-router-dom';
import styled from 'styled-components';
import './App.css';
import { MangoNavbar } from './components/Navbar/Navbar';
import FixedValuesRange from './containers/FixedValuesRange/FixedValuesRange';
import NormalRange from './containers/NormalRange/NormalRange';

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
