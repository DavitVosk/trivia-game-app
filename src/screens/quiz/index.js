import React, { Component } from 'react'
import { Text, View, TouchableOpacity, SafeAreaView, ImageBackground } from 'react-native';
import { connect } from 'react-redux'

import { fetchQuestions } from '../../redux/actions/FetchQuestions';
import CardsList  from './CardsList';
import Loading  from './Loading';

class Quiz extends Component {
  constructor (props) {
    super(props);
    this.state = { responses:[] };
  }

  componentDidMount() {
    this.props.fetchQuestions()
  }

  static navigationOptions = {
    header: null
  };

  questionAnswered=(answer) => {
    this.setState({ responses: [...this.state.responses, answer]}, () => {
      if(this.state.responses.length === this.props.questions.length){
        this.props.navigation.navigate('Results', {
          responses: this.state.responses
        })
      }
    })
  };

  render() {
    return (
      <ImageBackground source={require('../../images/background.png')} style={styles.container}>
        {
          this.props.isLoading ? <Loading /> :
            <SafeAreaView style={styles.container}>
              <View style={{flex: 3, justifyContent:'center'}}>
                <CardsList questions={this.props.questions} responses={this.state.responses}/>
              </View>

              <View style={{flexDirection:'row', flex: 1}}>
                <TouchableOpacity style={{flex:1, alignItems:'center'}} onPress={()=>this.questionAnswered('False')}><Text>FALSE</Text></TouchableOpacity>
                <TouchableOpacity style={{flex:1, alignItems:'center'}} onPress={()=>this.questionAnswered('True')}><Text>TRUE</Text></TouchableOpacity>
              </View>
            </SafeAreaView>
        }
      </ImageBackground>
    )
  }
}

const styles = {
  container: {
    flex: 1,
    justifyContent:'center',
    alignItems:'center'
  }
};

const mapStateToProps = ({questions}) => {
  return {
    questions: questions.data,
    isLoading: questions.isLoading,
    errorMessage: questions.error_message
  }
};

export default connect(mapStateToProps, {fetchQuestions})(Quiz)
