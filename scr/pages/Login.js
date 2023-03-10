import React from 'react';
import { StyleSheet, Text, View, Image, Linking, TouchableOpacity,TextInput, KeyboardAvoidingView, Platform, ScrollView } from 'react-native';
import { useNavigation } from "@react-navigation/native";
import{ useState, useEffect } from 'react';


export default function Login() {

  const navegacao = useNavigation();


  function irparaCadastre(){
      navegacao.navigate('Cadastro')
    }

  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const[emailinvalido, setEmailinvalido] = useState(false);
  const [senhainvalida, setSenhainvalida] = useState(false);
  const [textoinvalido, settextoInvalido] = useState("")
  const [user, setUser] = useState(false)

  async function irparaEntre(){

    if( email === null || email === "" || email.length === 0  ){
      setEmailinvalido(true)
      if(emailinvalido === true){
        settextoInvalido("Email Inválido");
      }
    } else if(senha === null || senha === ""|| senha.length === 0){
      setSenhainvalida(true)
      if(senhainvalida === true){
        settextoInvalido("Senha Inválida");
      }
    } else {
      setUser(true)
      navegacao.navigate('Produtos');
    }
  }
    
    
    var styles = StyleSheet.create({
      
      bk:{
      marginTop: "5%",
      height: "35%",
      width: "100%",
    },
    
    botaoentrar:{
      marginTop: "10%", 
      borderRadius: 7, 
      backgroundColor:"black", 
      color:"white",       
      textAlign: "center", 
      justifyContent:"center",
      alignItems:"center",
      height:30, 
      width: "30%",
      marginLeft: "38%",
    },
    
    text2:{
      textAligin:"center", 
      marginTop: 20, 
      fontSize: 15, 
      fontFamily: "cursive", 
      color:"black",
      ...Platform.select({
        ios: {
          marginLeft: "5%", 
        },
        android: {
          marginLeft: "15%", 
        }
      })
      
    }

  });
  
  return (
    <View style={{height: "100%", width: "100%", color:"black", backgroundColor: "white"}}>
      <KeyboardAvoidingView behavior={Platform.OS == "ios" ? "padding" : "height"} keyboardVerticalOffset={100} style={{backgroundColor:"transparent"}}>
        <Image source={require("../images/logo.png")}  style={styles.bk}/>

      <ScrollView>
      <Text style={{textAligin:"center", marginTop: 30, fontSize: 40, fontFamily: "cursive", marginLeft: "24%", color:"black"}}>Bem Vindo(a)</Text>

      <Text style={styles.text2}> Realize login ou cadastre-se para agendar seu horario</Text>

       <Image source={require("../images/user.png")}  style={{marginLeft:"10%", marginTop:"15%", height: 40, width:40}}/>

       <TextInput style={{ fontSize:18,borderWidth: 2, borderRadius:10, width: "70%", height: 40, backgroundColor: "transparent", marginTop: "-11%", marginLeft: '24%', color: 'black', textAlign:"center", justifyContent:"center"}}

        placeholderTextColor="black"
        value={email}
        onChangeText={email => setEmail(email)}
        placeholder="Digite seu email"

       />


         <Image source={require("../images/senha.png")}  style={{marginLeft:"10%", marginTop:"7%", height: 40, width:40}}/>

       <TextInput style={{fontSize:18,borderWidth: 2,borderColor:"black", borderRadius:10, width: "70%", height: 40, backgroundColor: "transparent", marginTop: "-10%", marginLeft: '25%', color: 'black', textAlign:"center", justifyContent:"center"}}

        placeholderTextColor="black"
        secureTextEntry={true} 
        value={senha}
        onChangeText={senha => setSenha(senha)}
        placeholder="Digite sua senha" 

       />

       <TouchableOpacity style={styles.botaoentrar} onPress={irparaEntre}> 
        <Text style={{color:"white", textAligin:"center", justifyContent:"center", fontSize: 20, aliginItens:"center"}}>Entrar</Text>
      </TouchableOpacity>

      <Text style={{color:"red", fontSize:17,  marginTop: "3%", marginLeft:"40%",fontWeight:"bold"}}>{textoinvalido}</Text>

      <TouchableOpacity onPress={irparaCadastre}> 
        <Text style={{ color:"black", marginTop: "5%", marginLeft:"40%"}}>CADASTRAR- SE</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => {
            Linking.openURL(
              'https://www.instagram.com/mr.bossbarbearia/'
            );
          }} > 
          
          <Image source={require("../images/insta.png")} style={{height:32, width:32, marginLeft:"35%", marginTop:50}}/>
      </TouchableOpacity>

       <TouchableOpacity onPress={() => {
            Linking.openURL(
              'https://api.whatsapp.com/send/?phone=554899172695&text&type=phone_number&app_absent=0'
            );
          }}> 
          
          <Image source={require("../images/wpp.png")} style={{height:30, width:30, marginTop: -30, marginLeft:"48%"}}/>
      </TouchableOpacity>

      <TouchableOpacity onPress={() => {
            Linking.openURL(
              'https://goo.gl/maps/vVA7txxq3E54p1eZ9'
            );
          }}> 
          
          <Image source={require("../images/maps.png")} style={{height:30, width:30, marginTop: -30, marginLeft:"60%"}}/>
      </TouchableOpacity>

      </ScrollView>
      </KeyboardAvoidingView>
    </View>

  );

  
}
