import React, { Component } from 'react'
import { Text, View, SafeAreaView, ImageBackground, FlatList, Platform } from 'react-native'
import { connect } from 'react-redux'
import { isIphoneX } from 'react-native-iphone-x-helper'

import List from './List'
import LinearGradientButton from '../../../CommonComponents/LinearGradientButton'
import { windowWidth } from '../../../utils/windowDimensions'
import { isIOS } from '../../../utils/OS-types'

class Results extends Component {
  static navigationOptions = {
    header: null,
    gesturesEnabled: false
  };

  render () {
    return (
      <ImageBackground source={require('../../images/background_2.png')} style={styles.container}>
        <SafeAreaView style={{ flex: 1 }}>
          <View style={{ flex: 4 }}>
            <List questions={this.props.questions} navigation={this.props.navigation} />
          </View>

          <LinearGradientButton
            containerStyle={styles.btnContainer}
            btnText={'PLAY AGAIN'} onPress={() => this.props.navigation.navigate('Home')} />
        </SafeAreaView>
      </ImageBackground>
    )
  }
}

const styles = {
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  result: {
    color: '#726393',
    fontSize: 24,
    textAlign: 'center'
  },
  btnContainer: {
    width: windowWidth - 40,
    marginTop: isIOS ? 60 : 100,
    ...Platform.select({
      ios: {
        paddingBottom: isIphoneX() ? 20 : 40
      },
      android: {
        paddingBottom: 40
      },
    }),
  }
};

const mapStateToProps = ({ questions }) => {
  return {
    questions: questions.data,
  }
};

export default connect(mapStateToProps)(Results)
