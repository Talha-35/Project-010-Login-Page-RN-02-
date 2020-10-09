
// FLEX ÖRNEĞİ 

import React from 'react';
import {SafeAreaView,TouchableOpacity, Button, View,Text,Image, StyleSheet,TextInput,onPress, ImageBackground} from 'react-native'


const App = () => {

  return (
    <SafeAreaView style = {{backgroundColor : "cyan" , flex : 1}}>

        <View style ={styles.head}>
            <Image style = {{width: 150, height: 150 }}  source={require("./img/1.png")}/> 
        </View>

        <View style = {{flex : 1}}>
        
        <View style ={styles.title1}>
          <TextInput keyboardType="email-address"
            placeholder="E-posta giriniz..."/>
        </View>     

        <View style ={styles.title2}>
          <TextInput keyboardType="email-address"
            placeholder="Şifre giriniz..."/>
        </View>     
        </View>
        <View style = {{flex : 1}}>
        <TouchableOpacity  onPress={onPress} >
          <View style={styles.buttonContainer1}>
            <Text style={styles.textStyle}>Giriş Yap</Text>
          </View>
        </TouchableOpacity>
      
        <TouchableOpacity  onPress={onPress} >
        <View style={styles.buttonContainer2}>
            <Text style={styles.textStyle}>Kayıt Ol</Text>
          </View>
        </TouchableOpacity>

       {/* <Text style={styles.buttonContainer3}> <Button style={ {color : "gray"} }
        title="Press me"
        onPress={() => Alert.alert('Simple Button pressed')}
      /></Text> */}
        </View>
    </SafeAreaView>
  );
};

export default App;

const styles = StyleSheet.create({
  head : {
      flex : 2,
      justifyContent : "center", 
      alignItems : "center",
      // marginLeft : 10,
      // marginBottom : 160,
    },
    title1 : {
        // flex : 1,
        borderColor: 'gray',
        backgroundColor : "white",
        borderWidth: 1,
        borderRadius: 5,
        marginLeft: 20,
        marginRight: 20,
        padding : 3,
        marginBottom : 20,
    },
    title2 : {
      // flex : 1,
      backgroundColor : "white",
      borderColor: 'gray',
      borderWidth: 1,
      borderRadius: 5,
      marginLeft: 20,
      marginRight: 20,
      margin : 3,
      padding : 3,
  },
    buttonContainer1: {
      backgroundColor: 'gray', 
      padding: 10,
      marginLeft: 70,
      marginRight: 70,
      marginBottom : 10,
      borderRadius: 5,
      alignItems: 'center'
    },
    buttonContainer2: {
      backgroundColor: 'gray', 
      padding: 10,
      marginLeft: 70,
      marginRight: 70,
      borderRadius: 5,
      alignItems: 'center'
    },
    buttonContainer3: {
      backgroundColor: 'gray', 
      color : "gray",
      alignSelf: "center",
      // elevation: 8,
      // width : 50,
      // marginLeft: 30,
      // marginRight: 30,
      borderRadius: 5,
      justifyContent : "center",
      alignItems: 'center',
    },
    textStyle: {
      fontSize: 17,
      color: 'white',
      fontWeight: 'bold'
    }
})