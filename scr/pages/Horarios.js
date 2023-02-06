import { View, TouchableOpacity, Modal, Text, SafeAreaView, Image, ScrollView,  FlatList} from "react-native";
import React, {useState, useEffect} from "react";
import {LocaleConfig, Calendar} from 'react-native-calendars';


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
const [selecthora, setselectHora] = useState("")
const [data, setData]= useState(new Date());
const [selectdata, setselectData] = useState("")

function confirmar(){
  setVisivel(false);
  window.alert("Horário marcado")
}

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
          initialDate={data}
          minDate={data}
          hideExtraDays={true}
          disableAllTouchEventsForDisabledDays={true}
          onDayPress={day => setselectData("Dia "+day.day+"/"+day.month+" Correto?")}
        />
        <Text style={{color:"white", fontSize:18, marginTop:15, fontWeight:"bold"}}>{selectdata}</Text>
        <SafeAreaView style={{backgroundColor:"white", width:"80%", height:50, marginTop:"5%", borderRadius:10}}>

        <FlatList 
          horizontal
          showsHorizontalScrollIndicator={false}
          data={horasidsponiveis}
          renderItem={({item}) => 
            <TouchableOpacity onPress={() => setselectHora(item)} style={{justifyContent:"center", alignItems:"center", marginLeft:10, height:48, width:48}}>
          <SafeAreaView style={{backgroundColor: item === selecthora ? "black" : "white",justifyContent:"center", alignItems:"center",borderRadius:50, width:"100%",height:"100%"}} >
              <Text style={{color: item === selecthora ? "white" : "black", fontSize:16, fontWeight:"bold",justifyContent:"center", alignItems:"center"}}>{item}</Text>
          </SafeAreaView>
          </TouchableOpacity>
        }
        />

        </SafeAreaView>


        <TouchableOpacity
          style={{backgroundColor:"white", color:"black", borderRadius:20, width:"50%", height: 35, justifyContent:"center", alignItems:"center",marginTop: "5%"}}
          onPress={confirmar}>
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
