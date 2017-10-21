/**
 * Created by coolearth on 17-10-21.
 */
import React,{Component} from 'react';
import {
    View,
    StyleSheet
} from 'react-native';

import {
    ButtonGroup,
    Text
} from 'react-native-elements';

export default class LearnButtonGroup extends Component{
    constructor(){
        super();
        this.state={
            selectedIndex:2
        }
    }

    render() {
        const buttons=["Java","Jsp","Python"];
        const {selectedIndex}=this.state;
        return (
            <View style={styles.container}>
                <ButtonGroup buttons={buttons} selectedIndex={selectedIndex} onPress={(idx)=>{
                    this.setState({
                        selectedIndex:idx
                    })
                }} containerStyle={{height:100}}/>
                <ButtonGroup buttons={[{element:()=><Text>JAVA</Text>},{element:()=><Text>JSP</Text>},{element:()=><Text>PYTHON</Text>}]} selectedIndex={selectedIndex} onPress={(idx)=>{
                    this.setState({
                        selectedIndex:idx
                    })
                }} containerStyle={{height:100}}/><ButtonGroup buttons={[{element:()=><Text>JAVA</Text>},{element:()=><Text>JSP</Text>},{element:()=><Text>PYTHON</Text>}]} selectedIndex={selectedIndex} onPress={(idx)=>{
                    this.setState({
                        selectedIndex:idx
                    })
                }} containerStyle={{height:100}} buttonStyle={{backgroundColor:'#ff00ff'}}/>
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