import { View, TouchableOpacity, Modal, Text, SafeAreaView, Image, ScrollView} from "react-native";
import React, {useState, useEffect} from "react";


export default function (){

    const meses = [
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
       'Dezembro',
    ];

    const semana = [
        'Dom',
        'Seg',
        'Ter',
        'Qua',
        'Qui',
        'Sex',
        'Sab',
    ]

    const [selectyear, setSelectyear] = useState(0)
    const [selectmonth, setSelectMonth] = useState(0)
    const [selectday, setSelecDay] = useState(0)
    const [selecthora, setSelecthora] = useState(null)
    const [listadias, setListadias] = useState([])


    useEffect(() => {
        var diasdomes = new Date(selectyear, selectmonth+1, 0).getDate;
        var newlist = []

        for(var y=1; y<= diasdomes; y++){
            var z = new Date(selectyear, selectmonth, y)
            var ano  = z.getFullYear;
            var mes = z.getMonth;
            var dia = z.getDate;
            mes =  mes < 10 ? '0' +mes : mes;
            dia =  dia < 10 ? '0' +dia: dia;

            var selfdate  = ano+'-'+mes+'-'+dia;

            newlist.push({
                diadasemana: semana[z.getDay()],
                number: y
            });

            setListadias(newlist)
            setSelecDay(1)

        }
    }, [selectmonth, selectyear])

    useEffect(() => {
        var hoje = new Date();
        setSelectyear(hoje.getFullYear())
        setSelectMonth(hoje.getMonth())
        setSelecDay(hoje.getDay())
    }, [])

    function proximomes(){
        setSelectMonth(selectmonth + 1)
        if(selectmonth === 13){
            setSelectyear(selectyear + 1)
            setSelectMonth(0)
            setSelecDay(1)
        }
    }

    function mesanterior(){
        var hoje = new Date();
        var mesatual = hoje.getMonth();
        if(selectmonth < mesatual){
            console.log("function parou")
        } else{

            if(selectmonth === -1){
                setSelectyear(selectyear - 1)
                setSelectMonth(12)
                setSelecDay(1)
                
            }

        }
        setSelectMonth(selectmonth - 1)

    }


  const [visivel, setVisivel] = useState(false)
  return(

    <View>
      <Modal
      animationType="slide"
      transparent={true}
      visible={visivel}
      style={{}}
      >

      <SafeAreaView style={{alignItems:"center", backgroundColor:"black", height:"75%", borderRadius:10}}>

        <TouchableOpacity onPress={() => setVisivel(false)} style={{marginRight:"90%",backgroundColor:'white', borderRadius:50, width:40, height:40,  justifyContent:"center", alignItems:"center"}}>
        <Image source={require("../images/x.png")} style={{width:30, height:30}} />
        </TouchableOpacity>

        <Text style={{color:"white", fontSize:20, marginTop:40}}>Escolha o dia e o Horario do seu corte</Text>
        <Text style={{color:"yellow"}}>Segunda a Sábado, das 9h as 20h </Text>


        <SafeAreaView  style={{borderRadius:5, marginTop:40,alignItems:"center", backgroundColor:"white", width:"50%", height:"8%", flexDirection:"row"}}>
            <TouchableOpacity style={{flex:1, justifyContent:"flex-end", alignItems: "flex-end"}} onPress={mesanterior}>
                <Image source={require("../images/return.png")} style={{height:35, width:35}}/>
            </TouchableOpacity>

            <Text style={{color:"black", fontSize:20, fontWeight:"bold"}}>{meses[selectmonth]}</Text>
            <Text style={{color:"black", fontSize:20, fontWeight:"bold"}}>{selectyear}</Text>

            <TouchableOpacity style={{flex:1, justifyContent:"flex-start", alignItems: "flex-start"}} onPress={proximomes}>
                <Image source={require("../images/proximo.png")} style={{height:35, width:35}}/>
            </TouchableOpacity>
        </SafeAreaView>

        <ScrollView horizontal={true} style={{backgroundColor:"white"}}>
            {listadias.map((item, key) => (
                <TouchableOpacity style={{width:45, justifyContent:"center", borderRadius:10}} key={key} onLongPress={()=>{}}>
                    <Text style={{color:"black", fontSize: 18, fontWeight:"bold"}}>{item.diadasemana}</Text>
                    <Text style={{color:"black", fontSize: 18, fontWeight:"bold"}}>{item.number}</Text>
                </TouchableOpacity>
            ))}
        </ScrollView>

        <TouchableOpacity
          style={{backgroundColor:"white", color:"black", borderRadius:20, width:"50%", height: 35, justifyContent:"center", alignItems:"center",marginTop: "10%"}}
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
