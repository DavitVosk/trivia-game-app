import React from "react";
import { Provider } from "react-redux";
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import * as Font from 'expo-font';

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
  componentDidMount() {
    Font.loadAsync({
      Montserrat: require('./assets/fonts/Montserrat-Bold.ttf'),
      Roboto: require('./assets/fonts/Roboto-Regular.ttf')
    });
  }

  render() {
    return (
      <Provider store={store}>
        <Navigation />
      </Provider>
    );
  }
}
