import React,{Component}  from 'react';
import {Text,View,TouchableOpacity} from 'react-native';
import {Header} from 'native-base';
import homeStyle from './homeStyle';

export default class HomeScreen extends Component{
    constructor(props){
        super(props);
    }

    render(){
        return(
            <View>
                <Header/>
                <Text style={homeStyle.riyoText}>Home Page..!</Text>

                <View style={{marginTop:200}}>
                <TouchableOpacity style={[homeStyle.buttonContainer,{backgroundColor:'green',alignSelf: 'center'}]} onPress={()=>this.props.navigation.navigate('pageTwo')}>
                <Text style={homeStyle.Btn}>About Page</Text>
                </TouchableOpacity>

                <TouchableOpacity style={[homeStyle.buttonContainer,{backgroundColor:'red',alignSelf: 'center'}]} onPress={()=>this.props.navigation.navigate('afterStack')}>
                <Text style={homeStyle.Btn}>Switch another Stack</Text>
                </TouchableOpacity>
                </View>

            </View>
        );
    }
}