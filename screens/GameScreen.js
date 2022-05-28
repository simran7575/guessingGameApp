import { useState, useEffect } from 'react';
import { View, StyleSheet, Alert, FlatList, Dimensions, useWindowDimensions} from 'react-native';
import Title from '../components/ui/Title';
import NumberContainer from '../components/game/NumberContainer';
import PrimaryButton from '../components/ui/PrimaryButton';
import Card from '../components/ui/Card';
import InstructionText from '../components/ui/InstructionText';
import { Ionicons } from '@expo/vector-icons';
import RenderItemList from '../components/ui/RenderItemList';

function generateRandomGuess(min, max, exclude){
    var randNum = Math.floor(Math.random() * (max-min)) + min;
    if(randNum == exclude){
        return generateRandomGuess(min, max, exclude);
    }
    else{
        return randNum;
    }
  }
  let minBoundary = 1;
  let maxBoundary = 100;
const GameScreen = (props) => {
    //defining state
    const [guessedNumber, setGuessedNumber] = useState(generateRandomGuess(1,100, props.userNumber));
    const [guessedList, setGuessedList] = useState([guessedNumber]);
    const {width, height} = useWindowDimensions();

    function guessingNumberHandler(direction){
        if((direction == "lower" && props.userNumber > guessedNumber) || (direction == "higher" && props.userNumber < guessedNumber) ){
            Alert.alert("Don't lie", "you are giving wrong direction", [{text:"Sorry", style:"destructive"}]);
            return;
        }
        if(direction == "lower"){
            maxBoundary = guessedNumber;
        }
        else{
            minBoundary = guessedNumber+1;
        }
        let newrandNum = generateRandomGuess(minBoundary, maxBoundary, guessedNumber)
        setGuessedNumber(newrandNum);
        setGuessedList(currentList => [newrandNum, ...currentList]);
   }

   


    useEffect(()=>{
        if(props.userNumber == guessedNumber){
            props.isOver(true);
            props.setNumberOfRounds(guessedList.length)
        }
    },[props.userNumber, guessedNumber, props.isOver])



    useEffect(()=>{
        minBoundary = 1;
        maxBoundary = 100;
    },[])

    let content= (
        <>
         <NumberContainer>{guessedNumber}</NumberContainer>
            <Card>
            <InstructionText style={styles.instructionContainer}>Higher or Lower?</InstructionText>
            <View style={styles.buttonsContainer}>
                <View style={styles.buttonContainer}>
                    <PrimaryButton onPress={guessingNumberHandler.bind(this, "lower")}>
                      <Ionicons name="md-remove" size={24} color="white"/>
                    </PrimaryButton>
                </View>
                <View style={styles.buttonContainer}>
                    <PrimaryButton onPress={guessingNumberHandler.bind(this, "higher")}>
                        <Ionicons name="md-add" size={24} color="white"/>
                    </PrimaryButton>
                </View>
            </View>
            </Card>

        </>
    )

    if(height<450){
        content = (
            <>
             <View style={styles.buttonsContainerWide}>
                <View style={styles.buttonContainer}>
                    <PrimaryButton onPress={guessingNumberHandler.bind(this, "lower")}>
                      <Ionicons name="md-remove" size={24} color="white"/>
                    </PrimaryButton>
                </View>
                <NumberContainer>{guessedNumber}</NumberContainer>
                <View style={styles.buttonContainer}>
                    <PrimaryButton onPress={guessingNumberHandler.bind(this, "higher")}>
                        <Ionicons name="md-add" size={24} color="white"/>
                    </PrimaryButton>
                </View>
            </View>
            </>
        )

    }
        
    
    let marginTopList = height < 450 ? 0 : 12;
   let paddingList =height < 450 ? 8 : 24;
   let widthList = height < 450 ? '80%' : '100%';
  
    return (
        <View style={styles.container}>
            <Title>Opponent's Guess</Title>
            {content}
            <View style={[styles.list, {margin : marginTopList, padding:paddingList, width:widthList}]}>
            <FlatList 
            data = {guessedList}
            keyExtractor = {(item, index)=>index.toString()}
            renderItem = {(item)=><RenderItemList item = {item.item}/>}
            />
            </View>
        </View>
    );
};



const styles = StyleSheet.create({
    container: {
        flex:1,
        padding:24,
        marginTop:30,
        alignItems:"center"
    },
    buttonsContainer:{
        flexDirection:"row",
    },
    buttonsContainerWide:{
        flexDirection:"row",
        alignItems:"center"
    },
    instructionContainer:{
        marginBottom:24
    },

    buttonContainer:{
        flex:1
    },
    list:{
        flex:1,
        margin:12,
        padding:24,
        width:"100%"
    }
});


export default GameScreen;
