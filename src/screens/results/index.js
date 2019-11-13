import React, { Component } from 'react'
import { Text, View, SafeAreaView, ImageBackground, FlatList, Platform } from 'react-native'
import { connect } from 'react-redux'

import List from './List'
import LinearGradientButton from '../../../CommonComponents/LinearGradientButton'
import styles from './styles'

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

const mapStateToProps = ({ questions }) => {
  return {
    questions: questions.data,
  }
};

export default connect(mapStateToProps)(Results)
