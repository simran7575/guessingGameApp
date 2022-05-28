import { View, Text, StyleSheet, Pressable} from 'react-native';
import Colors from '../../constants/Colors';

function PrimaryButton({children, onPress}){
return(
<View style={styles.buttonContainer}>
    <Pressable 
    style={({pressed})=> pressed? [styles.innerContainer, styles.pressable] : styles.innerContainer}
    android_ripple={{color:Colors.primary600}} 
    onPress={onPress}
    >
    <Text style={styles.buttonText}>{children}</Text>
    </Pressable>
</View>
)
}

const styles = StyleSheet.create({
    buttonContainer:{
        borderRadius:28,
        margin:5,
        overflow:"hidden"
      
    }, 
    buttonText:{
        color:Colors.primary400,
        fontSize:16,
        textAlign:"center",
        fontFamily:"black-jack"
    },
    innerContainer:{
        backgroundColor:Colors.primary600,
        paddingVertical:8,
        paddingHorizontal:16,

    },
    pressable:{
        opacity:0.75
    }
})

export default PrimaryButton;
