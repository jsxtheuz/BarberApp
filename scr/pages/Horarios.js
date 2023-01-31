import { View, TouchableOpacity, Modal, Text, SafeAreaView, Image, ScrollView} from "react-native";
import React, {useState, useEffect} from "react";
import {LocaleConfig, Calendar} from 'react-native-calendars';



export default function (){

    
    const [selectyear, setSelectyear] = useState(0)
    const [selectmonth, setSelectMonth] = useState(0)
    const [selectday, setSelecDay] = useState(0)
    const [selecthora, setSelecthora] = useState(null)
    const [listadias, setListadias] = useState([])

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


  
  const [visivel, setVisivel] = useState(false)
  return(

    <View>
      <Modal
      animationType="slide"
      transparent={true}
      visible={visivel}
      style={{}}
      >

      <SafeAreaView style={{alignItems:"center", backgroundColor:"black", height:"70%", borderRadius:10}}>

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
