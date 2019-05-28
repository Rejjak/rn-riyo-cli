import React,{Component}  from 'react';
import {Text,View} from 'react-native';
import {Header,Title, Left, Body,Icon,Button} from 'native-base';
import aboutStyle from './aboutStyle';

export default class AboutScreen extends Component{
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
                    <Title>About</Title>
                </Body>
                </Header>
                <Text style={aboutStyle.riyoText}>About Page..!</Text>
            </View>
        );
    }
}