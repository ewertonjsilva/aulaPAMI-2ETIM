import { View, Text, Image } from 'react-native'; 

import Mensagem from './mensagem';

import logo from '../../../assets/002-1-react-native.png'; 

import styles from './styles';

export default function Atividade2 () { 

    return(
        <View style={styles.container}>
            <Text style={styles.titulo}>
                Atividade 2
            </Text>
            <Image source={logo} style={styles.imagem} /> 

            <Mensagem nome={'Ewerton'} idade={27} />
            <Mensagem nome={'Werton'} idade={17} />
            <Mensagem nome={'Erton'} idade={7} />
        </View>
    );
}

