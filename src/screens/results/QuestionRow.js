import React, { Component } from 'react'
import { Text, View } from 'react-native'
import { Ionicons } from '@expo/vector-icons';

import {windowWidth} from '../../../utils/windowDimensions'

class QuestionRow extends Component {
  render() {
    const {question_data, question_index} = this.props;
    const is_answered_correctly = question_data.answered_correctly;
    const icon_name = is_answered_correctly ? 'md-checkmark-circle' : 'ios-remove-circle-outline';
    const icon_color = is_answered_correctly ? 'green' : 'red';

    return (
      <View style={styles.container}>
       <View style={styles.view1}>
         <Text>{question_index+1}. {question_data.question}</Text>
       </View>

        <View style={styles.view2}>
          <Ionicons name={icon_name} size={32} color={icon_color} />
       </View>
      </View>
    )
  }
}

const styles = {
  container: {
    backgroundColor:'white',
    width: windowWidth - 40,
    flexDirection:'row',
    minHeight: 50
  },
  view1: {
    flex: 3,
    borderColor: 'gray',
    borderWidth: .5,
    justifyContent:'center',
    padding: 20
  },
  view2: {
    flex: 1,
    borderColor: 'gray',
    borderWidth: .5,
    justifyContent:'center',
    alignItems:'center'
  }
};

export default QuestionRow
