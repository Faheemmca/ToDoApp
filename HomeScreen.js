import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { TabRouter } from '@react-navigation/native'

const HomeScreen = ({route, navigation}) => {
  return (
    <View>
      <Text>Welcome,{route.params.name}</Text>
      <Text>Email: {route.params.email}</Text>
      <Text>Mobile Number: {route.params.mobile}</Text>
    </View>
  )
}

export default HomeScreen

const styles = StyleSheet.create({})