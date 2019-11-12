import React, { Component } from 'react'
import { Text, View, FlatList } from 'react-native'

import { isIOS } from '../../../utils/OS-types'
import QuestionRow from './QuestionRow'

class List extends Component {
  render () {
    const { questions } = this.props;
    const correctAnsweredQuestions = questions.reduce((total, q) => {
      if (q.answered_correctly) return total + 1;
      return total
    }, 0);

    const renderHeader = () => {
      return (
        <View style={styles.header}>
          <Text style={styles.result}>You scored</Text>
          <Text style={styles.result}>{correctAnsweredQuestions}/{questions.length}</Text>
        </View>
      )
    };

    return (
      <FlatList
        style={styles.container}
        data={questions}
        keyExtractor={(item, index) => item.question}
        renderItem={({ item, index }) =>
           <QuestionRow question_data={item} question_index={index} />
        }
        extraData={this.props}
        ListHeaderComponent={renderHeader}
      />
    )
  }
}

const styles = {
  container: {
    flex: 1,
    marginTop: isIOS ? 60 : 100,
    borderWidth: .5,
    borderRadius: 10,
    borderColor: "#C4C4C4",
    backgroundColor:'white'
  },
  result: {
    color: '#726393',
    fontSize: 24,
    textAlign: 'center'
  },
  header: {
    marginVertical: 10
  }
};

export default List
