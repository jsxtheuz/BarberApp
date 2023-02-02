import { View, TouchableOpacity, Modal, Text, SafeAreaView, Image, ScrollView} from "react-native";
import React, {useState} from "react";
import {LocaleConfig, Calendar} from 'react-native-calendars';
import { FlatList } from "react-native-gesture-handler";

export default function (){

    const horasidsponiveis = [
        '9:00',
        '9:30',
        '10:00',
        '10:30',
        '11:00',
        '11:30',
        '13:00',
        '13:30',
        '14:00',
        '14:30',
        '15:00',
        '15:30',
        '16:00',
        '16:30',
        '17:00',
        '17:30',
        '18:00',
        '18:30',
        '19:00',
        '19:30',
        '20:00',
    ]
  LocaleConfig.locales['pt'] = {
  monthNames: [
    'Janeiro',
    'Fevereiro',
    'Março',
    'Abril',
    'Maio',
    'Junho',
    'Julho',
    'Agosto',
    'Setembro',
    'Outubro',
    'Novembro',
    'Dezembro'
  ],
  monthNamesShort: ['Jan.', 'Fev.', 'Mar', 'Abr', 'Mai', 'Jun', 'Jul.', 'Ago', 'Set.', 'Out.', 'Nov.', 'Dez.'],
  dayNames: ['Domingo', 'Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado'],
  dayNamesShort: ['Dom.', 'Seg.', 'Ter.', 'Qua.', 'Qui.', 'Sex.', 'Sab.'],
  today: "Aujourd'hui"
};
LocaleConfig.defaultLocale = 'pt';
const [cor, setCor] = useState("white")
const [visivel, setVisivel] = useState(false)


  return(
    <View>
      <Modal
      animationType="slide"
      transparent={true}
      visible={visivel}
      style={{}}
      >

      <SafeAreaView style={{alignItems:"center", backgroundColor:"black", height:"80%", borderRadius:10}}>

        <TouchableOpacity onPress={() => setVisivel(false)} style={{marginRight:"90%",backgroundColor:'white', borderRadius:50, width:30, height:30,  justifyContent:"center", alignItems:"center"}}>
          <Image source={require("../images/x.png")} style={{width:20, height:20}} />
        </TouchableOpacity>

        <Text style={{color:"white", fontSize:20, marginTop:40}}>Escolha o dia e o Horario do seu corte</Text>
        <Text style={{color:"yellow"}}>Segunda a Sábado, das 9h as 20h </Text>


        <Calendar 
          style={{marginTop: 35}}
          initialDate={new Date()}
          minDate={new Date()}
        />
        <SafeAreaView style={{backgroundColor:"white", width:"80%", height:50, marginTop:"8%", borderRadius:10}}>

        <FlatList 
          horizontal
          data={horasidsponiveis}
          renderItem={({item}) => 
            <TouchableOpacity style={{justifyContent:"center", alignItems:"center"}}>
          <SafeAreaView style={{}}>
              <Text style={{color:"black", fontSize:16, marginLeft:10, fontWeight:"bold"}}>{item}</Text>
          </SafeAreaView>
          </TouchableOpacity>
        }
        />

        </SafeAreaView>

        <TouchableOpacity
          style={{backgroundColor:"white", color:"black", borderRadius:20, width:"50%", height: 35, justifyContent:"center", alignItems:"center",marginTop: "8%"}}
          onPress={() => setVisivel(false)}>
        <Text style={{color:"black"}}>Confirmar</Text>        
        </TouchableOpacity>
            </SafeAreaView>
          </Modal>

       <TouchableOpacity
              style={{backgroundColor:"white", 
              borderRadius: 15, 
              marginLeft:"45%", 
              width:"50%", 
              height:40,
              marginTop:20,
              alignItems: "center", 
              justifyContent:"center"}} 
              onPress={() => setVisivel(true)}>

                <Text style={{color:"black"}}>Agendar</Text>
              
        </TouchableOpacity>
    </View>
  );
}
