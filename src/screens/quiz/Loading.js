import React from 'react'
import { View, Text, ActivityIndicator } from 'react-native'

const Loading = (props) => {
    return (
      <View style={styles.container}>
        <Text style={styles.text}>Loading...</Text>
        <ActivityIndicator size="large" color="#00695C" />
      </View>
    )
};

const styles = {
  container: {
    flex: 1,
    alignItems:'center',
    justifyContent:'center'
  },
  text: {
    fontWeight: 'bold',
    fontSize: 17,
  }
};

export default Loading