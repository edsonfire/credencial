import { useNavigation } from '@react-navigation/native';
import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import { TouchableWithoutFeedback } from 'react-native-gesture-handler';

export default function Footer() {


  return (
        <View style={styles.container}>
                <Text style={styles.text}>Site: www.conamad.com.br - E-mail: conamad@conamad.com.br</Text>
        </View>    
  );
}

const styles = StyleSheet.create({
  container: {
        backgroundColor:'#76CB98',
     justifyContent:'center',
     bottom:0,
     marginBottom:0,
     borderRadius:5, height:30
      
  },
  text:{

 fontSize:12 ,
 fontWeight:'bold',
textAlign: 'center'
  
  }

});

