import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native'; 

// npm i expo-constants
import Constants from 'expo-constants';

// npm i react-native-responsive-fontsize

import Exemplo1 from './src/exemplos/ex_01'; 
import Exemplo2 from './src/exemplos/ex_02';
import Exemplo3 from './src/exemplos/ex_03';
import Exemplo4 from './src/exemplos/ex_04';

import Atividade1 from './src/atividades/atv_01';
import Atividade2 from './src/atividades/atv_02';
import Atividade3 from './src/atividades/atv_03';
import Atividade4 from './src/atividades/atv_04';

export default function App() {
  return (
    <View style={styles.container}>
      <Exemplo4 />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#aaa',
    padding: 16, 
    paddingTop: Constants.statusBarHeight || 16,     
    // alignItems: 'center',
    // justifyContent: 'center',
  },
});
