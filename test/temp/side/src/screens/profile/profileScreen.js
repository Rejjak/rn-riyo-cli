import React,{Component}  from 'react';
import {DrawerActions} from 'react-navigation';
import {Text,View,TouchableOpacity} from 'react-native';
import {Header,Title, Left, Body,Icon,Button} from 'native-base';
import profileStyle from './profileStyle';

export default class ProfileScreen extends Component{
    constructor(props){
        super(props);
    }
    openDrawer = () => {
        this.props.navigation.dispatch(DrawerActions.openDrawer());
    }
    render(){
        return(
            <View>
                <Header>
                <Left>
                <Button
                transparent
                onPress={()=>this.openDrawer()}>
                <Icon name="menu" />
                </Button>
                </Left>
                <Body>
                    <Title>Dashboard</Title>
                </Body>
                </Header>
                <Text style={profileStyle.riyoText}>Profile Page..!</Text>
        </View>
        );
    }
}