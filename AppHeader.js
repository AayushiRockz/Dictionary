import React from 'react';
import{Components} from 'react';
import{View,Text,StyleSheet} from 'react-native';

export default class AppHeader extends React.Component{
    render(){
        return(
<View style={styles.container}>
    <Text style={styles.text}>
        Dictionary App
    </Text>
</View>

        );
    }
}


const styles = StyleSheet.create({
    text:{color:'pink',
    
    fontSize:50,
    fontWeight:'bold',
    marginTop:2,
    alignSelf:'center',
    justifyContent:'flex-start'

},
container:{backgroundColor:'magenta'}
})