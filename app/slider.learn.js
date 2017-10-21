/**
 * Created by coolearth on 17-10-19.
 */
import React,{Component} from 'react';
import {
    View,
    StyleSheet
} from 'react-native';
import {Slider,Text} from 'react-native-elements';

export default class LearnSlider extends Component{
    constructor(){
        super();
        this.state={
            val:50,
            startVal:0,
            endVal:0,
        }
    }

    render(){
        return (
            <View style={styles.container}>
                <Slider value={this.state.val} onValueChange={(val)=>{
                    this.setState({
                        val:val,
                    });
                }} minimumValue={0} maximumValue={100} step={5} disabled={false}
                        minimumTrackTintColor={'#c3c'}
                    maximumTrackTintColor={'#87f'}
                        thumbTintColor={'#345'}
                        //thumbTouchSize={{height:300,width:300}}
                        onSlidingStart={(val)=>{
                            this.setState({
                                startVal:val
                            });
                        }}
                        onSlidingComplete={(val)=>{
                            this.setState({
                               endVal:val,
                            });
                        }}
                        /*style={
                            {backgroundColor:'#734'}
                        }
                        thumbStyle={{backgroundColor:'#fff'}}
                        trackStyle={{backgroundColor:'#000'}}*/
                        //debugTouchArea={true}
                />
                <Text>{this.state.val}</Text>
                <Text>{this.state.startVal}</Text>
                <Text>{this.state.endVal}</Text>
            </View>
        )
    }
}

const styles=StyleSheet.create({
    container:{
        flex:1,
        alignItems:'stretch',
        justifyContent:'center',
    },

})