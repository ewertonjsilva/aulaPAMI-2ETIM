import { StyleSheet } from 'react-native'; 
import { RFValue } from 'react-native-responsive-fontsize';

const styles = StyleSheet.create({
    container: {
        flex: 1, 
        backgroundColor: '#f5f5f5', 
        width: '100%', 
        borderRadius: RFValue(20), 
        alignItems: 'center', 
        padding: RFValue(18), 
    }, 
    titulo: {
        fontSize: RFValue(25), 
        fontWeight: 'bold', 
        color: '#9e9e9e', 
    }, 
    botao: {
        width: '70%', 
        padding: RFValue(10), 
        margin: RFValue(20), 
        backgroundColor: '#9e9e9e', 
        alignItems: 'center', 
        justifyContent: 'center', 
        borderRadius: RFValue(20), 
    }, 
    txtBotao: {
        fontSize: RFValue(20), 
        color: '#f5f5f5', 
    }, 
});

export default styles;


