import { StyleSheet } from "react-native"

const estilos = StyleSheet.create({
    topo: {
        width: 250,
        height: 60,
        marginTop: 60
    },
    fundo: {
        alignItems: "center"
    },
    frase: {
        fontWeight: 'bold',
        fontSize: 30,
        textAlign: 'center',
        marginTop: 50,
        marginBottom: 20
    },
    footer: {
        width: '100%',
        height: 330,
    },
    botoes: {
        marginTop: 20,
        borderRadius: 55,
        marginLeft: 55,
        marginRight: 55,
        alignItems: "center",
        backgroundColor: '#27408B',
        padding: 10
    },
    letra: {
        color: '#FFFFFF',
        fontSize: 25
    },
    sobre: {
        alignItems:"center",
        marginTop: 10,
    },
    confic:{
        fontSize: 25,
    },
    configuração:{
        alignItems:"flex-end",
        marginRight:15
    }
})

export default estilos;