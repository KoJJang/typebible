import logo from './logo.svg';
import './App.css';
import {Provider} from "react-redux";

import rootReducer from "./reducers";
import {applyMiddleware, createStore, compose} from "redux";
import {composeWithDevTools} from "redux-devtools-extension";
import {logger} from "redux-logger";
import Home from "./components/Home"


const enhancer = process.env.NODE_ENV === "production" ?
    compose(applyMiddleware()) : composeWithDevTools(applyMiddleware(logger));

const store = createStore(rootReducer, enhancer);

function App() {
  return (
      <Provider store={store}>
        <div className="App">
          <Home/>
        </div>
      </Provider>
  );
}

export default App;
