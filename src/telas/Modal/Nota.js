import React from "react";
import { Text, View, StyleSheet, TouchableOpacity } from "react-native";

export function Nota({ item, setNotaSelecionada }) {
    return (
        <TouchableOpacity style={estilos.fundo} onPress={() => setNotaSelecionada(item)}>
            <View style={estilos.titulo1}>
                <Text style={estilos.titulo}>{item.titulo}</Text>
            </View>
            <View style={estilos.fundo1}>
                <Text style={estilos.categoria}>{item.categoria}</Text>
                <Text style={estilos.texto}>{item.texto}</Text>
            </View>
        </TouchableOpacity>

    )
}

const estilos = StyleSheet.create({
    fundo: {
        elevation: 1,
        marginTop: 20
    },
    fundo1: {
        borderEndWidth: 1,
        borderLeftWidth: 1,
        borderBottomWidth: 1,
        marginBottom: 5,
        marginLeft: 45,
        marginRight: 45,
        borderColor: '#59C1BD',
    },
    titulo: {
        fontSize: 20,
        textAlign: "center",
        color: "#FFFFFF",

    },
    categoria: {
        textAlign: 'center',
        backgroundColor: "#79ae92",
        marginTop: 15,
        marginLeft: 210,
        borderRadius: 50,
        fontSize: 15,
        marginRight: 5

    },
    texto: {
        textAlign: "center",
        marginBottom: 8,
        marginTop: 10
    },
    titulo1: {
        backgroundColor: "#1c5560",
        padding: 5,
        borderRadius: 15,
        marginLeft: 20,
        marginRight: 20,
    }

})