import { Provider } from 'react-redux'
import { createStore, applyMiddleware } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import { initializeApp } from 'firebase/app';
import { getDatabase } from "firebase/database";
import { ReactReduxFirebaseProvider } from "react-redux-firebase";

import firebaseConfig from '../config/firebase';
import allReducers from '../store/reducer';

import '../styles/index.sass';
import '../components/i18n';

function MyApp({ Component, pageProps }) {

  let database
  let app

  let store = createStore(allReducers,
    composeWithDevTools(applyMiddleware()))

  try {

    // Initialize Firebase
    app = initializeApp(firebaseConfig)

    // Initialize Realtime Database 
    database = getDatabase(app)

  } catch (err) {
    console.log('MyApp error', err)
  }

  const rrfProps = {
    firebase: database,
    config: {
      userProfile: "home"
    },
    dispatch: store.dispatch
  };

  return (
    <Provider store={store}>
      <ReactReduxFirebaseProvider {...rrfProps}>
        <Component {...pageProps} />
      </ReactReduxFirebaseProvider>
    </Provider>
  )
}

export default MyApp


