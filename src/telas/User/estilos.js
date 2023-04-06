import { StyleSheet } from "react-native"
import { tema } from "../../estilosGlobais"

const estilos = StyleSheet.create({
    topo: {
        width: 250,
        height: 60,
        marginTop: 60,
        marginBottom:10
        
    },
    fundo: {
        alignItems: "center",
        backgroundColor: tema.fundo
    },
    texto: {
        fontSize: 25,
        marginBottom: 20
    },
    fundo1: {
        alignItems: 'center',
        marginTop: 50
    },
    botoes: {
        borderWidth: 2,
        marginLeft: 35,
        marginRight: 35,
        alignItems: "center",
        padding: 10,
        borderColor: '#27408B',
        borderRadius: 18

    },
    digita: {
        fontSize: 18,
        marginTop: 30,
        marginBottom: 5,
        marginLeft: 25

    },
    sobre: {
        backgroundColor: '#27408B',
        borderRadius: 55,
        marginLeft: 105,
        marginRight: 105,
        padding: 10,
        marginTop: 120,
        alignItems: 'center',


    },
    texto1: {
        fontSize: 25,
        color: '#FFFFFF',
        fontWeight: 'bold'

    },
    texto2: {
        color: '#000000',
        fontSize: 25
    }

})
export default estilos