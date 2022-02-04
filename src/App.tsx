import { Provider } from 'react-redux';
import './App.css';
import { store } from './redux/configureStore';

import AppComponent from './components/App'

function App() {
  return (
      <Provider store={store}>
        <AppComponent />
      </Provider>
  );
}

export default App;
