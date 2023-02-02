import React from 'react';
import { Text, View, Image, Linking, TouchableOpacity,TextInput, KeyboardAvoidingView, Platform, ScrollView } from 'react-native';
import { useNavigation } from "@react-navigation/native";
import{ useState } from 'react';

export default function Cadastro() {

    const navegacao = useNavigation();

    function irparaEntre(){
        navegacao.navigate('Login');
    }

    const [email, setEmail] = useState("");
    const [senha, setSenha] = useState("");
    const [nome, setNome] = useState("");

    return (
        <View style={{height: "100%", width: "100%", color:"black", backgroundColor: "white"}}>
          <KeyboardAvoidingView behavior={Platform.OS == "ios" ? "padding" : "height"} keyboardVerticalOffset={80} style={{backgroundColor:"transparent"}}>
          <Image source={require("../images/logo.png")}  style={{ marginTop: "20%", height: "40%", width: "100%",}}/>

          <ScrollView>
            <Text style={{textAligin:"center", marginTop: -5, fontSize: 40, fontFamily: "cursive", marginLeft: "33%", color:"black"}}>Cadastro</Text>
          
            <TextInput style={{marginLeft: "15%", fontSize:18, borderWidth: 2, borderRadius:10, width: "70%", height: 40, backgroundColor: "transparent", marginTop: "7%", color: 'black', textAlign:"center", justifyContent:"center"}}

            placeholderTextColor="black"
            value={email}
            onChangeText={email => setEmail(email)}
            placeholder="Digite seu email"

            />

            <TextInput style={{marginTop:"3%", marginLeft: "15%", fontSize:18, borderWidth: 2, borderRadius:10, width: "70%", height: 40, backgroundColor: "transparent", color: 'black', textAlign:"center", justifyContent:"center"}}

            placeholderTextColor="black"
            value={nome}
            onChangeText={nome => setNome(nome)}
            placeholder="Digite seu nome"

            />

            <TextInput style={{marginTop:"3%", marginLeft: "15%", fontSize:18,borderWidth: 2,borderColor:"black", borderRadius:10, width: "70%", height: 40, backgroundColor: "transparent", color: 'black', textAlign:"center", justifyContent:"center"}}

            placeholderTextColor="black"
            secureTextEntry={true} 
            value={senha}
            onChangeText={senha => setSenha(senha)}
            placeholder="Digite sua senha" 

            />

            <TouchableOpacity style={{marginTop: "10%", borderRadius: 7, backgroundColor:"black", color:"white", textAlign: "center", height:30, width: "30%",marginLeft: "38%", justifyContent:"center",alignItems:"center"}} onPress={irparaEntre}> 
                <Text style={{color:"white", fontSize: 20}}>Cadastrar</Text>
            </TouchableOpacity>
          
          </ScrollView>
          </KeyboardAvoidingView>
        </View>
    );
  
}
