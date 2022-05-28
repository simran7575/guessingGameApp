import { useState, } from 'react';
import  { View, StyleSheet, TextInput, Alert, Text, useWindowDimensions, KeyboardAvoidingView, ScrollView} from 'react-native';
import PrimaryButton from '../components/ui/PrimaryButton';
import Colors from '../constants/Colors';
import Title from '../components/ui/Title';
import Card from '../components/ui/Card';
import InstructionText from '../components/ui/InstructionText';

function GameStartScreen(props){
    const [enteredNumber, setEnteredNumber] = useState("");
    const { width, height } = useWindowDimensions();

    function enteredNumberHandler(text){
        setEnteredNumber(text)
    }

    function cancelNumberHandler(){
        setEnteredNumber("")
    }

    function confirmInputHandler(){
        let inputNumber = parseInt(enteredNumber);
        if(isNaN(inputNumber) || inputNumber <=0 || inputNumber >99 ){
            Alert.alert("Oops!", "Enter a number between 1 and 99", [{text:"OK", style:"destructive", onPress: cancelNumberHandler }]);
            return;
        }
        props.setUserInput(inputNumber);

    }

    const marginTopDistance = height < 450 ? 50 : 100;
    return(
        <ScrollView style={styles.screen}>
            <KeyboardAvoidingView style={styles.screen} behavior="position">
        <View style={[styles.rootContainer, {marginTop:marginTopDistance}]}>
            <Title>Guess my number</Title>
            <Card>
            <InstructionText>Enter a number</InstructionText>
            <TextInput 
            style={styles.textInputContainer} 
            keyboardType={'number-pad'} 
            autoCapitalize ='none'
            autoCorrect={false}
            maxLength={2}
            value = {enteredNumber}
            textAlign={"center"}
            onChangeText = {enteredNumberHandler}/>
            <View style={styles.buttonsContainer}>
                <View style={styles.buttonContainer}>
                    <PrimaryButton onPress={cancelNumberHandler}>Cancel</PrimaryButton>
                </View>
                <View style={styles.buttonContainer}>
                    <PrimaryButton onPress={confirmInputHandler}>Add</PrimaryButton>
                </View>
            </View>
            </Card>
        </View>
        </KeyboardAvoidingView>
        </ScrollView>
)
}

const styles = StyleSheet.create({
    screen:{
        flex:1
    },
    rootContainer:{
        flex:1,
        alignItems:"center",
        marginTop:100
    },
    textInputContainer:{
        width:50,
        height:50,
        borderBottomColor:Colors.secondary500,
        borderBottomWidth:2,
        color: Colors.secondary500,
        fontSize:36,
        marginVertical:8,
        fontFamily:'number-font',
        textAlign:"center",
     

    },
    buttonsContainer:{
        flexDirection:"row",
    },

    buttonContainer:{
        flex:1,
       
    }

        
})

export default GameStartScreen;