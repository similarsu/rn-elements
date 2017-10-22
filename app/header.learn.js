/**
 * Created by coolearth on 17-10-19.
 */
import React,{Component} from 'react';
import {
    View,
    StyleSheet
} from 'react-native';
import {Header} from 'react-native-elements';

export default class LearnHeader extends Component{


    render(){
        return (
            <View style={styles.container}>
                <Header
                    statusBarProps={{barStyle:'light-content'}}
                    leftComponent={{icon:'menu',color:'#fff'}}
                    centerComponent={{text:'欢迎你',style:{color:'#FFF'}}}
                    rightComponent={{icon:'home',color:'#fff'}}
                />

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