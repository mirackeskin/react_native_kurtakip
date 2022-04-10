import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const ColumnNameBar = () => {
  return (
    <View style={styles.MainWrapper}>
      <View style={{width:"50%",justifyContent:"center",alignItems:"flex-start"}}>
          <Text style={{color:"aliceblue"}}> Currency Name</Text>
      </View>
      <View style={{width:"50%",flexDirection:"row",justifyContent: "space-evenly",alignItems:"center"}}>
          <Text style={{color:"aliceblue"}}>Buying</Text>
          <Text style={{color:"aliceblue"}}>Seling</Text>
      </View>
    </View>
  )
}

export default ColumnNameBar

const styles = StyleSheet.create({
    MainWrapper:{
        width:"100%",
        height:"5%",
        backgroundColor:"transparent",
        flexDirection:"row"
    }
})