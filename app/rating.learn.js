/**
 * Created by coolearth on 17-10-19.
 */
import React,{Component} from 'react';
import {
    View,
    StyleSheet
} from 'react-native';
import {Rating,Text} from 'react-native-elements';

export default class LearnRating extends Component{
    constructor(){
        super();
        this.state={
            rating:0
        }
    }

    render(){
        return (
            <View style={styles.container}>
                <Rating onFinishRating={(rating)=>{
                    this.setState({
                        rating:rating,
                    })
                }} ratingCount={10} imageSize={30} readonly={false} startingValue={3} fractions={2} type={'heart'}/>
                <Text>{this.state.rating}</Text>

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