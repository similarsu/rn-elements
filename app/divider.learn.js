/**
 * Created by coolearth on 17-10-19.
 */
import React,{Component} from 'react';
import {
    View,
    StyleSheet
} from 'react-native';
import {Divider} from 'react-native-elements';

export default class LearnCheckBox extends Component{

    render(){
        return (
            <View style={styles.container}>
                <Divider />
            </View>
        )
    }
}

const styles=StyleSheet.create({
    container:{
        flex:1,
        alignItems:'stretch',
        justifyContent:'center'
    },
})