import { useNavigation } from '@react-navigation/native';
import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import { RectButton, TextInput } from 'react-native-gesture-handler';
import Footer from '../Footer';
import Formc from '../Formc';
import Header from '../Header';
import Subheader from '../Subheader'



 function Home() {

  const navigation = useNavigation();

  const handleOnPress = () => {
    navigation.navigate('Orders');
  
  }
  

      return (
    <>
     <Header></Header>
     <Subheader></Subheader>
        <Formc></Formc>
    <Footer></Footer>

    </>

  );
}

const styles = StyleSheet.create({

    
        container: {
          marginTop: '5%',
          alignItems: 'center',
          flexDirection:'row',
        },
        container2: {
          marginTop: '0',
          alignItems: 'center',
          flexDirection:'row',
        },
        title: {
          color: '#263238',
          fontSize: 26,
          lineHeight: 35,
          fontWeight: 'bold',
          marginTop: 31,
          textAlign: 'center'
        },
        subTitle: {
          color: '#9E9E9E',
          fontSize: 16,
          marginTop: 15,
          lineHeight: 22,
          textAlign: 'center'
        },
        footer: {
          marginTop: '5%',
          alignItems: 'center'
        },
        button: {
          backgroundColor: '#DA5C5C',
          flexDirection: 'row',
          borderRadius: 10
        },
        buttonText: {
          paddingTop: 15,
          paddingBottom: 15,
          paddingLeft: 50,
          paddingRight: 50,
          fontWeight: 'bold',
          fontSize: 18,
          color: '#FFF',
          letterSpacing: -0.24
        },
        inpt:{
          backgroundColor:'#E6E6FF',
          borderBottomLeftRadius:5,
          borderBottomRightRadius:5,
          paddingLeft:5
        },
        cfield:{
          width:'33%',
          paddingLeft: 5,
          paddingRight:5,
          

        },
        ctitle:{
          width:'33%',
          paddingLeft: 5,
          paddingRight:5,
       
         

        }, 
        ctext:{
          borderTopLeftRadius:5,
          borderTopRightRadius:5,
          fontSize:10,
          backgroundColor:'#E6E6FF',
          paddingLeft:5,
          fontWeight:'bold'
        }
        
        
  

});


export default Home;
