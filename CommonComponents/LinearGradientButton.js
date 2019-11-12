import React, { Component } from 'react'
import { Text, TouchableOpacity } from 'react-native'
import { LinearGradient } from 'expo-linear-gradient';

class LinearGradientButton extends Component {
  render() {
    const {containerStyle, onPress, locations, gradientColors, btnStyle, btnText, btnTextStyle} = this.props;
    return (
      <TouchableOpacity style={[styles.container, containerStyle]} onPress={onPress}>
        <LinearGradient
          locations={locations}
          colors={gradientColors}
          style={[styles.btnStyle, btnStyle]}>
          <Text style={[styles.text, btnTextStyle]}>{btnText}</Text>
        </LinearGradient>
      </TouchableOpacity>
    )
  }
}

const styles = {
  container: {width: '90%'},
  btnStyle: {
    height: 60,
    width: '100%',
    alignItems:'center',
    justifyContent:'center',
    backgroundColor:'rgb(78,28,190)',
    borderRadius: 5
  },
  text: {
    color: 'white',
    fontSize: 25,
    alignSelf:'center'
  }
};

LinearGradientButton.defaultProps = {
  locations: [0,1],
  gradientColors: ["#00C8C8", "#FF637B"]
};

export default LinearGradientButton
