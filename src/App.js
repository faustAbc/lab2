import React, { Component } from 'react';
import Layout from "containers/layout";
import { initialState, StateProvider, reducer } from 'state';
import MainPage from 'pages/main';

class App extends Component {
  render() {
    return (
      <StateProvider initialState={initialState} reducer={reducer}>
        <Layout>
          <MainPage />
        </Layout>
      </StateProvider>
    );
  }
}

export default App;
