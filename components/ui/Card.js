import {View, StyleSheet, Dimensions} from 'react-native';
import Colors from '../../constants/Colors';

function Card({children}){
    return(
    <View style={styles.inputContainer}>{children}</View>
    )
}

const deviceWidth = Dimensions.get("window").width;

const styles= StyleSheet.create({
    inputContainer:{
        padding:16,
        marginTop:deviceWidth <380 ? 18 : 36,
        marginHorizontal:25,
        backgroundColor: Colors.primary800 ,
        borderRadius:10,
        alignItems:"center",
        elevation:8

    },
})

export default Card;
