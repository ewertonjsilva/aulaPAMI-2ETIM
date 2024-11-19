import { StyleSheet } from 'react-native'; 
import { RFValue } from 'react-native-responsive-fontsize';

const styles = StyleSheet.create({
    botao: {
        backgroundColor: '#b3e5fc', 
        padding: RFValue(12), 
        borderColor: '#81d4fa', 
        borderBottomWidth: RFValue(2), 
        flexDirection: 'row', 
        alignItems: 'center', 
        justifyContent: 'space-between'
    }, 
    btnPress: {
        backgroundColor: '#e1f5fe',
    }, 
    txtNome: {
        fontSize: RFValue(20), 
        color: '#01579b', 
    }, 
}); 

export default styles;