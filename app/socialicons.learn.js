/**
 * Created by coolearth on 17-10-19.
 */
import React,{Component} from 'react';
import {
    View,
    StyleSheet
} from 'react-native';
import {SocialIcon} from 'react-native-elements';

export default class LearnSocialIcon extends Component{
    constructor(){
        super();
    }

    render(){
        return (
            <View style={styles.container}>
                <SocialIcon type={'twitter'}/>
                <SocialIcon type={'twitter'} raised={false}/>
                <SocialIcon type={'twitter'} light={true}/>
                <SocialIcon type={'twitter'} light={true} raised={false}/>
                <SocialIcon type={'twitter'} button={true} title={'登录tw'}/>
                <SocialIcon type={'twitter'} button={true} title={'登录tw'} light={true}/>
                <SocialIcon type={'twitter'} button={true} title={'登录tw'} loading={true} />
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