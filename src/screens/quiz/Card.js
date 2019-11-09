import React from 'react'
import { View, Text } from 'react-native'
import { windowWidth } from '../../../utils/windowDimensions'

const Card = (props) => {
    return (
      <View style={styles.container}>
        <Text>{props.data.question}</Text>
      </View>
    )
};

const styles = {
  container: {
    height: 300,
    width: windowWidth/1.5,
    alignItems:'center',
    backgroundColor:'#C4C4C4',
    shadowColor: 'grey',
    shadowOffset: { width: 0, height: 7 },
    shadowOpacity: 0.8,
    shadowRadius: 2,
    borderWidth: .5,
    borderRadius: 10,
    borderColor: "#C4C4C4"
  }
};

export default Card
