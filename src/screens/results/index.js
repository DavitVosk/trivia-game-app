import React, { Component } from 'react'
import { Text, View, SafeAreaView, ImageBackground, FlatList } from 'react-native'
import { connect } from 'react-redux'

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
            containerStyle={{ width: windowWidth - 40, paddingBottom: 40, marginTop: isIOS ? 60 : 100 }}
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
  }
};

const mapStateToProps = ({ questions }) => {
  return {
    questions: questions.data,
  }
};

export default connect(mapStateToProps)(Results)
