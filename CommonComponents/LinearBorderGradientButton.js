import React, { Component } from 'react'
import { Text, View, TouchableOpacity } from 'react-native'
import { LinearGradient } from 'expo-linear-gradient';

class LinearBorderGradientButton extends Component {
  render () {
    const { containerStyle, onPress, locations, gradientColors, btnStyle, btnText, btnTextStyle } = this.props;
    return (
      <TouchableOpacity style={[styles.container, containerStyle]} onPress={onPress}>
        <LinearGradient
          locations={locations}
          colors={gradientColors}
          style={[styles.btnStyle, btnStyle]}>
          <View style={{height: 58, backgroundColor: 'white', width: '98%', borderRadius: 5, justifyContent:'center'}}>
            <Text style={[styles.text, btnTextStyle]}>{btnText}</Text>
          </View>
        </LinearGradient>
      </TouchableOpacity>
    )
  }
}

const styles = {
  container: { width: '90%' },
  btnStyle: {
    height: 60,
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'rgb(78,28,190)',
    borderRadius: 5,
  },
  text: {
    color: 'black',
    fontSize: 25,
    alignSelf: 'center'
  }
};

LinearBorderGradientButton.defaultProps = {
  locations: [0, 1],
  gradientColors: ["#00C8C8", "#FF637B"]
};

export default LinearBorderGradientButton
