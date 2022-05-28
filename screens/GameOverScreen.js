import { View, Text, StyleSheet, Image , useWindowDimensions, ScrollView} from 'react-native';
import Title from '../components/ui/Title';
import Colors from '../constants/Colors';
import PrimaryButton from '../components/ui/PrimaryButton';
// create a component
const GameOverScreen = (props) => {

    const {width, height} = useWindowDimensions();
    let imageSize = 300;
    let marginTop = 100;
    if(width < 400){
        imageSize = 150
    }

    if(height < 450){
        imageSize = 80;
        marginTop=10
    }

    let imageStyle={
        width: imageSize,
        height: imageSize,
        borderRadius:imageSize/2
    }

    return (
        <ScrollView style={styles.screen}>
        <View style={[styles.rootContainer, {marginTop:marginTop}]}>
            <Title>GAME OVER!</Title>
           <View style={[styles.imageContainer, {...imageStyle}]}>
               <Image source={require("../assets/success.png")} style={styles.image}/>
           </View>
           <Text style={styles.summaryText}>
               Your phone needed
               <Text style={styles.highlight}> {props.numberOfRounds} </Text> 
               rounds to guess the number 
               <Text style={styles.highlight}> {props.userNumber} </Text>
            .</Text>
            <PrimaryButton onPress={props.startNewGame}>Start New Game</PrimaryButton>

        </View>
        </ScrollView>
    );
};



// define your styles
const styles = StyleSheet.create({
    screen:{
        flex:1
    },
    rootContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        padding:24,
        
    },
    imageContainer:{
        width: 300,
        height:300,
        borderWidth:3,
        borderRadius:150,
        borderColor: Colors.primary800,
        overflow:"hidden",
        margin:36
    },
    image:{
        width:"100%",
        height:'100%'
    },
    summaryText:{
        fontSize:24,
        fontFamily:"black-jack",
        marginBottom:24,
        textAlign:"center"
    },
    highlight:{
        color:Colors.primary700,
        fontWeight:"bold"
    }
});

//make this component available to the app
export default GameOverScreen;
