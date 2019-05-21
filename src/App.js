import React, { Component } from 'react';
import Layout from "containers/layout";
import { initialState, StateProvider, reducer } from 'state';
import MainPage from 'pages/main';
import SomeContent from 'pages/someContent';
import NotFound from 'pages/notFound';
import AnotherContent from 'pages/anotherContent';
import There from 'pages/there';
import UsefulPlace from 'pages/usefulPlace';
import PlaceToGo from 'pages/placeToGo';
import { Route, BrowserRouter as Router, Switch } from 'react-router-dom';

class App extends Component {
  render() {
    return (
      <StateProvider initialState={initialState} reducer={reducer}>
        <Router>
          <Layout>
            <Switch>
              <Route exact path="/" component={MainPage} />
              <Route path="/some-content" component={SomeContent} />
              <Route path="/another-content" component={AnotherContent} />
              <Route path="/there" component={There} />
              <Route path="/place-to-go" component={PlaceToGo} />
              <Route path="/useful-place" component={UsefulPlace} />
              <Route component={NotFound} />
            </Switch>
          </Layout>
        </Router>
      </StateProvider>
    );
  }
}

export default App;
