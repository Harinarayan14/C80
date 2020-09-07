import React from 'react';
import { Image } from 'react-native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import AppTabNavigator  from './AppTabNavigator'
import SideBar from './SideBar'


export const DrawerNavigator = createDrawerNavigator({
    Home:{screen:AppTabNavigator}
},
{
    ContentComponent:SideBar
},
{
    initialRouteName:"Home"
}
)
