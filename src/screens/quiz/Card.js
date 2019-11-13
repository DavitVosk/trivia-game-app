import React from 'react'
import { View, Text } from 'react-native'

import styles from './styles'

const Card = (props) => {
  const {question_index, questions, data}= props;
  const {category, question}= data;
  const questionsCount=questions.length;
  const questionNumber = question_index+1>questionsCount ? questionsCount:question_index+1;

  return (
      <View style={styles.cardContainer}>
        <Text style={styles.category}>{category}</Text>

        <View style={styles.questionContainer}>
          <Text style={styles.question}>{question}</Text>
        </View>

        <View>
          <Text>{questionNumber}/{questionsCount}</Text>
        </View>
      </View>
    )
};

export default Card
