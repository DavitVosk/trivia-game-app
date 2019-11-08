import React from "react";
import { Provider } from "react-redux";
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

import Home from "./src/screens/home";
import Quiz from "./src/screens/quiz";
import Results from "./src/screens/results";
import { store } from "./src/redux";

const RootStack = createStackNavigator({
  Home: {
    screen: Home,
  },
  Quiz: {
    screen: Quiz,
  },
  Results: {
    screen: Results,
  },
});

let Navigation = createAppContainer(RootStack);

export default class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <Navigation />
      </Provider>
    );
  }
}
