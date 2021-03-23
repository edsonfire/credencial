import { useNavigation } from '@react-navigation/native';
import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, Image, Button } from 'react-native';
import { TouchableWithoutFeedback } from 'react-native-gesture-handler';
import QRCode from 'react-native-qrcode-svg';





type Props={

  cod:string;
}


export default function Imgcode({cod}:Props) {


  const navigation = useNavigation();

  const handleOnPress = () => {
    navigation.navigate('Home');
  
  }

  




  return (
      <View style={styles.container}>
        <Text style={{fontWeight:"bold", marginBottom:10}}>CÓDIGO DE AUTENTICIDADE - {cod}</Text>
        <QRCode size={200} value={cod}  ></QRCode>    


        <View style={{marginTop:15}}>
        <Button
              onPress={handleOnPress}
              title="voltar"
              color="#76CB98"
              accessibilityLabel="voltar"
          />   
        </View>
    </View>
   
  );
}

const styles = StyleSheet.create({
  container: {
        
      height:80,
      paddingTop:50,
      flexDirection:'column',
      justifyContent:'center',
      minHeight:'50%',
      alignItems: 'center'

  },
  btt:{
      marginTop:15

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

