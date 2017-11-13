import React, { Component } from 'react';
import { createStore } from 'redux';
import { Provider } from 'react-redux';

import Root from './containers/Root';
import rootReducer from '../../logic/reducers';

const store = createStore(rootReducer);

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Root />
      </Provider>
    );
  }
}

export default App;
