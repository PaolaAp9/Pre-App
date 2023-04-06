import React from "react";
import { View, Text, TextInput, ScrollView, TouchableOpacity, } from "react-native";
import estilos from "./estilos";

export default function Cadastre() {

     const [username, setUsername] = React.useState('');
     const [useremail, setUseremail] = React.useState('');
     const [userdate, setUserdate] = React.useState('');
     const [usercel, setUsercel] = React.useState('');
     const [usercpf, setUsercpf] = React.useState('');
     const [userrg, setUserrg] = React.useState('');
     const [usernac, setUsernac] = React.useState('');
     const [usercep, setUsercep] = React.useState('');
     const [userend, setUserend] = React.useState('');
     const [usernum, setUsernum] = React.useState('');
     const [usercompl, setUsercomple] = React.useState('');
     const [userbairro, setUserbairro] = React.useState('');
     const [userpcd, setUserpcd] = React.useState('');
     const [usergen, setUsergenero] = React.useState('');


     return <ScrollView>
          <View>
               <View style={estilos.fundo}>
                    <Text style={estilos.letra1}>Cadastre-se:</Text>
               </View>

               <Text style={estilos.letra}>Venham preencher seus dados para fazer parte do PRÉAPP</Text>

               <View style={estilos.botoes}>
                    <TextInput placeholder="Nome Completo" autoCapitalize="Nome Completo" value={username} onChangeText={setUsername} style={estilos.texto2}></TextInput>
               </View>
               <View style={estilos.botoes}>
                    <TextInput placeholder="Email" autoCapitalize="Email" value={useremail} onChangeText={setUseremail} style={estilos.texto2}></TextInput>
               </View>
               <View style={estilos.linha1}>
                    <View style={estilos.compri1}>
                         <View style={estilos.botoes}>
                              <TextInput placeholder="CPF" autoCapitalize="CPF" value={usercpf} onChangeText={setUsercpf} style={estilos.texto2}></TextInput>
                         </View>
                    </View>
                    <View style={estilos.compri2}>
                         <View style={estilos.botoes}>
                              <TextInput placeholder="RG" autoCapitalize="RG" value={userrg} onChangeText={setUserrg} style={estilos.texto2}></TextInput>
                         </View>
                    </View>
               </View>
               <View style={estilos.linha1}>
                    <View style={estilos.compri3}>
                         <View style={estilos.botoes}>
                              <TextInput placeholder="Data de Nascimento" autoCapitalize="Data de Nascimento" value={userdate} onChangeText={setUserdate} style={estilos.texto2}></TextInput>
                         </View>
                    </View>
                    <View style={estilos.compri4}>
                         <View style={estilos.botoes}>
                              <TextInput placeholder="Celular" autoCapitalize="Celular" value={usercel} onChangeText={setUsercel} style={estilos.texto2}></TextInput>
                         </View>
                    </View>
               </View>
               <View style={estilos.botoes}>
                    <TextInput placeholder="Nacionalidade" autoCapitalize="Nacionalidade" value={usernac} onChangeText={setUsernac} style={estilos.texto2}></TextInput>
               </View>
               <View style={estilos.linha1}>
                    <View style={estilos.compri5}>
                         <View style={estilos.botoes}>
                              <TextInput placeholder="CEP" autoCapitalize="CEP" value={usercep} onChangeText={setUsercep} style={estilos.texto2}></TextInput>
                         </View>
                    </View>
                    <View style={estilos.compri6}>
                         <View style={estilos.botoes}>
                              <TextInput placeholder="Endereço Atual" autoCapitalize="Endereço Atual" value={userend} onChangeText={setUserend} style={estilos.texto2}></TextInput>
                         </View>
                    </View>
                    <View style={estilos.compri7}>
                         <View style={estilos.botoes}>
                              <TextInput placeholder="N°" autoCapitalize="N°" value={usernum} onChangeText={setUsernum} style={estilos.texto2}></TextInput>
                         </View>
                    </View>
               </View>

               <View style={estilos.linha1}>
                    <View style={estilos.compri9}>
                         <View style={estilos.botoes}>
                              <TextInput placeholder="Bairro" autoCapitalize="Bairro" value={userbairro} onChangeText={setUserbairro} style={estilos.texto2}></TextInput>
                         </View>
                    </View>
                    <View style={estilos.compri8}>
                         <View style={estilos.botoes}>
                              <TextInput placeholder="Complemento" autoCapitalize="Complemento" value={usercompl} onChangeText={setUsercomple} style={estilos.texto2}></TextInput>
                         </View>
                    </View>
               </View>
               <View style={estilos.linha1}>
                    <View style={estilos.compri}>
                         <View style={estilos.botoes}>
                              <TextInput placeholder="PCD" autoCapitalize="PCD" value={userpcd} onChangeText={setUserpcd} style={estilos.texto2} ></TextInput>
                         </View>
                    </View>
                    <View>
                         <TouchableOpacity>
                              <Text style={estilos.letra3}>Anexar Laudo PCD</Text>
                         </TouchableOpacity>
                    </View>
               </View>
               <View style={estilos.botoes}>
                    <TextInput placeholder="Defina seu Gênero" autoCapitalize="Defina seu Gênero" value={usergen} onChangeText={setUsergenero} style={estilos.texto2}></TextInput>
               </View>
               <TouchableOpacity>
                    <Text style={estilos.letra2}>Confirmar</Text>
               </TouchableOpacity>

          </View>
     </ScrollView>
}