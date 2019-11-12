import React, { Component } from 'react'
import { Text, View } from 'react-native'

import {windowWidth} from '../../../utils/windowDimensions'

class QuestionRow extends Component {
  render() {
    const {question, question_index} = this.props;

    console.log('question', question)

    return (
      <View style={styles.container}>
       <View style={styles.view1}>
         <Text>{question_index+1}. {question}</Text>
       </View>

        <View style={styles.view2}>
         <Text>hi</Text>
       </View>
      </View>
    )
  }
}

const styles = {
  container: {
    backgroundColor:'white',
    width: windowWidth -40,
    flexDirection:'row',
    minHeight: 50
  },
  view1: {
    flex: 3,
    borderColor: 'gray',
    borderWidth: .5,
    justifyContent:'center',
    padding: 10
  },
  view2: {
    flex: 1,
    borderColor: 'gray',
    borderWidth: .5,
    justifyContent:'center'
  }
};

export default QuestionRow
