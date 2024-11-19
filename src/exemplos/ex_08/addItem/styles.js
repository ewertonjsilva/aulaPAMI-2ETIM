import { StyleSheet } from    'react-native'; 
import { RFValue } from 'react-native-responsive-fontsize';

const styles = StyleSheet.create({
    input: {
        height: RFValue(60), 
        padding: RFValue(8), 
        fontSize: RFValue(18), 
    }, 
    botao: {
        backgroundColor: '#81d4fa', 
        padding: RFValue(10), 
        margin: RFValue(10), 
    }, 
    btnPress: {
        backgroundColor: '#b3e5fc',
    }, 
    txtBotao: {
        color: '#01579b', 
        fontSize: RFValue(23), 
        textAlign: 'center',         
    }, 
    icone: {
        paddingRight: RFValue(10),
    }, 
});

export default styles;