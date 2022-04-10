import { StyleSheet, Text, View, ScrollView,Dimensions,TouchableOpacity } from 'react-native'
import React from 'react'
import Consumer from '../../Context'
import { useNavigation } from '@react-navigation/native'

const {width,height}=Dimensions.get("screen");


const CurrencyCard=(props)=>{
    const Navigation=useNavigation();
    const {buying,selling}=props;
    return(
        <TouchableOpacity onPress={()=>Navigation.navigate("Calculate",({buying,selling}))} activeOpacity={0.8} style={styles.CurrencyCardMainWrapper}>
            <View style={styles.CurrencyNameBox}>
                <Text style={{fontSize:width/20,color:"gainsboro"}}>{props.name}</Text>
                <Text style={{fontSize:width/28, color:"#1273DE"}}>{props.title}</Text>
            </View>
            <View style={styles.CurrencyBox}>
                <Text style={{fontSize:width/18,color:"red"}}>{buying}</Text>
                <Text style={{fontSize:width/18,color:"green"}}>{selling}</Text>
            </View>
        </TouchableOpacity>
    )
}

const CurrencyCards=()=>{
    return(
        <Consumer>
            {
                (value)=>(
                    value.response.TCMB_AnlikKurBilgileri.map(item=>(
                        <CurrencyCard 
                            key={item.ForexBuying}
                            name={item.CurrencyName} 
                            title={item.Isim}
                            buying={item.ForexBuying}
                            selling={item.ForexSelling}
                        ></CurrencyCard>
                    ))
                )
            }
        </Consumer>
    )
}

const CurrencyList = () => {
  return (
    <ScrollView style={styles.CurrencyListMainWrapper}>
        <Consumer>
            {
                (val)=>(
                    val.loading? <Text>Loading</Text> :<CurrencyCards></CurrencyCards>
                )
            }
        </Consumer>
        
    </ScrollView>
  )
}

export default CurrencyList

const styles = StyleSheet.create({
    CurrencyListMainWrapper:{
        width:"100%",
        flex:1,
        flexGrow:1,
        flexDirection:'column',
        height:100
    },
    CurrencyCardMainWrapper:{
        flexDirection:"row",
        width:"100%",
        paddingBottom:10,
        paddingTop:10
    },
    CurrencyNameBox:{
        width:"50%",
        justifyContent: "center",
        alignItems:"flex-start",
        paddingLeft:width/39/2
    },
    CurrencyBox:{
        width:"50%",
        flexDirection:"row",
        justifyContent:"space-evenly",
        alignItems:"center"
    }
})




/*
<View style={styles.CurrencyNameBox}>
                <Text style={{fontSize:width/16}}>US DOLAR</Text>
                <Text style={{fontSize:width/28}}>ABD DOLARI</Text>
            </View>
            <View style={styles.CurrencyBox}>
                <Text style={{fontSize:width/18}}>7,3738</Text>
                <Text style={{fontSize:width/18}}>7,3819</Text>
            </View>*/