/**
 * Created by coolearth on 17-10-19.
 */
import React,{Component} from 'react';
import {
    View,
    StyleSheet
} from 'react-native';
import {CheckBox} from 'react-native-elements';

export default class LearnCheckBox extends Component{
    constructor(){
        super();
        this.state={
            checked:false,
        }
    }

    render(){
        return (
            <View style={styles.container}>
                <CheckBox
                    title='Click Here'
                    checked={this.state.checked}
                    /*onIconPress={()=>{
                        this.setState({
                            checked:!this.state.checked
                        })
                    }}*/
                />
                <CheckBox
                    center
                    title='Click Here'
                    checked={this.state.checked}
                    onPress={()=>{
                        this.setState({
                            checked:!this.state.checked
                        })
                    }}
                />
                <CheckBox
                    center
                    title='Click Here'
                    checkedIcon='dot-circle-o'
                    uncheckedIcon='circle-o'
                    checked={this.state.checked}
                />

                <CheckBox
                    center
                    title='Click Here to Remove This Item'
                    iconRight
                    iconType='material'
                    checkedIcon='clear'
                    uncheckedIcon='add'
                    checkedColor='red'
                    checked={this.state.checked}
                />

            </View>
        )
    }
}

const styles=StyleSheet.create({
    container:{
        flex:1,
        alignItems:'stretch',
    },
})