
import React from 'react';
import { SafeAreaView,StyleSheet, Text, View, Image, TextInput } from 'react-native';



export default function Formc(){

        return (

                <>
                         <View style={styles.container}>
                <View style={styles.ctitle}><Text style={styles.ctext}>Matrícula</Text></View>
                <View style={styles.ctitle}><Text style={styles.ctext}>Cargo</Text></View>
                <View style={styles.ctitle}><Text style={styles.ctext}>Filiação</Text></View>
       </View>


            <View style={styles.container2}>
                  

            <View style={styles.cfield}><Text style={styles.inpt}>123454555</Text></View>     
            <View style={styles.cfield}><Text style={styles.inpt}>Evangelista</Text></View>
            <View style={styles.cfield}><Text style={styles.inpt}>15/10/2000</Text></View>              
            </View>

            <View style={styles.container}>
                <View style={styles.ctitle1}><Text style={styles.ctext}>Nome</Text></View>
                
             </View>

              <View style={styles.container2}>
                  

            <View style={styles.cfield1}><Text style={styles.inpt}>Vanilton Vidal</Text></View>     
         
            </View>

            <View style={{paddingTop:5,width:'99%'}}><Text style={{fontWeight:'bold', paddingLeft:5}}>Estado:</Text></View>
            <View style={{paddingTop:5,width:'99%'}}><Text style={{fontWeight:'bold', paddingLeft:5}}>Campo:</Text></View>


              
            <View style={styles.container}>
                <View style={styles.ctitle}><Text style={styles.ctext}>Ordenado em:</Text></View>
                <View style={styles.ctitle}><Text style={styles.ctext}>Emissão:</Text></View>
                <View style={styles.ctitle}><Text style={styles.ctext}>Validade</Text></View>
           </View>


            <View style={styles.container2}>
                  

            <View style={styles.cfield}><Text style={styles.inpt}>123454555</Text></View>     
            <View style={styles.cfield}><Text style={styles.inpt}></Text></View>
            <View style={styles.cfield}><Text style={styles.inpt}></Text></View>              
            </View>


            <View style={styles.container}>
                <View style={styles.ctitle1}><Text style={{textAlign:'center', fontSize:10, fontWeight:'bold',backgroundColor:'#E6E6FF', borderTopLeftRadius:5, borderTopRightRadius:5}}>Local - UF</Text></View>
                
             </View>

              <View style={styles.container2}>
                  

            <View style={styles.cfield1}><Text style={styles.inpt}></Text></View>     
         
            </View>

            <View style={styles.container}>
                <View style={styles.ctitle}><Text style={styles.ctext}>Estado Civil:</Text></View>
                <View style={styles.ctitle2}><Text style={styles.ctext}>Identidade:</Text></View>
               
           </View>


            <View style={styles.container2}>
                  

            <View style={styles.cfield}><Text style={styles.inpt}>123454555</Text></View>     
            <View style={styles.cfield2}><Text style={styles.inpt}></Text></View>
                  
            </View>

            <View style={{marginTop:5, width:'100%', backgroundColor:'#218638'}}>
            <Text style={{fontSize:11, fontWeight:'bold', padding:5}}>A CONAMAD solicita às autoridades oficiais e particulares que  dispensem ao portador da presente Credencial todas as facilidades no desempenho de sua função Eclesiástica.</Text>
            </View>

            <View style={{marginTop:10, width:'100%', flexDirection:'row'}}>
                <View style={{width:'50%'}}>
                  <Text style={{fontSize:12, textAlign:'center'}}>Bispo Primaz Dr. Manoel Ferreira</Text>
                  <Text style={{fontSize:12, textAlign:'center'}}>Presidente</Text>
                </View>
                <View style={{width:'50%'}}>
                <Text style={{fontSize:12, textAlign:'center'}}>Pastor Josué de Campos</Text>
                <Text style={{fontSize:12, textAlign:'center'}}>1º Secretário</Text>
                </View>
            </View>





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
    }

    
    


});