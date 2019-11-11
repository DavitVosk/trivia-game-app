import React from 'react'
import { View, Text } from 'react-native'
import { windowHeight, windowWidth } from '../../../utils/windowDimensions'
import { getSafeIntolerant } from '../../../utils/objects'


const Card = (props) => {
  const {responses, questions, data}= props;
  const {category, question}= data;
  const questionsCount=questions.length;
  const questionNumber = responses.length+1>questionsCount ? questionsCount:responses.length+1;
  return (
      <View style={styles.container}>
        <Text style={styles.category}>{category}</Text>

        <View style={{flex: 1, alignItems:'center', justifyContent:'center'}}>
          <Text style={styles.question}>{question}</Text>
        </View>

        <View>
          <Text>{questionNumber}/{questionsCount}</Text>
        </View>
      </View>
    )
};

const styles = {
  container: {
    height: windowHeight/2,
    width: windowWidth/1.2,
    alignItems:'center',
    backgroundColor:'#fff',
    shadowColor: 'grey',
    shadowOffset: { width: 0, height: 7 },
    shadowOpacity: 0.8,
    shadowRadius: 2,
    borderWidth: .5,
    borderRadius: 10,
    borderColor: "#C4C4C4",
    padding: 10
  },
  category: {
    color:'#BCBCBC',
    fontSize:18,
    textAlign:'center'
  },
  question: {
    color:'#726393',
    fontSize:24,
    textAlign:'center'
  }
};

export default Card

// import React, { Component } from 'react'
// import { Text, View } from 'react-native'
// import { windowHeight, windowWidth } from '../../../utils/windowDimensions'
// import { getSafeIntolerant } from '../../../utils/objects'
//
// class Card extends Component {
//   render() {
//     const {responses, questions, data}= this.props;
//     const {category, question}= data;
//     return (
//       <View style={styles.container}>
//         <Text style={styles.category}>{category}</Text>
//
//         <View style={{flex: 1, alignItems:'center', justifyContent:'center'}}>
//           <Text style={styles.question}>{question}</Text>
//         </View>
//
//         <View>
//           <Text>{getSafeIntolerant(() => responses.length+1)}/{getSafeIntolerant(() => questions.length)}</Text>
//           <Text>{1}/{10}</Text>
//         </View>
//       </View>
//     )
//   }
// }
//
// const styles = {
//   container: {
//     height: windowHeight/2,
//     width: windowWidth/1.2,
//     alignItems:'center',
//     backgroundColor:'#fff',
//     shadowColor: 'grey',
//     shadowOffset: { width: 0, height: 7 },
//     shadowOpacity: 0.8,
//     shadowRadius: 2,
//     borderWidth: .5,
//     borderRadius: 10,
//     borderColor: "#C4C4C4",
//     padding: 10
//   },
//   category: {
//     color:'#BCBCBC',
//     fontSize:18,
//     textAlign:'center'
//   },
//   question: {
//     color:'#726393',
//     fontSize:24,
//     textAlign:'center'
//   }
// };
//
//
// export default Card

