import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import {createDrawerNavigator} from 'react-navigation-drawer';

import SplashScreen from "../features/SplashScreen";
import SideMenu from './sideMenu';
//@BlueprintImportInsertion
import SignIn23197030Navigator from '../features/SignIn23197030/navigator';
import BlankScreen1197010Navigator from '../features/BlankScreen1197010/navigator';
import BlankScreen0196996Navigator from '../features/BlankScreen0196996/navigator';

/**
 * new navigators can be imported here
 */

const AppNavigator = {

    //@BlueprintNavigationInsertion
SignIn23197030: { screen: SignIn23197030Navigator },
BlankScreen1197010: { screen: BlankScreen1197010Navigator },
BlankScreen0196996: { screen: BlankScreen0196996Navigator },

    /** new navigators can be added here */
    SplashScreen: {
      screen: SplashScreen
    }
};

const DrawerAppNavigator = createDrawerNavigator(
  {
    ...AppNavigator,
  },
  {
    contentComponent: SideMenu
  },
);

const AppContainer = createAppContainer(DrawerAppNavigator);

export default AppContainer;
