/**
 * Created by coolearth on 17-10-19.
 */
import React,{Component} from 'react';
import {
    View,
    StyleSheet
} from 'react-native';
import {Button} from 'react-native-elements';

export default class LearnButton extends Component{
    render(){
        return (
            <View style={styles.container}>
                <Button title={"按钮"}/>
                <Button raised={true} title={"按钮"} icon={{name:'cached'}}/>
                <Button large={true} raised={true} title={"按钮"} icon={{name:'cached'}}/>
                <Button large={true} raised={true} title={"按钮"} iconRight={{name:'cached'}}/>
                <Button borderRadius={4} large={true} title={"按钮"} iconRight={{name:'cached'}}/>
            </View>
        )
    }
}

const styles=StyleSheet.create({
    container:{
        flex:1,
        alignItems:'center',
        justifyContent:'space-between',
    },
})