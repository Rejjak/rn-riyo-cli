import React,{Component}  from 'react';
import {Text,View} from 'react-native';
import {Header,Title, Left, Body,Icon,Button} from 'native-base';
import settingStyle from './settingStyle';

export default class SettingScreen extends Component{
    constructor(props){
        super(props);
    }

    render(){
        return(
            <View>
                <Header>
                <Left>
                <Button
                transparent
                onPress={()=>this.props.navigation.goBack()}>
                <Icon name="arrow-back" />
                </Button>
                </Left>
                <Body>
                    <Title>Setting</Title>
                </Body>
                </Header>
                <Text style={settingStyle.riyoText}>Setting Page..!</Text>
            </View>
        );
    }
}