import React from "react";
import Home from "./screens/home";
import { store } from "./redux";
import { Provider } from "react-redux";

export default class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <Home />
      </Provider>
    );
  }
}
