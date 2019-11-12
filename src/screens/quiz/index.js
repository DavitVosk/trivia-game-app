import React, { Component } from 'react'
import { Text, View, TouchableOpacity, SafeAreaView, ImageBackground } from 'react-native';
import { connect } from 'react-redux'

import { fetchQuestions } from '../../redux/actions/FetchQuestions';
import CardsList from './CardsList';
import Loading from './Loading';
import LinearGradientButton from '../../../CommonComponents/LinearGradientButton'
import LinearBorderGradientButton from '../../../CommonComponents/LinearBorderGradientButton'

class Quiz extends Component {
  constructor (props) {
    super(props);
    this.state = { responses: [] };
  }

  componentDidMount () {
    this.props.fetchQuestions()
  }

  static navigationOptions = {
    header: null
  };

  questionAnswered = (answer) => {
    this.setState({ responses: [...this.state.responses, answer] }, () => {
      if (this.state.responses.length === this.props.questions.length) {
        this.props.navigation.navigate('Results', {
          responses: this.state.responses
        })
      }
    })
  };

  render () {
    if (this.props.isLoading) return <Loading />;
    return (
      <ImageBackground source={require('../../images/background_2.png')} style={styles.container}>
        <SafeAreaView style={styles.container}>
          <View style={{ flex: 4, justifyContent: 'center' }}>
            <CardsList questions={this.props.questions} responses={this.state.responses} />
          </View>

          <View style={{ flexDirection: 'row', flex: 1, marginHorizontal: 30 }}>
            <LinearBorderGradientButton
              containerStyle={{ width: '50%', marginRight: 5 }}
              btnText={'FALSE'}
              onPress={() => this.questionAnswered('False')} />
            <LinearGradientButton
              containerStyle={{ width: '50%' }}
              btnText={'TRUE'}
              onPress={() => this.questionAnswered('True')} />
          </View>
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

const mapStateToProps = ({ questions }) => {
  return {
    questions: questions.data,
    isLoading: questions.isLoading,
    errorMessage: questions.error_message
  }
};

export default connect(mapStateToProps, { fetchQuestions })(Quiz)
