/**
 * Created by coolearth on 17-10-19.
 */
import React,{Component} from 'react';
import {
    View,
    StyleSheet
} from 'react-native';
import {SearchBar} from 'react-native-elements';

export default class LearnSearchbar extends Component{
    constructor(){
        super();
    }

    render(){
        return (
            <View style={styles.container}>
                <SearchBar clearIcon={true}/>
                <SearchBar noIcon={true}/>
                <SearchBar placeholder={"请输入"}/>
                <SearchBar placeholder={"请输入"} round={true}/>
                <SearchBar placeholder={"请输入"} round={true} lightTheme={true}/>
                <SearchBar placeholder={"请输入"} round={true} lightTheme={true} showLoadingIcon={true}/>
                <SearchBar placeholder={"请输入"} round={true} lightTheme={true} clearIcon={true}/>
            </View>
        )
    }
}

const styles=StyleSheet.create({
    container:{
        flex:1,
        alignItems:'stretch',
        justifyContent:'center',
        backgroundColor:'#ccc'
    },
})