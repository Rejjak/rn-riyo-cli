import React,{Component}  from 'react';
import Footertab from '../../components/footerTab/footertab';
import {Text} from 'react-native';
import {Header,Title, Left, Body,Icon,Button,Container, Content} from 'native-base';
import profileStyle from './profileStyle';

export default class ProfileScreen extends Component{
    constructor(props){
        super(props);
    }
    render(){
        return(
            <Container>
                <Header>
                    <Body>
                        <Title>Dashboard</Title>
                    </Body>
                </Header>
                <Content>
                    <Text style={profileStyle.riyoText}>Profile Page..!</Text>
                </Content>
                <Footertab props={this.props}/>   
            </Container>
        );
    }
}