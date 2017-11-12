import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';

import store from '../store';
import Root from '../views/web/containers/Root/Root';


render(
  <Provider store={store}>
    <Root />
  </Provider>,
  document.getElementById('app')
);
