import { StyleSheet, Text, View, SafeAreaView,TouchableOpacity,Dimensions} from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native'

const {width,height}=Dimensions.get("screen")

const Header = () => {
    const Navigation=useNavigation();
  return (
    <SafeAreaView style={styles.MainWrapper}>
      <View style={styles.AppNameWrapper}>
          <Text style={{fontSize:width/10,color:"#194D33"}}>Foreign</Text>
      </View>
      
    </SafeAreaView>
  )
}

export default Header

const styles = StyleSheet.create({
    MainWrapper:{
        backgroundColor:"transparent",
        width:"100%",
        height:"10%",
        flexDirection:"row",
        justifyContent: "space-between",
        alignItems:"center",
        paddingLeft:width/39,
        paddingRight:width/39,
        borderBottomWidth: 2,
        borderBottomColor:"#194D33",
        
        
    },
    AppNameWrapper:{
        
    },
    HeaderCalculateWrapper:{
        backgroundColor:"transparent",
        padding:width/39/2,
        borderColor:"#194D33",
        borderWidth:1.4,
        color:"#194D33",
        borderRadius:10
    }
})