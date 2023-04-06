import { SafeAreaView, FlatList, StyleSheet } from 'react-native';
//import ModalApp from './src/telas/Modal/modal';
//import { useEffect, useState } from 'react';
//import { Nota } from './src/telas/Modal/Nota';
//import { buscaNota, criarTabela } from './src/telas/servicos/Nota';
import { StatusBar } from 'expo-status-bar';
import AppRotas from './src/rotas/AppRotas';

export default function App() {

  /*const [notas, setNotas] = useState([])
  //const [notaSelecionada, setNotaSelecionada] = useState({})

  useEffect(() => {
    criarTabela()
  }, [])

  async function mostraNotas() {
    const todasNotas = await buscaNota()
    setNotas(todasNotas)
  }*/

  return (
    <SafeAreaView style={estilos.app}>
      <AppRotas/>
      <StatusBar />
    </SafeAreaView>
  );
}
  /*return (
    <SafeAreaView style={estilos.app}>
      <FlatList
        data={notas}
        renderItem={(nota) => <Nota {...nota} setNotaSelecionada={setNotaSelecionada} />}
        keyExtractor={nota => nota.id}
      />
      <ModalApp mostraNotas={mostraNotas} notaSelecionada={notaSelecionada} setNotaSelecionada={setNotaSelecionada} />
      <StatusBar />
    </SafeAreaView>
  );
}*/
const estilos = StyleSheet.create({
  app: {
    flex: 1,
  }
})




