import React, {Component} from 'react';
import {Text, View, TouchableOpacity,StyleSheet} from 'react-native';
const drawerObj = {};
drawerObj.drawerContent = (props) => (
    <View>
        <View style={{height:'100%'}}>
            <TouchableOpacity onPress={()=>props.navigation.navigate('pageFour')} style={sidebarStyle.menu}><Text>Setting</Text></TouchableOpacity>
            <TouchableOpacity onPress={()=>props.navigation.navigate('beforeStack')} style={sidebarStyle.menu}><Text>Previous Stack</Text></TouchableOpacity>
        </View>
    </View>
)

const sidebarStyle = StyleSheet.create({
    menu:{
        padding:15,
    }
});

export {drawerObj};