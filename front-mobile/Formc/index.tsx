import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { SafeAreaView,StyleSheet, Text, View, Image, TextInput } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import { Credencialp } from '../Types';
import dayjs from 'dayjs';
import 'dayjs/locale/pt-br';
import relativeTime from 'dayjs/plugin/relativeTime';




dayjs.locale('pt-br');
dayjs.extend(relativeTime);


function dateFromNow(date:string){
  return dayjs(date).format('DD/MM/YYYY');

}

type Props={

  credencial:Credencialp;
}

export default function Formc({credencial}:Props){



  const navigation = useNavigation();

  const handleOnPress = () => {
    navigation.navigate('Qrcode');
  
  }


        return (

                <ScrollView>
                         <View style={styles.container}>
                <View style={styles.ctitle}><Text style={styles.ctext}>Matrícula</Text></View>
                <View style={styles.ctitle}><Text style={styles.ctext}>Cargo</Text></View>
                <View style={styles.ctitle}><Text style={styles.ctext}>Filiação</Text></View>
       </View>


            <View style={styles.container2}>
                  

            <View style={styles.cfield}><Text style={styles.inpt}>{credencial.matriula}</Text></View>     
            <View style={styles.cfield}><Text style={styles.inpt}>{credencial.cargo}</Text></View>
            <View style={styles.cfield}><Text style={styles.inpt}>{dateFromNow(credencial.filiacao)}</Text></View>              
            </View>

            <View style={styles.container}>
                <View style={styles.ctitle1}><Text style={styles.ctext}>Nome</Text></View>
                
             </View>

              <View style={styles.container2}>
                  

            <View style={styles.cfield1}><Text style={styles.inpt}>{credencial.nome}</Text></View>     
         
            </View>

            <View style={{paddingTop:5,width:'99%', flexDirection:'row'}}><Text style={{fontWeight:'bold', paddingLeft:5}}>Estado:</Text><Text>{credencial.estado}</Text></View>
            <View style={{paddingTop:5,width:'99%', flexDirection:'row'}}><Text style={{fontWeight:'bold', paddingLeft:5}}>Campo:</Text><Text>{credencial.campo}</Text></View>


              
            <View style={styles.container}>
                <View style={styles.ctitle}><Text style={styles.ctext}>Ordenado em:</Text></View>
                <View style={styles.ctitle}><Text style={styles.ctext}>Emissão:</Text></View>
                <View style={styles.ctitle}><Text style={styles.ctext}>Validade</Text></View>
           </View>


            <View style={styles.container2}>
                  

            <View style={styles.cfield}><Text style={styles.inpt}>{dateFromNow(credencial.ordenado)}</Text></View>     
            <View style={styles.cfield}><Text style={styles.inpt}>{dateFromNow(credencial.emissao)}</Text></View>
            <View style={styles.cfield}><Text style={styles.inpt}>{dateFromNow(credencial.validade)}</Text></View>              
            </View>


            <View style={styles.container}>
                <View style={styles.ctitle1}><Text style={{textAlign:'center', fontSize:10, fontWeight:'bold',backgroundColor:'#E6E6FF', borderTopLeftRadius:5, borderTopRightRadius:5}}>Local - UF</Text></View>
                
             </View>

              <View style={styles.container2}>
                  

            <View style={styles.cfield1}><Text style={styles.inpt}>{credencial.local}</Text></View>     
         
            </View>

            <View style={styles.container}>
                <View style={styles.ctitle}><Text style={styles.ctext}>Estado Civil:</Text></View>
                <View style={styles.ctitle2}><Text style={styles.ctext}>Identidade:</Text></View>
               
           </View>


            <View style={styles.container2}>
                  

            <View style={styles.cfield}><Text style={styles.inpt}>{credencial.estadoCivil}</Text></View>     
            <View style={styles.cfield2}><Text style={styles.inpt}>{credencial.rg}  {credencial.org_rg}</Text></View>
                  
            </View>

            <View style={{marginTop:5, width:'100%', backgroundColor:'#218638'}}  >
            <Text onPress={handleOnPress} style={{fontSize:11, fontWeight:'bold', padding:5}}>A CONAMAD solicita às autoridades oficiais e particulares que  dispensem ao portador da presente Credencial todas as facilidades no desempenho de sua função Eclesiástica.</Text>
            </View>

            <View style={{marginTop:10, width:'100%', flexDirection:'row'}}>
                <View style={{width:'50%'}}>
                <Image style={styles.imgass}  source={require('../assets/bispo.png')} ></Image>
                  <Text style={{fontSize:12, textAlign:'center'}}>Bispo Primaz Dr. Manoel Ferreira</Text>
                  <Text style={{fontSize:12, textAlign:'center'}}>Presidente</Text>
                </View>
                <View style={{width:'50%', justifyContent:'center'}}>
                <Image style={styles.imgass} source={require('../assets/asssec.png')} ></Image>
                <Text style={{fontSize:12, textAlign:'center'}}>Pastor Josué de Campos</Text>
                <Text style={{fontSize:12, textAlign:'center'}}>1º Secretário</Text>
                </View>
            </View>





                </ScrollView>


        );

    

}





const styles = StyleSheet.create({

    
    container: {
      marginTop: '5%',
      alignItems: 'center',
      flexDirection:'row',
    },
    container2: {
      marginTop: 0,
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
    cfield1:{
      width:'99%',
      paddingLeft: 5,
      paddingRight:5,
      

    },
    ctitle1:{
      width:'99%',
      paddingLeft: 5,
      paddingRight:5,
   
     

    }, 

    cfield2:{
      width:'66%',
      paddingLeft: 5,
      paddingRight:5,
      

    },
    ctitle2:{
      width:'66%',
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
    },
    textB:{
      fontSize:10,
      paddingLeft:5,
      fontWeight:'bold'
    },
    imgass:{

      height:40,
      width:80,
      alignSelf:'center'
      
    }

    
    


});