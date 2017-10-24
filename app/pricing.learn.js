/**
 * Created by coolearth on 17-10-19.
 */
import React,{Component} from 'react';
import {
    View,
    StyleSheet
} from 'react-native';
import {PricingCard} from 'react-native-elements';

export default class LearnPricing extends Component{
    constructor(){
        super();
    }

    render(){
        return (
            <View style={styles.container}>
                <PricingCard
                    color={'#4f9deb'}
                    title={"免费"}
                    price={"$0"}
                    info={['1人','免单','快来啊']}
                    button={{title:'点我',icon:'flight-takeoff'}}
                    onButtonPress={()=>alert("哈哈")}
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