import React, { useEffect, useState } from "react";
import { Modal, StyleSheet, Text, View, TouchableOpacity, TextInput } from "react-native";
import { Picker } from "@react-native-picker/picker";
import { adicionaNota, atualizarNota, removeNota } from "../servicos/Nota";

export default function ModalApp({ mostraNotas, notaSelecionada, setNotaSelecionada }) {

    useEffect(() => {
        if (notaSelecionada.id) {
            preencheModal()
            setNotaParaAtualizar(true)
            setModalVisible(true)
            return
        }
        setNotaParaAtualizar(false)
    }, [notaSelecionada])

    const [modalVisible, setModalVisible] = useState(false);
    const [texto, setTexto] = useState("");
    const [titulo, setTitulo] = useState("")
    const [categoria, setCategoria] = useState("Pessoal")
    const [notaParaAtualizar, setNotaParaAtualizar] = useState(false)

    async function salvaNota() {
        const umaNota = {
            titulo: titulo,
            categoria: categoria,
            texto: texto
        }
        await adicionaNota(umaNota)
        mostraNotas()
        setModalVisible(false)
    }
    function preencheModal() {
        setTitulo(notaSelecionada.titulo)
        setCategoria(notaSelecionada.categoria)
        setTexto(notaSelecionada.texto)
    }
    function limpaModal() {
        setTitulo("")
        setCategoria("Pessoal")
        setTexto("")
        setNotaSelecionada({})
        setModalVisible(false)
    }
    async function modificaNota() {
        const umaNota = {
            titulo: titulo,
            categoria: categoria,
            texto: texto,
            id: notaSelecionada.id,
        }
        await atualizarNota(umaNota)
        mostraNotas()
        setModalVisible(false)
    }

    async function apagaNota() {
        await removeNota(notaSelecionada)
        mostraNotas()
        limpaModal()
    }

    return (
        <View style={estilos.central}>

            <Modal
                animationType="slide"
                transparent={true}
                visible={modalVisible}
                onRequestClose={() => {
                    setModalVisible(false)
                }}
            >
                <View style={estilos.tudo}>
                    <View style={estilos.inicio}>
                        <Text style={estilos.texto1}>Criar Nota 📝</Text>
                    </View>
                    <View style={estilos.corpo}>
                        <Text style={estilos.texto2}>Titulo</Text>
                    </View>
                    <TextInput style={estilos.circulo}
                        onChangeText={novoTitulo => setTitulo(novoTitulo)}
                        placeholder='Digite um titulo'
                        value={titulo}
                    />
                    <TextInput style={estilos.circulo1}
                        multiline={true}
                        numberOfLines={3}
                        onChangeText={novoTexto => setTexto(novoTexto)}
                        placeholder="Digite aqui seu lembrete"
                        value={texto}
                    />
                    <View style={estilos.corpo}>
                        <Text style={estilos.texto2}>Categoria</Text>
                    </View>
                    <View >
                        <Picker
                            selectedValue={categoria}
                            onValueChange={novaCategoria => setCategoria(novaCategoria)}
                            style={estilos.picker}
                        >
                            <Picker.Item label="Pessoal" value="Pessoal" />
                            <Picker.Item label="Trabalho" value="Trabalho" />
                            <Picker.Item label="Outros" value="Outros" />
                        </Picker>
                    </View>
                    <View style={estilos.tudo2}>
                        <View style={estilos.central0}>
                            <TouchableOpacity onPress={() => {
                                notaParaAtualizar ? modificaNota() : salvaNota()
                            }} style={estilos.central2}
                            >
                                <Text style={estilos.texto}>✔️</Text>
                            </TouchableOpacity>

                            {notaParaAtualizar ?
                                <TouchableOpacity onPress={() => { apagaNota() }} style={estilos.central2}
                                >
                                    <Text style={estilos.texto}>🚫</Text>
                                </TouchableOpacity> : <></>
                            }

                            <TouchableOpacity onPress={() => { limpaModal() }} style={estilos.central2}>
                                <Text style={estilos.texto}>❌</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>
            </Modal>
            <TouchableOpacity onPress={() => { setModalVisible(true) }} >
                <Text style={estilos.principal}>+</Text>
            </TouchableOpacity>
        </View>
    )
};

const estilos = StyleSheet.create({
    central: {
        marginLeft: 350,
        marginRight: 10,
        borderWidth: 2,
        borderColor: '#4682B4',
        borderRadius: 50,
        padding: 5,
        marginBottom: 10,

    },
    tudo: {
        elevation: 3,
        marginTop: 90,
        marginLeft: 15,
        marginRight: 15,
        borderRadius: 5,
        borderColor: '#59C1BD',
        backgroundColor: "#FFFFFF"
    },
    tudo2: {
        borderTopWidth: 1,
        borderColor: "#000000",
        marginRight: 15,
        marginLeft: 15

    },
    principal: {
        fontSize: 25,
        marginLeft: 11,

    },
    texto: {
        fontSize: 20,
        textAlign: "center",

    },
    central0: {
        flexDirection: 'row',
        marginLeft: 90,
        marginBottom: 10,

    },
    central2: {
        marginTop: 15,
        borderRadius: 15,
        padding: 15,
        marginLeft: 15,
        backgroundColor: "#83e5d8",
        padding: 8

    },
    texto1: {
        fontSize: 25,
        marginBottom: 5,
    },
    texto2: {
        fontSize: 20,
        marginTop: 20
    },
    corpo: {
        alignItems: "center",
    },
    circulo: {
        padding: 15,
        textAlign: "center",
        borderRadius: 30,
        borderColor: '#59C1BD',
        borderBottomWidth: 1,
        marginBottom: 1,
        marginBottom: 15

    },
    circulo1: {
        marginRight: 60,
        marginLeft: 60,
        padding: 30,
        textAlign: "center",
        borderWidth: 1,
        borderRadius: 30,
        borderColor: '#59C1BD',
    },
    inicio: {
        backgroundColor: "#59C1BD",
        padding: 5,
        alignItems: "center",
        borderRadius: 50,
        marginTop: 20,
        marginRight: 80,
        marginLeft: 80,

    },
    picker: {
        marginLeft: 130,
        marginRight: 100,

    }


});
