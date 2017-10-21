/**
 * Created by coolearth on 17-10-19.
 */
import React,{Component} from 'react';
import {
    View,
    StyleSheet
} from 'react-native';
import {Icon} from 'react-native-elements';

export default class LearnAvatar extends Component{
    render(){
        return (
            <View style={styles.container}>
                <Icon name={'rowing'}/>
                <Icon reverse
                     name={'rowing'}/>
                <Icon
                    name='g-translate'/>
                <Icon
                    name='g-translate'
                    color='#00aced' />

                <Icon
                    name='sc-telegram'
                    type='evilicon'
                    color='#517fa4'
                />

                <Icon
                    name='ios-american-football'
                    type='ionicon'
                    color='#517fa4'
                />

                <Icon
                    reverse
                    name='ios-american-football'
                    type='ionicon'
                    color='#517fa4'
                />


                <Icon
                    name='heartbeat'
                    type='font-awesome'
                    color='#f50'
                    onPress={() => console.log('hello')} />

                <Icon
                    raised
                    name='heartbeat'
                    type='font-awesome'
                    color='#f50'
                    onPress={() => console.log('hello')} underlayColor="#fff"/>
            </View>
        )
    }
}

const styles=StyleSheet.create({
    container:{
        flex:1,
        alignItems:'center',
        justifyContent:'center',
    },
})