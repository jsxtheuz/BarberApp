import { View, TouchableOpacity, Modal, Text, SafeAreaView, Button } from "react-native";
import React, {useState} from "react";
import DateTimePiker from '@react-native-community/datetimepicker';

export default function (){

  const [visivel, setVisivel] = useState(false)
  const [date, setDate] = useState(new Date());
  const [hora, setHora] = useState(new Date());
  return(

    <View>
      <Modal
      animationType="fade"
      transparent={true}
      visible={visivel}
      style={{}}
      >

      <SafeAreaView style={{alignItems:"center", backgroundColor:"black", height:"30%", borderRadius:10}}>

        <Text style={{color:"white", fontSize:20}}>Escolha o dia e o Horario do seu corte</Text>
        <Text style={{color:"red"}}>Segunda a Sábado, das 9h as 20h </Text>


        <TouchableOpacity style={{width:"50%", marginLeft:"30%", marginTop:-50}}>
          <DateTimePiker 
            value={date}
            minimumDate={date}
            display="calendar"
          />
          </TouchableOpacity>

         <TouchableOpacity style={{width:"50%", marginRight:"100%", marginTop:"-53%"}}>
          <DateTimePiker 
            mode="time"
            value={hora}
            display="clock"
            is24Hour={true}
            timeZoneOffsetInMinutes={60}
            minuteInterval={30}
          />
          </TouchableOpacity>


        <TouchableOpacity
          style={{backgroundColor:"white", color:"black", borderRadius:20, width:"50%", height: 35, justifyContent:"center", alignItems:"center",marginTop: "-10%"}}
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
              marginTop:20}} 
              onPress={() => setVisivel(true)}>

                <Text style={{color:"black",
                alignItems: "center", 
                marginLeft:"35%", 
                marginTop: 10}}>Agendar</Text>
              
        </TouchableOpacity>
    </View>
  );

}
