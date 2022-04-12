import { StyleSheet, Text, View ,SafeAreaView,TextInput,Dimensions,TouchableOpacity,Button} from 'react-native'
import React from 'react'
import { useRoute } from '@react-navigation/native';
import { useNavigation } from '@react-navigation/native'
import ColumnNameBar from '../components/ColumnNameBar';


const {width,height}=Dimensions.get("screen");

const CalculateHeader=()=>{
  const Navigation=useNavigation();
  return(
    <SafeAreaView style={styles.CalculateHeaderMainWrapper}>
      <View style={{width:"25%",alignItems:"flex-start",justifyContent:"center",backgroundColor:"transparent",height:"100%"}}>
          <TouchableOpacity activeOpacity={0.7} onPress={()=>Navigation.navigate("Home")} style={{paddingLeft:width/39/2,paddingRight:width/39/2 ,backgroundColor:"transparent",borderWidth:1,borderColor:"#194D33",borderRadius: 10}}>
            <Text style={{fontSize:30,color:"#194D33"}}> {"<"} </Text>
          </TouchableOpacity>
      </View>
      <View style={{width:"50%",alignItems:"center",justifyContent:"center",height:"100%"}}>
          <Text style={{fontSize:width/10,color:"#194D33"}}>Foreign</Text>
      </View>
      <View style={{width:"25%",alignItems:"center",justifyContent:"center",height:"100%"}}>
          
      </View>
    </SafeAreaView>
  )
}


const CalculateBody=()=>{
  const [text, onChangeText] = React.useState(1);
  const Route=useRoute();
  
  const calculate=()=>{
    let buying_val= (Number(text)*Route.params.buying).toFixed(2);
    let selling_val=(Number(text)*Route.params.selling).toFixed(2);
    let buying_val2=(Number(text)/Route.params.buying).toFixed(2);
    let selling_val2=(Number(text)/Route.params.selling).toFixed(2);
    let value_object={buying_val,selling_val,buying_val2,selling_val2};
    return value_object;
  }
  var calculating_price=calculate();

  return(
    <SafeAreaView style={styles.CalculateBodyMainWrapper}>
      <CalculateCard name="Turkish Liras" buying={calculating_price.buying_val} selling={calculating_price.selling_val}></CalculateCard>
      <CalculateCard name={Route.params.name} buying={calculating_price.buying_val2} selling={calculating_price.selling_val2}></CalculateCard>
      <TextInput
        style={styles.input}
        onChangeText={onChangeText}
        value={text}
        keyboardType="numeric"
        placeholder="0"
      />
    </SafeAreaView>
  )
}

const CalculateCard=(props)=>{
  const {name,buying,selling}=props;
  return(
      <SafeAreaView style={styles.CalculateCardMainWrapper}>
          <View style={styles.CalculateNameBox}>
              <Text style={{fontSize:width/20,color:"gainsboro"}}>{name}</Text>
              <Text style={{fontSize:width/28, color:"#1273DE"}}>{name}</Text>
          </View>
          <View style={styles.CalculateBox}>
              <Text style={{fontSize:width/18,color:"red"}}>{buying}</Text>
              <Text style={{fontSize:width/18,color:"green"}}>{selling}</Text>
          </View>
      </SafeAreaView>
  )
}

const Calculate = () => {
  
  return (
    <SafeAreaView style={styles.MainWrapper}>
      <CalculateHeader></CalculateHeader>
      <ColumnNameBar></ColumnNameBar>
      <CalculateBody></CalculateBody>
    </SafeAreaView>
  )
}

export default Calculate

const styles = StyleSheet.create({
  MainWrapper:{
    backgroundColor:"#2B292F",
    flex:1
  },
  input:{
    height: 40,
    width:"50%",
    borderWidth: 1,
    borderColor:"aliceblue",
    borderRadius:5,
    marginTop:height/5,
    marginBottom:width/39,
    color:"aliceblue",
    textAlign:"center"
  },
  CalculateHeaderMainWrapper:{
    backgroundColor:"transparent",
        width:"100%",
        height:"10%",
        flexDirection:"row",
        alignItems:"center",
        paddingLeft:width/39,
        paddingRight:width/39,
        borderBottomWidth: 2,
        borderBottomColor:"#194D33",
  },
  CalculateBodyMainWrapper:{
    backgroundColor:"transparent",
    flexGrow:1,
    flexDirection:"column",
    alignItems:"center",
    justifyContent:"flex-start"
  },
  CalculateCardMainWrapper:{
    flexDirection:"row",
    width:"100%",
    paddingBottom:10,
    paddingTop:10
},
CalculateNameBox:{
    width:"50%",
    justifyContent: "center",
    alignItems:"flex-start",
    paddingLeft:width/39/2
},
CalculateBox:{
    width:"50%",
    flexDirection:"row",
    justifyContent:"space-evenly",
    alignItems:"center"
},
Button:{
  backgroundColor:"#194D33",
  padding:width/39,
  marginTop:height/89,
  borderRadius:5,
}
})