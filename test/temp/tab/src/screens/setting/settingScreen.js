import React,{Component}  from 'react';
import {Text} from 'react-native';
import settingStyle from './settingStyle';
import Footertab from '../../components/footerTab/footertab';
import {Header,Title, Left, Body,Icon,Button,Container, Content} from 'native-base';

export default class SettingScreen extends Component{
    constructor(props){
        super(props);
    }

    render(){
        return(
            <Container>
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
                <Content>
                    <Text style={settingStyle.riyoText}>Setting Page..!</Text>
                </Content>
            </Container>
        );
    }
}