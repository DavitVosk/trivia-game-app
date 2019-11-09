import React, { Component } from 'react'
import { Text, View, TouchableOpacity, SafeAreaView } from 'react-native';
import { connect } from 'react-redux'

import { fetchQuestions } from '../../redux/actions/FetchQuestions';
import CardsList  from './CardsList';
import Loading  from './Loading';
import {getSafeIntolerant} from '../../../utils/objects'

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
    const questionCategory = getSafeIntolerant(() => this.props.questions[this.state.responses.length].category);
    if(this.props.isLoading) return <Loading />;

    return (
      <SafeAreaView style={styles.container}>
        <View style={{flex:1}}>
          <Text>{questionCategory}</Text>
        </View>

        <View style={{flex: 3, justifyContent:'center'}}>
          <CardsList questions={this.props.questions} responses={this.state.responses}/>
        </View>

        <View>
          <Text>{this.state.responses.length+1}/{this.props.questions.length}</Text>
        </View>

        <View style={{flexDirection:'row', flex: 1}}>
          <TouchableOpacity style={{flex:1, alignItems:'center'}} onPress={()=>this.questionAnswered('False')}><Text>FALSE</Text></TouchableOpacity>
          <TouchableOpacity style={{flex:1, alignItems:'center'}} onPress={()=>this.questionAnswered('True')}><Text>TRUE</Text></TouchableOpacity>
        </View>
      </SafeAreaView>
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
