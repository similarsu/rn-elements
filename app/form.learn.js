/**
 * Created by coolearth on 17-10-19.
 */
import React,{Component} from 'react';
import {
    View,
    StyleSheet
} from 'react-native';
import {FormInput,FormLabel,FormValidationMessage,Button} from 'react-native-elements';

export default class LearnForm extends Component{

    constructor(){
        super();
        this.state={
            name:null,
            error:null,
        }
    }

    render(){
        return (
            <View style={styles.container}>
                <FormLabel>姓名</FormLabel>
                <FormInput ref={'name'} onChangeText={(val)=>{
                    this.setState({
                        name:val
                    })
                }}/>
                <FormValidationMessage>{this.state.error}</FormValidationMessage>
                <Button title={"提交"} onPress={()=>{
                    if(this.state.name==null||this.state.name==''){
                        this.setState({
                            error:'错误啦'
                        });
                        this.refs.name.shake();
                        this.refs.name.focus();
                    }else {
                        this.setState({
                            error:null
                        });
                        this.refs.name.blur();
                    }
                }}/>
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