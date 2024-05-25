import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import store from './redux/store';
import { Provider } from 'react-redux';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>
        <App />
  </Provider>
);

reportWebVitals();


/*Store Import: The Redux store is imported from its configuration file.
Provider Component: The Provider component from react-redux is used to make the Redux store available to all components in the application.
ReactDOM.createRoot: A root for the React application is created and used to render the application.
Application Rendering: The application is rendered into the root DOM node, wrapped with the Provider to enable Redux state management throughout the app.
This setup ensures that your React application is integrated with Redux, allowing for centralized state management and making the Redux store accessible to any component in the application.*/