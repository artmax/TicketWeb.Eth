import "babel-polyfill";
import React from "react";
import { Provider } from 'react-redux';
import { ReactDOM, render } from "react-dom";
import { BrowserRouter, Route } from "react-router-dom";
import App from "./components/App";
import "./styles/styles.css";
import store from './store/store';

// enable hot module replacement;
// eslint-disable-next-line
if (DEVELOPMENT) {
  if (module.hot) {
    module.hot.accept(App, () =>
      setImmediate(() => {
        ReactDOM.unmountComponentAtNode(document.getElementById("root"));
        render();
      })
    );
  }
}

render(
  <BrowserRouter>
    <Provider store={store}>
     <Route path="/" component={App} />
    </Provider>
  </BrowserRouter>,
  document.getElementById("root")
);
