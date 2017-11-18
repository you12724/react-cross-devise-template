import React, { Component } from 'react';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import { Stack, Scene, Router } from 'react-native-router-flux';

import Root from './containers/Root';
import Weather from './containers/Weather';
import rootReducer from '../../logic/reducers';
import store from '../../logic/store';

// const store = createStore(rootReducer);

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Router>
          <Stack key="home">
            <Scene key="root" component={Root} title="ルート" />
            <Scene key="weather" component={Weather} title="天気予報" />
          </Stack>
        </Router>
      </Provider>
    );
  }
}

export default App;
