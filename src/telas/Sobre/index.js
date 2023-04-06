import React from "react";
import { View, Text, Image } from "react-native";
import planlog from '../../../assets/Img/PlanLog.png'
import estilos from "./estilos";

export default function Sobre() {
    return <View>
        <Text style={estilos.cartao}>Sobre</Text>
        <View style={estilos.fundo}>
            <Text style={estilos.titulo}>Assim nasce o PRE -APP</Text>
            <Text style={estilos.titulo1}> A plataforma foi desenvolvida para que você JOVEM, PCD e EMPRESA se conectem de uma forma diferente e mais eficiente. Queremos resolver problemas relacionados à contratação de pessoas e à sua inserção no mercado de trabalho ao mesmo tempo que fornecemos um ambiente para uma escolha eficaz.</Text>
        </View>
        <Image source={planlog} style={estilos.footer} />
    </View>

}