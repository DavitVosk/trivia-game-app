import React, { Component } from 'react'
import { Text, View } from 'react-native'
import { connect } from 'react-redux';

import { fetchQuestions } from '../redux/actions/FetchQuestions'


class Home extends Component {
  componentDidMount() {
    this.props.fetchQuestions()
  }

  static navigationOptions = {
    header: null
  };

  render() {
    return (
      <View style={styles.container}>

      </View>
    )
  }
}

const styles = {
  container: {}
}

export default connect(null, { fetchQuestions })(Home)
