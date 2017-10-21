/**
 * Created by coolearth on 17-10-21.
 */
import React,{Component} from 'react';
import {
    View,
    StyleSheet,
    TouchableNativeFeedback
} from 'react-native';

import {
    Badge,
    Text
} from 'react-native-elements';

export default class LearnButtonGroup extends Component{

    render() {
        return (
            <View style={styles.container}>
                <Badge value={3} textStyle={{color:'orange'}}/>
                <Badge containerStyle={{ backgroundColor: 'violet'}}>
                    <Text>User 1</Text>
                </Badge>
                <Badge value={5} onPress={()=>{

                }}/>
                <Badge value={5} component={TouchableNativeFeedback}/>
            </View>
        )
    }
}

const styles=StyleSheet.create({
   container:{
       flex:1,
       justifyContent:'center',
       alignItems:'center',
   }
});