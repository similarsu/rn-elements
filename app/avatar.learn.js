/**
 * Created by coolearth on 17-10-19.
 */
import React,{Component} from 'react';
import {
    View,
    StyleSheet
} from 'react-native';
import {Avatar} from 'react-native-elements';

export default class LearnAvatar extends Component{
    render(){
        return (
            <View style={styles.container}>
                <View style={styles.containerInner}>
                    <Avatar small={true} rounded={true} source={{uri:"https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=1225775914,2507975769&fm=27&gp=0.jpg"}} onPress={()=>{
                        () => console.log("Works");
                    }} activeOpacity={0.1}/>
                    <Avatar large={true} rounded={true} source={{uri:"https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=1225775914,2507975769&fm=27&gp=0.jpg"}} onPress={()=>{
                        () => console.log("Works");
                    }} activeOpacity={0.1}/>
                    <Avatar xlarge={true} rounded={true} source={{uri:"https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=1225775914,2507975769&fm=27&gp=0.jpg"}} onPress={()=>{
                        () => console.log("Works");
                    }} activeOpacity={0.1}/>
                </View>
                <View style={styles.containerInner}>
                    <Avatar
                        small
                        rounded
                        title="MT"
                        onPress={() => console.log("Works!")}
                        activeOpacity={0.7}
                    />
                    <Avatar
                        medium
                        title="BP"
                        onPress={() => console.log("Works!")}
                        activeOpacity={0.7}
                    />
                    <Avatar
                        large
                        title="LW"
                        onPress={() => console.log("Works!")}
                        activeOpacity={0.7}
                    />
                    <Avatar
                        xlarge
                        rounded
                        title="CR"
                        onPress={() => console.log("Works!")}
                        activeOpacity={0.7}
                    />
                </View>
                <View style={styles.containerInner}>
                    <Avatar
                        small
                        rounded
                        icon={{name: 'user'}}
                        onPress={() => console.log("Works!")}
                        activeOpacity={0.7}
                        containerStyle={{flex: 2, marginLeft: 20, marginTop: 115}}
                    />
                    <Avatar
                        medium
                        overlayContainerStyle={{backgroundColor: 'blue'}}
                        icon={{name: 'meetup', color: 'red'}}
                        onPress={() => console.log("Works!")}
                        activeOpacity={0.7}
                        containerStyle={{flex: 3, marginTop: 100}}
                    />
                    <Avatar
                        large
                        icon={{name: 'rocket', color: 'orange'}}
                        overlayContainerStyle={{backgroundColor: 'white'}}
                        onPress={() => console.log("Works!")}
                        activeOpacity={0.7}
                        containerStyle={{flex: 4, marginTop: 75}}
                    />
                    <Avatar
                        xlarge
                        rounded
                        icon={{name: 'home'}}
                        onPress={() => console.log("Works!")}
                        activeOpacity={0.7}
                        containerStyle={{flex: 5, marginRight: 60}}
                    />
                </View>
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
    containerInner:{
        flex:1,
        flexDirection:'row',
        alignItems:'flex-end',
        justifyContent:'space-between'
    }
})