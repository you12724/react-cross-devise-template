import React from 'react';
import { Provider } from 'react-redux';

import store from '../store';
import Root from '../views/web/containers/Root/Root';

const App = () => (
  <Provider store={store}>
    <Root />
  </Provider>
);

export default App;
