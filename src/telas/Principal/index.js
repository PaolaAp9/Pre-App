import React from "react";
import { View, Image, Text, TouchableOpacity } from "react-native";
import logo from '../../../assets/Img/Logo.png';
import planetas from '../../../assets/Img/Planetas.png'
import estilos from "./estilos";
import { useNavigation } from "@react-navigation/native";

export default function Principal() {
    const navigation = useNavigation();

    function nativeToLogin() {
        navigation.navigate('User')
    }
    function nativeToCadastre() {
        navigation.navigate('Cadastre');
    }
    function nativeToSobre() {
        navigation.navigate('Sobre');
    }
    function nativeToConfiguracao() {
        navigation.navigate('Configuração');
    }

    return <View>
        <View style={estilos.fundo}>
            <Image source={logo} style={estilos.topo} />
        </View>
        <Text style={estilos.frase}>BEM VINDO</Text>
        <TouchableOpacity style={estilos.sobre} onPress={nativeToSobre} >
            <Text>Sobre</Text>
        </TouchableOpacity>
        <TouchableOpacity style={estilos.botoes} onPress={nativeToLogin} >
            <Text style={estilos.letra}>Entre</Text>
        </TouchableOpacity>
        <TouchableOpacity style={estilos.botoes} onPress={nativeToCadastre} >
            <Text style={estilos.letra}>Cadastre-se</Text>
        </TouchableOpacity>
        <TouchableOpacity style={estilos.botoes}>
            <Text style={estilos.letra}>Empresa</Text>
        </TouchableOpacity>
        <TouchableOpacity style={estilos.configuração} onPress={nativeToConfiguracao} >
            <Text style={estilos.confic}>⚙️</Text>
        </TouchableOpacity>
        <View>
            <Image source={planetas} style={estilos.footer} />
        </View>

    </View>

}