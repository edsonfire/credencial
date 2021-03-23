import { useNavigation } from '@react-navigation/native';
import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import { TouchableWithoutFeedback } from 'react-native-gesture-handler';
import QRCode from 'react-native-qrcode-svg';


export default function Imgcode() {


  const navigation = useNavigation();

  const handleOnPress = () => {
    navigation.navigate('Home');
  
  }



  return (
      <View style={styles.container}>
        <Text>CÓDIGO DE AUTENTICIDADE</Text>
        <QRCode size={200} value="www.paulooctavio.com.br"  ></QRCode>       
   
    </View>
   
  );
}

const styles = StyleSheet.create({
  container: {
        
      height:80,
      paddingTop:50,
      flexDirection:'column',
      justifyContent:'center',
      minHeight:'50%'
  },
  text:{

    letterSpacing: -0.024,
    marginLeft:5,
    fontStyle: 'normal',
fontWeight: 'normal',
fontSize: 19,
lineHeight: 19,
display: 'flex',
alignItems: 'flex-end',
textAlign: 'center'
  
  }

});

