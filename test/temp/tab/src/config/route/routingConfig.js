import HomeScreen from '../../screens/home/homeScreen';
import AboutScreen from '../../screens/about/aboutScreen';
import ProfileScreen from '../../screens/profile/profileScreen';
import SettingScreen from '../../screens/setting/settingScreen';
const navigationConfig = Object.create(null);

navigationConfig.Screen = {
    StackOne:{
        pageOne:{
            screen: HomeScreen,
            navigationOptions:{
                title:'Home Page'
            }
        },
        pageTwo:{
            screen: AboutScreen,
            navigationOptions:{
                title:'About Page'
            }
        }
    },
    StackTwo:{
        pageThree:{
            screen: ProfileScreen,
            navigationOptions:{
                title:'Profile Page'
            }
        },
        pageFour:{
            screen: SettingScreen,
            navigationOptions:{
                title:'Setting Page'
            }
        }
    }
};

navigationConfig.navigation_options = {
    headerStyle: { 
        backgroundColor: '#ccc'
    },
    headerTitleStyle: { 
        color: 'black',
        fontSize: 18
    },
    headerTintColor: 'black',
    headerLayoutPreset: 'center'
};

export default navigationConfig;