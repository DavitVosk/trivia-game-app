import React from 'react'
import { View, Text, ActivityIndicator } from 'react-native'

const Loading = (props) => {
    return (
      <View style={styles.container}>
        <Text style={styles.text}>Loading...</Text>
        <ActivityIndicator size="large" color="#FF637B" />
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
    fontSize: 20,
  }
};

export default Loading
