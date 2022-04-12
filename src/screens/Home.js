import { StyleSheet, Text, View,SafeAreaView } from 'react-native'
import React from 'react'
import Header from '../components/Header'
import ColumnNameBar from '../components/ColumnNameBar'
import CurrencyList from '../components/CurrencyList'

const Home = () => {
  return (
    <SafeAreaView style={styles.background}>
      <Header></Header>
      <ColumnNameBar></ColumnNameBar>
      <CurrencyList></CurrencyList>
      
    </SafeAreaView>
  )
}

export default Home

const styles = StyleSheet.create({
    background:{
        backgroundColor:"#2B292F",
        flex:1
    }
})




