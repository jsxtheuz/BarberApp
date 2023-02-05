import {Text, SafeAreaView, Image, FlatList} from 'react-native';
import { useEffect } from "react";
import { useNavigation } from "@react-navigation/native";
import {user} from "./Login"
import Horarios from "./Horarios"

export default function Produtos(){

  const navegacao = useNavigation();

  useEffect(() => {
    if(user === false){
      navegacao.navigate('Login')
      console.log(user)
    }
  })

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

          
              <Horarios/>
                    
            </SafeAreaView>
     
            }

            />
        </SafeAreaView>

        );


  };


  return ScreenOne();

}
