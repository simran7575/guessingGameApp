import { useState } from 'react';
import { StyleSheet, ImageBackground, SafeAreaView} from 'react-native';
import GameStartScreen from './screens/GameStartScreen';
import { LinearGradient } from 'expo-linear-gradient';
import GameScreen from './screens/GameScreen';
import GameOverScreen from './screens/GameOverScreen';
import Colors from './constants/Colors';
import { useFonts } from 'expo-font';
import AppLoading from 'expo-app-loading';
import { StatusBar } from 'expo-status-bar';

export default function App() {
  const [userInput, setUserInput] = useState("")
  const [gameIsOver, setGameIsOver] = useState(false);
  const [numberOfRounds, setNumberOfRounds] = useState(0);

  const startNewGame = () =>{
    setUserInput("");
    setGameIsOver(false);
    setNumberOfRounds(0);
  }

  let screen = <GameStartScreen setUserInput= {setUserInput}/>

  const [isFontLoaded] = useFonts({
   "open-sans":require("./assets/fonts/OpenSans-Regular.ttf"),
   "open-sans-bold":require("./assets/fonts/OpenSans-Bold.ttf"),
   "black-jack": require("./assets/fonts/blackjack.otf"),
   "country-side": require("./assets/fonts/Countryside-YdKj.ttf"),
   'number-font':require("./assets/fonts/number-font.ttf")
  });

  if(!isFontLoaded){
    return <AppLoading />;
  }

  if(userInput){
     screen = <GameScreen userNumber= {userInput} isOver = {setGameIsOver} setNumberOfRounds={setNumberOfRounds}/>
  }
  if(gameIsOver){
    screen = <GameOverScreen startNewGame={startNewGame} userNumber = {userInput} numberOfRounds={numberOfRounds}/>
  }

  

  return (
    <>
    <StatusBar style='light'/>
    <LinearGradient colors={[ Colors.primary500,Colors.secondary500]} style={styles.rootContainer}>
      <ImageBackground 
      source={require("./assets/dice.png")}  
      resizeMode="cover"
      style={styles.rootContainer} 
      imageStyle={styles.backgroundImage}>
        <SafeAreaView style={styles.rootContainer}>
           {screen}
        </SafeAreaView>
    </ImageBackground>
    </LinearGradient>
    </>
  )
}

const styles = StyleSheet.create({
  rootContainer:{
    flex:1
  },
  backgroundImage:{
    opacity:0.15
  }
});
