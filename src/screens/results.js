import React, { Component } from 'react'
import { Text, View, SafeAreaView, ImageBackground } from 'react-native'
import { connect } from 'react-redux'

class Results extends Component {
  static navigationOptions = {
    header: null,
    gesturesEnabled: false
  };

  render() {
    const correctAnsweredQuestions=this.props.questions.filter((q,index)=>{
      return q.correct_answer === this.props.navigation.state.params.responses[index]
    });

    const nonCorrectAnsweredQuestions=this.props.questions.filter((q,index)=>{
      return q.correct_answer !== this.props.navigation.state.params.responses[index]
    });

    return (
      <ImageBackground source={require('../images/background_2.png')} style={styles.container}>
        <SafeAreaView style={styles.container}>
          <Text>You scored {correctAnsweredQuestions.length}/{this.props.questions.length}</Text>
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
  }
};

const mapStateToProps = ({questions}) => {
  return {
    questions: questions.data,
  }
};

export default connect(mapStateToProps)(Results)
