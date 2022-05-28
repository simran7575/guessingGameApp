import { View, Text, StyleSheet } from 'react-native';
import Colors from '../../constants/Colors';

const RenderItemList = (props) => {
    return (
        <View style={styles.container}>
            <Text style={styles.text}>{props.item}</Text>
        </View>
    );
};


const styles = StyleSheet.create({
    container: {
        backgroundColor:Colors.primary600,
        paddingVertical:12,
        paddingHorizontal:24,
        borderWidth:1,
        borderColor:Colors.secondary500,
        borderRadius:20,
        marginVertical:5,
        width:"100%"
      
    },
    text:{
        fontSize:24,
        fontFamily:"number-font",
        textAlign:"center",
        color:Colors.secondary500
    }
});

//make this component available to the app
export default RenderItemList;
