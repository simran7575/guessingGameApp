import { View, Text, StyleSheet, Dimensions } from 'react-native';
import Colors from '../../constants/Colors';
// create a component
const NumberContainer = ({children}) => {
    return (
        <View style={styles.container}>
            <Text style={styles.text}>{children}</Text>
        </View>
    );
};

const deviceWidth = Dimensions.get("window").width;
const styles = StyleSheet.create({
    container: {
        borderWidth:4,
        borderColor:Colors.secondary500,
        margin: deviceWidth <380 ? 12 : 24,
        padding:deviceWidth <380 ? 12 : 24,
        alignItems:"center",
        justifyContent:"center",
        borderRadius:10,
    
    },
    text:{
        fontSize: deviceWidth <380 ? 18 : 36,
        color: Colors.secondary500,
       fontFamily:'number-font',
        textAlign:"center"
    }
});


export default NumberContainer;
