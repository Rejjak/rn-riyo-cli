import React,{Component}  from 'react';
import {Text,StyleSheet} from 'react-native';
import { Footer, FooterTab, Button, Icon } from 'native-base';
export default class Footertab extends Component{

    constructor(props){
        super(props);
    }

    render() {
        const {props} = this.props;
        return (
            <Footer>
                <FooterTab>
                    <Button onPress={()=>{props.navigation.navigate('pageFour')}}>
                        <Icon name='ios-apps' />
                        <Text>Apps</Text>
                    </Button>
                    <Button onPress={()=>props.navigation.navigate('beforeStack')}>
                        <Icon name='ios-camera' />
                        <Text>Camera</Text>
                    </Button>
                    <Button>
                        <Icon name='ios-compass' />
                        <Text>Navigate</Text>
                    </Button>
                    <Button>
                        <Icon name='ios-contact' />
                        <Text>Contact</Text>
                    </Button>
                </FooterTab>
            </Footer>
        );
    }
}

const tabbarStyle = StyleSheet.create({
   
});