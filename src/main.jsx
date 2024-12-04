
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { Provider } from 'react-redux';
import store from './store/store.js';

createRoot(document.getElementById('root')).render(
  // I removed strict mode here as it renders the component twice and it fetches the API twice in dev mode
    <Provider store={store}>
      <App />
    </Provider>
)
