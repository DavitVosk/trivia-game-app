import React, { Component } from 'react'
import { Text, View, TouchableOpacity, SafeAreaView, ImageBackground, Platform } from 'react-native';
import { connect } from 'react-redux'

import { fetchQuestions, answerToQuestion } from '../../redux/actions/Questions';
import CardsList from './CardsList';
import Loading from './Loading';
import LinearGradientButton from '../../../CommonComponents/LinearGradientButton'
import LinearBorderGradientButton from '../../../CommonComponents/LinearBorderGradientButton'
import styles from './styles'

class Quiz extends Component {
  constructor (props) {
    super(props);
    this.state = { question_index: 0 };
  }

  componentDidMount () {
    this.props.fetchQuestions()
  }

  static navigationOptions = {
    header: null
  };

  questionAnswered = (answer) => {
    this.props.answerToQuestion({ answer, question_index: this.state.question_index });
    this.setState({ question_index: this.state.question_index+1 }, () => {
      if (this.state.question_index === this.props.questions.length) {
        this.props.navigation.navigate('Results')
      }
    })
  };

  render () {
    if (this.props.isLoading) return <Loading />;
    return (
      <ImageBackground source={require('../../images/background_2.png')} style={styles.container}>
        <SafeAreaView style={styles.container}>
          <View style={{ flex: 4, justifyContent: 'center' }}>
            <CardsList questions={this.props.questions} question_index={this.state.question_index} />
          </View>

          <View style={styles.btnContainer}>
            <LinearBorderGradientButton
              containerStyle={{ width: '50%', marginRight: 5, alignSelf:'flex-end' }}
              btnText={'FALSE'}
              onPress={() => this.questionAnswered('False')} />
            <LinearGradientButton
              containerStyle={{ width: '50%', alignSelf:'flex-end' }}
              btnText={'TRUE'}
              onPress={() => this.questionAnswered('True')} />
          </View>
        </SafeAreaView>
      </ImageBackground>
    )
  }
}

const mapStateToProps = ({ questions }) => {
  return {
    questions: questions.data,
    isLoading: questions.isLoading,
    errorMessage: questions.error_message
  }
};

export default connect(mapStateToProps, { fetchQuestions, answerToQuestion })(Quiz)
