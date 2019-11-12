import React, { Component } from 'react'
import { Text, View, SafeAreaView, ImageBackground } from 'react-native'
import { connect } from 'react-redux'

import List from './List'

class Results extends Component {
  static navigationOptions = {
    header: null,
    gesturesEnabled: false
  };

  render() {
    const correctAnsweredQuestions=this.props.questions.reduce((total,q)=>{
      if(q.answered_correctly) return total+1;
      return total
    }, 0);

    return (
      <ImageBackground source={require('../../images/background_2.png')} style={styles.container}>
        <SafeAreaView>
          <Text style={styles.result}>You scored</Text>
          <Text style={styles.result}>{correctAnsweredQuestions}/{this.props.questions.length}</Text>
        </SafeAreaView>

        <List/>
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
  result:{
    color:'#726393',
    fontSize:24,
    textAlign:'center'
  }
};

const mapStateToProps = ({questions}) => {
  return {
    questions: questions.data,
  }
};

export default connect(mapStateToProps)(Results)
