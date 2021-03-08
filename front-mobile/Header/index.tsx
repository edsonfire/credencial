import { useNavigation } from '@react-navigation/native';
import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import { TouchableWithoutFeedback } from 'react-native-gesture-handler';

export default function Header() {


  const navigation = useNavigation();

  const handleOnPress = () => {
    navigation.navigate('Home');
  
  }



  return (
    <TouchableWithoutFeedback onPress={handleOnPress}>   
      <View style={styles.container}>
               
      <Text style={styles.text}>CREDENCIAL DE MINISTRO</Text>
    </View>
    </TouchableWithoutFeedback>

  );
}

const styles = StyleSheet.create({
  container: {
        backgroundColor:'#76CB98',
      height:90,
      paddingTop:50,
      flexDirection:'row',
      justifyContent:'center',
      
  },
  text:{

    letterSpacing: -0.024,
    marginLeft:5,
    fontStyle: 'normal',
fontWeight: 'normal',
fontSize: 22,
lineHeight: 26,
display: 'flex',
alignItems: 'flex-end',
textAlign: 'center'
  
  }
});

