import { View, Text, StyleSheet } from 'react-native';


const Title = ({children}) => {
    return (
        <Text style={styles.text}>{children}</Text>
    );
};


const styles = StyleSheet.create({
   
    text:{
    
        fontSize:20,
        color:"white",
        textAlign:"center",
        borderWidth:2,
        borderColor:"white",
        padding :12,
        fontFamily:'country-side',
        width:300,
        maxWidth:"80%",
    }
});


export default Title;
