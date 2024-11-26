import { StyleSheet } from 'react-native';
import { RFValue } from 'react-native-responsive-fontsize';

const styles = StyleSheet.create({
    container: {
        flex: 1, 
        backgroundColor: '#fafafa', 
        width: '100%', 
        borderRadius: RFValue(20), 
        alignItems: 'center', 
        padding: RFValue(20), 
    }, 
    titulo: {
        fontSize: 30, 
        fontWeight: 'bold',         
    }, 
    botao: {
        width: '80%', 
        padding: RFValue(10), 
        margin: RFValue(20), 
        backgroundColor: '#000', 
        alignItems: 'center', 
        justifyContent: 'center', 
        borderRadius: RFValue(20), 
    }, 
    txtBotao: {
        fontSize: RFValue(22), 
        color: '#fafafa', 
    }, 
    containerLadoLado: {
        // borderWidth: 3, 
        width: '80%', 
        // height: 200, 
        marginTop: RFValue(20), 
        flexDirection: 'row', 
        justifyContent: 'space-between', 
        alignItems: 'center', 
    }, 
    botaoContainer: {
        width: '30%', 
        marginHorizontal: 0, 
    }, 
});

export default styles;