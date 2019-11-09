import React, { Component } from 'react'
import { Text, View, ImageBackground, Image, Animated, Easing, } from 'react-native'

class Home extends Component {
  constructor() {
    super();
    this.animatedValue = new Animated.Value(0);
  }

  static navigationOptions = {
    header: null
  };

  componentDidMount() {
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
    ).start();
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

    return (
      <ImageBackground source={require('../../images/background.png')} style={styles.container}>
        <View style={{alignItems:'center', justifyContent:'center'}}>
          <View style={{ flexDirection: 'row' }}>
            <Animated.Image source={require('../../images/logo_1piece.png')} style={[styles.logoPiece, {opacity: logo_1piece_opacity}]} />
            <Animated.Image source={require('../../images/logo_2piece.png')} style={[styles.logoPiece, {opacity: logo_2piece_opacity}]} />
          </View>

          <Animated.Image resizeMode={'contain'} source={require('../../images/logo_5piece.png')} style={[styles.questionMark, {opacity: logo_5piece_opacity}]} />

          <View style={{ flexDirection: 'row' }}>
            <Animated.Image source={require('../../images/logo_4piece.png')} style={[styles.logoPiece, {opacity: logo_4piece_opacity}]} />
            <Animated.Image source={require('../../images/logo_3piece.png')} style={[styles.logoPiece, {opacity: logo_3piece_opacity}]} />
          </View>
        </View>
      </ImageBackground>
    )
  }
}

const styles = {
  container: { height: '100%', width: '100%', alignItems: 'center', justifyContent: 'center' },
  logoPiece: { height: 50, width: 50 },
  questionMark: {height: 30, width: 30, position:'absolute'}
}

export default Home
