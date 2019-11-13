import React, { Component } from 'react'
import { Text, View, FlatList } from 'react-native'
import { BackHandler } from 'react-native';

import ResultRow from './ResultRow'
import styles from './styles'

class List extends Component {
  componentWillMount() {
    BackHandler.addEventListener('hardwareBackPress', this.handleBackButtonClick);
  }

  componentWillUnmount() {
    BackHandler.removeEventListener('hardwareBackPress', this.handleBackButtonClick);
  }

  handleBackButtonClick = () => {
    this.props.navigation.navigate('Home')
    return true;
  };

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
        style={styles.listContainer}
        data={questions}
        keyExtractor={(item, index) => item.question}
        renderItem={({ item, index }) =>
           <ResultRow question_data={item} question_index={index} />
        }
        extraData={this.props}
        ListHeaderComponent={renderHeader}
      />
    )
  }
}

export default List
