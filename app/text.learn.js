/**
 * Created by coolearth on 17-10-19.
 */
import React,{Component} from 'react';
import {
    View,
    StyleSheet
} from 'react-native';
import {Text} from 'react-native-elements';

export default class LearnText extends Component{
    render(){
        return (
            <View style={styles.container}>
                <Text>哈哈</Text>
                <Text h1={true}>哈哈</Text>
                <Text h1={false}>哈哈</Text>
                <Text h2={true}>哈哈</Text>
                <Text h3={true}>哈哈</Text>
                <Text h4={true}>哈哈</Text>
                <Text h4={true} h1={true}>哈哈</Text>
            </View>
        )
    }
}

const styles=StyleSheet.create({
    container:{
        flex:1,
        alignItems:'center',
        justifyContent:'center',
    }
})