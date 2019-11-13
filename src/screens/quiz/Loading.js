import React from 'react'
import { View, Text, ActivityIndicator } from 'react-native'

import styles from './styles'

const Loading = (props) => {
    return (
      <View style={styles.loadingContainer}>
        <Text style={styles.text}>Loading...</Text>
        <ActivityIndicator size="large" color="#FF637B" />
      </View>
    )
};

export default Loading
