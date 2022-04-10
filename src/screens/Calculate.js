import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { useRoute } from '@react-navigation/native';

const Calculate = (props) => {
  const Route=useRoute();
  return (
    <View>
      <Text>{Route.params.buying}</Text>
    </View>
  )
}

export default Calculate

const styles = StyleSheet.create({})