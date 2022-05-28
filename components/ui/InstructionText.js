import {Text, StyleSheet} from 'react-native';
import Colors from '../../constants/Colors';
function InstructionText({children, style}){
    return(
        <Text style={[styles.text, style]}>{children}</Text>
    )
}

const styles = StyleSheet.create({
    text:{
        fontSize:24,
        color:Colors.secondary500,
        fontFamily:"black-jack"
    }
});

export default InstructionText;