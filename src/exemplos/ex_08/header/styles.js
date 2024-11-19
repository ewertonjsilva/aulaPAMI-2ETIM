import { StyleSheet } from 'react-native';  
import { RFValue } from 'react-native-responsive-fontsize';

const styles = StyleSheet.create({
    container: {
        height: RFValue(56), 
        padding: RFValue(15), 
        backgroundColor: '#01579b'
    }, 
    texto: {
        color: '#e1f5fe', 
        fontSize: RFValue(20), 
        textAlign: 'center', 
    }, 
}); 

export default styles;