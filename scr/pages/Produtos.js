import React, {useRef} from 'react';
import {StyleSheet, Text, SafeAreaView, View, Image, TouchableOpacity,TextInput, KeyboardAvoidingView, Platform, FlatList, Button} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import{ useState } from 'react';
import { Modalize } from 'react-native-modalize';
import DateTimePiker from '@react-native-community/datetimepicker';

export default function Produtos(){

  const navegacao = useNavigation();

  const modalizeRef = useRef(null);

  const [date, setDate] = useState(new Date());
  const [hora, setHora] = useState();

  function Agendar(){
      //navegacao.navigate('Horarios')
      modalizeRef.current?.open();
    }

    const navalhado = require("../images/navalhado.png");
    const maquina = require("../images/maquina.png");
    const platinado = require("../images/platinado.png");
    const luzes = require("../images/luzes.png");
    const barba = require("../images/barba.png");


    const produtos = [
      {
        id: 1,
        produto: "Corte Navalhado",
        preço: 30,
        imagem: navalhado,
        tempo: 30
      },

      {
        id: 2,
        produto: "Corte na Máquina",
        preço: 25,
        imagem: maquina,
        tempo: 30
      },

      {
        id: 3,
        produto: "Platinado",
        preço: 120,
        imagem: platinado,
        tempo: 120
      },

      {
        id: 4,
        produto: "Luzes",
        preço: 90,
        imagem: luzes,
        tempo: 120
      },

      {
        id: 5,
        produto: "Barba",
        preço: 15,
        imagem: barba,
        tempo: 30
      },

      
    ]

  const ScreenOne = () => {



        return(

        <SafeAreaView style={{flex:1, backgroundColor:"white", }}>
          <Text style={{textAligin:"center", marginTop: 20, fontSize: 50, fontFamily: "cursive", marginLeft: "30%", color:"black"}}>Agendar</Text>



          <FlatList
            data={produtos}
            keyExtrator={(item) => item.id}
            renderItem={({item}) => 
            <SafeAreaView style={{marginLeft: "10%", display: "flex", marginTop:50, backgroundColor:"black", color: "white", width:"80%", borderRadius:20, height: 175}}>
              <Image  source={item.imagem} style={{height: 120, width:120, marginTop:20, marginLeft:20,}} />
              <Text style={{color:"white", fontSize:22, marginTop:-120, marginLeft:"45%"}}>{item.produto}</Text>
              <Text style={{color:"white", fontSize:20, marginTop:-0, marginLeft:"45%"}}>R${item.preço}</Text>

              <TouchableOpacity style={{backgroundColor:"white", borderRadius: 15, marginLeft:"45%", width:"50%", height:40, marginTop:20}} onPress={Agendar}>
                <Text style={{color:"black",alignItems: "center", marginLeft:"35%", marginTop: 10}}>Agendar</Text>
              </TouchableOpacity>
               
               
            </SafeAreaView>
     
            }
            />

            <Modalize 
            ref={modalizeRef}
            snapPoint={350}
            >

             <View style={{height: "100%", width: "100%", color:"black", backgroundColor: "white", flex:1, alignItems:"center", justifyContent:"center", borderRadius:50}}>

          <Text style={{marginTop:"15%", fontSize:25
          }}>Escolha o Data e a hora do seu corte</Text>

          
          <TouchableOpacity style={{width:"50%", marginLeft:"30%"}}>
          <DateTimePiker 
            value={date}
            minimumDate={date}
            display="calendar"
          />
          </TouchableOpacity>

          <TouchableOpacity style={{width:"50%", marginRight:"100%", marginTop:"-53%"}}>
          <DateTimePiker 
            mode="time"
            value={new Date()}
            display="clock"
            is24Hour={true}
            timeZoneOffsetInMinutes={60}
            minuteInterval={30}
          />
          </TouchableOpacity>


          <TouchableOpacity style={{borderRadius:25, backgroundColor:"black", width:"40%", height:"15%", alignItems:"center", justifyContent:"center"}}>
            <Text style={{color:"white", fontSize:20, alignItems:"center", justifyContent:"center" }}>Confirmar</Text>
          </TouchableOpacity>


        </View>

            </Modalize>
        </SafeAreaView>

        );


  };


  return ScreenOne();

}