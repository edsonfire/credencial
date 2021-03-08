import { useNavigation } from '@react-navigation/native';
import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import { TouchableWithoutFeedback } from 'react-native-gesture-handler';

export default function Subheader() {


  const navigation = useNavigation();

  const handleOnPress = () => {
    navigation.navigate('Home');
  
  }



  return (
    <TouchableWithoutFeedback onPress={handleOnPress}>   
      <View style={styles.subc}>
            <View  style={styles.subcc}>
            <Image style={styles.imglogo}  source={require('../assets/conamad.png')} ></Image>
            </View>
            <View style={styles.subtt}>
                <Text style={styles.textv2b}>CONAMAD</Text>
                <Text style={styles.textv1}>CONVENÇÃO NACIONAL DAS ASSEMBLÉIAS DE DEUS NO BRASIL</Text>
                <Text style={styles.textv2b}>MINISTÉRIO DE MADUREIRA</Text>
                <Text style={styles.textv1}>Brasília-DF - 61 - 32428521</Text>
                
            </View>
    </View>
    </TouchableWithoutFeedback>

  );
}

const width_proportion = '25%';
const height_proportion = '40%';

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
  
  },
  imglogo:{
    width:50,
    height:50,
    marginLeft:1,
    top: 0

  },
  subc:{
    paddingTop:2,
    display:'flex',
    flexDirection:'row',
    backgroundColor:'#F0FAD5'
  },
  subcc:{
      width:width_proportion,
      
      alignItems: 'center',
      justifyContent: 'center',
      textAlign:'center'

  }, 
  textv1:{

    fontSize:9
  },
  
  textv2b:{
    fontSize:16,
    fontWeight:'bold'
  },
  subtt:{
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    textAlign:'center'
  }


});

