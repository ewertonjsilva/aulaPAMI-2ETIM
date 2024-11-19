import { StyleSheet } from 'react-native'; 
import { RFValue } from 'react-native-responsive-fontsize';

const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center', 
      backgroundColor: '#FF80AB',
      padding: RFValue(8), 
      width: '100%', 
      borderRadius: RFValue(20), 
    },
    titulo: {
      margin: RFValue(6),
      fontSize: RFValue(28),
      fontWeight: 'bold',
      textAlign: 'center', 
      color: '#C51162', 
    },
    txtSaida: {
      margin: RFValue(6), 
      fontSize: RFValue(20), 
      fontWeight: 'bold', 
      textAlign: 'center', 
      color: '#E91E63',     
    }, 
    txtEntrada: {
      borderWidth: RFValue(4), 
      textAlign: 'center', 
      fontSize: RFValue(20), 
      borderColor: '#E91E63', 
      // height: 50, 
      color: '#E53935', 
      borderRadius: RFValue(10), 
      marginTop: RFValue(10), 
      padding: RFValue(10)
    }, 
    button: {
      backgroundColor: '#E91E63', 
      height: RFValue(56), 
      justifyContent: 'center', 
      borderRadius: RFValue(10), 
      marginTop: RFValue(20), 
      width: '100%', 
    }, 
    buttonTouch: {
        backgroundColor: '#C51162', 
    }, 
    textButton: {
      fontSize: RFValue(28), 
      color: '#FF80AB', 
      textAlign: 'center', 
    }, 
    textLabel: {
      fontSize: RFValue(15), 
      fontWeight: 'bold', 
      color: '#C51162',     
    }, 
  });
  
  export default styles;