import React, { Component } from 'react'
import { Text, View } from 'react-native'
import { Ionicons } from '@expo/vector-icons';

import styles from './styles'

class QuestionRow extends Component {
  render() {
    const {question_data, question_index} = this.props;
    const is_answered_correctly = question_data.answered_correctly;
    const icon_name = is_answered_correctly ? 'md-checkmark-circle' : 'ios-remove-circle-outline';
    const icon_color = is_answered_correctly ? 'green' : 'red';

    return (
      <View style={styles.rowContainer}>
       <View style={styles.rowFirstView}>
         <Text>{question_index+1}. {question_data.question}</Text>
       </View>

        <View style={styles.rowSecondView}>
          <Ionicons name={icon_name} size={32} color={icon_color} />
       </View>
      </View>
    )
  }
}

export default QuestionRow
