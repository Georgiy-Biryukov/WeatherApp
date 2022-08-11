import ReactDOM from 'react-dom';
import { PersistGate } from 'redux-persist/integration/react';
import App from './App';
import { Provider } from 'react-redux';
import { persistor, store } from './store/store';
import { BrowserRouter } from 'react-router-dom';

ReactDOM.render(
  <BrowserRouter>
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <App />
      </PersistGate>
    </Provider>
  </BrowserRouter>,
  document.getElementById('root')
);
