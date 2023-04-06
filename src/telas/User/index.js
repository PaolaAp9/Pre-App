import React from "react";
import { Text, View, Image, TextInput, TouchableOpacity } from "react-native";
import estilos from "./estilos";
import logo from '../../../assets/Img/Logo.png'

export default function User() {
    const [username, setUsername] = React.useState('');
    const [password, setPassword] = React.useState('');

    return <View>
        <View style={estilos.fundo}>
            <Image source={logo} style={estilos.topo} />
        </View>
        <View style={estilos.fundo1}>
            <Text style={estilos.texto}>Faça seu Login </Text>
        </View>
        <View>
            <Text style={estilos.digita}>Email do Usuário:</Text>
            <View style={estilos.botoes}>
                <TextInput placeholder="Username" value={username} onChangeText={setUsername} style={estilos.texto2}></TextInput>
            </View>
            <Text style={estilos.digita}>Senha do Usuário:</Text>
            <View style={estilos.botoes}>
                <TextInput placeholder="Password" value={password} onChangeText={setPassword} secureTextEntry style={estilos.texto2}></TextInput>
            </View>
            <TouchableOpacity style={estilos.sobre}>
                <Text style={estilos.texto1}>Confirmar</Text>
            </TouchableOpacity>
        </View>

    </View>
}