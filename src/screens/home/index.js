import React, { Component } from 'react'
import { Text, View, ImageBackground, Image, Animated, Easing, SafeAreaView, Platform } from 'react-native'
import { isIphoneX } from 'react-native-iphone-x-helper'

import LinearGradientButton from '../../../CommonComponents/LinearGradientButton'

class Home extends Component {
  constructor () {
    super();
    this.animatedValue = new Animated.Value(0);
    this.state = { animFinished: false }
  }

  static navigationOptions = {
    header: null
  };

  componentDidMount () {
    this.animate();
  }

  animate = () => {
    Animated.timing(
      this.animatedValue,
      {
        toValue: 1,
        duration: 1000,
        easing: Easing.linear,
      }
    ).start(() => {
      this.setState({ animFinished: true })
    });
  };

  render () {
    const logo_1piece_opacity = this.animatedValue.interpolate({
      inputRange: [0, .2],
      outputRange: [0, 1]
    });
    const logo_2piece_opacity = this.animatedValue.interpolate({
      inputRange: [0, .2, .4],
      outputRange: [0, 0, 1]
    });
    const logo_3piece_opacity = this.animatedValue.interpolate({
      inputRange: [0, .4, .6],
      outputRange: [0, 0, 1]
    });
    const logo_4piece_opacity = this.animatedValue.interpolate({
      inputRange: [0, .6, .8],
      outputRange: [0, 0, 1]
    });
    const logo_5piece_opacity = this.animatedValue.interpolate({
      inputRange: [0, .8, 1],
      outputRange: [0, 0, 1]
    });
    const bgImageSource = this.state.animFinished ? require('../../images/background_2.png') : require('../../images/background.png');

    return (
      <ImageBackground source={bgImageSource} style={styles.container}>
        {this.state.animFinished ?
          <SafeAreaView style={{ paddingVertical: 40 }}>
            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', paddingHorizontal: 16 }}>
              <View style={{ marginBottom: 30 }}>
                <Text style={styles.bigTitle}>Welcome to the</Text>
                <Text style={styles.bigTitle}>TRIVIA Challenge!</Text>
              </View>

              <View>
                <Text style={styles.smallTitle}>You will be presented with 10 TRUE or FALSE questions</Text>
                <Text style={styles.smallTitle}>Can you score 100%?</Text>
              </View>
            </View>

            <View style={styles.btnContainer}>
              <LinearGradientButton btnText={'BEGIN'} onPress={() => this.props.navigation.navigate('Quiz')} />
            </View>
          </SafeAreaView>
          :
          <View style={{ alignItems: 'center', justifyContent: 'center' }}>
            <View style={{ flexDirection: 'row' }}>
              <Animated.Image source={require('../../images/logo_1piece.png')}
                              style={[styles.logoPiece, { opacity: logo_1piece_opacity }]} />
              <Animated.Image source={require('../../images/logo_2piece.png')}
                              style={[styles.logoPiece, { opacity: logo_2piece_opacity }]} />
            </View>

            <Animated.Image resizeMode={'contain'} source={require('../../images/logo_5piece.png')}
                            style={[styles.questionMark, { opacity: logo_5piece_opacity }]} />

            <View style={{ flexDirection: 'row' }}>
              <Animated.Image source={require('../../images/logo_4piece.png')}
                              style={[styles.logoPiece, { opacity: logo_4piece_opacity }]} />
              <Animated.Image source={require('../../images/logo_3piece.png')}
                              style={[styles.logoPiece, { opacity: logo_3piece_opacity }]} />
            </View>
          </View>}
      </ImageBackground>
    )
  }
}

const styles = {
  container: { height: '100%', width: '100%', alignItems: 'center', justifyContent: 'center' },
  logoPiece: { height: 63, width: 63 },
  questionMark: { height: 36.33, width: 21.8, position: 'absolute' },
  bigTitle: {
    textAlign: 'center',
    fontSize: 32,
    fontFamily: 'Montserrat',
    color: '#7E768E',
    lineHeight: 35,
    fontWeight: '900'
  },
  smallTitle: { textAlign: 'center', fontSize: 28, fontFamily: 'Roboto', color: '#615E67' },
  btnContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'flex-end',
    ...Platform.select({
      ios: {
        paddingBottom: isIphoneX() ? 20 : 40
      },
      android: {
        paddingBottom: 0
      },
    }),
  }
};

export default Home
