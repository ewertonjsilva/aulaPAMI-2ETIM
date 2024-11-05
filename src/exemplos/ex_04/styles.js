import { StyleSheet } from 'react-native';  
import { RFValue } from 'react-native-responsive-fontsize';

const styles = StyleSheet.create({
    container: {
        width: '100%', 
        height: '100%', 
        alignItems: 'center', 
        backgroundColor: '#ffcdd2', 
        padding: RFValue(8), 
    }, 
    titulo: {
        fontSize: RFValue(25), 
        fontWeight: 'bold', 
        color: '#b71c1c', 
        margin: RFValue(20), 
        marginBottom: RFValue(38), 
    }, 
    texto: {
        fontSize: RFValue(20), 
        marginVertical: RFValue(10), 
        padding: RFValue(5), 
        color: '#b71c1c', 
    }, 
    input: {
        fontSize: RFValue(20), 
        width: '80%', 
        textAlign: 'center', 
        borderWidth: RFValue(3), 
        borderColor: '#b71c1c', 
        borderRadius: RFValue(20), 
        padding: RFValue(5), 
    }, 
    linha: { 
        borderBottomWidth: RFValue(3), 
        borderColor: '#b71c1c', 
        marginVertical: RFValue(20), 
        width: '100%'
    }, 
    botao: {
        width: '80%', 
        padding: RFValue(16), 
        alignItems: 'center',  
        borderRadius: RFValue(20), 
        backgroundColor: '#b71c1c', 
        marginVertical: RFValue(20), 
    }, 
    botaoPress: {
        backgroundColor: '#fff', 
    }, 
    txtBotao: {
        color: '#ffcdd2', 
        fontSize: RFValue(16),  
    },
    txtBotaoPress: {
        color: '#b71c1c',       
    }, 
}); 

export default styles;