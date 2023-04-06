import { useState } from "react";
import { View, Text, Switch, StyleSheet } from "react-native";

export default function Configuracao({ navigation }) {
    const [estado, setEstado] = useState(true);

    return (
        <View>
            <View style={estilos.inicio}>
                <Text style={estilos.configuracao}>Configuração</Text>
            </View>
            <Text style={estilos.cartao}>Tema:</Text>
            <View style={estilos.fundo}>
                <Text style={estilos.titulo}>Escuro</Text>
                <Switch style={estilos.switch} onValueChange={() => setEstado(!estado)}
                    value={estado} />
            </View>
        </View>
    )
}
const estilos = StyleSheet.create({
    inicio:{
        backgroundColor:"#27408B",
    },
    configuracao:{
        fontSize:20,
        marginTop:50,
        marginBottom:20,
        color:"#FFFFFF",
        textAlign:"center"

    },
    cartao: {
        backgroundColor: '#FFFFFF',
        marginHorizontal: 25,
        borderRadius: 10,
        elevation: 50,
        marginTop: 30,
        textAlign: "center",
        fontSize: 30,
        color: '#27408B'
    },
    titulo: {
        fontSize: 25,
        marginTop: 30

    },
    fundo: {
        flexDirection:"row",
        justifyContent:'space-around'
    },
    switch:{
        marginTop:25
    }
})