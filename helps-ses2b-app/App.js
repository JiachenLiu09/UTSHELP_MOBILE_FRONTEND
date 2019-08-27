import Login from './components/Login';
import { createStackNavigator, createAppContainer } from 'react-navigation';
import Profile from './components/Profile';

const AppNavigator = createStackNavigator({
  Home: { screen: Login },
  Profile: { screen: Profile }
})

export default createAppContainer(AppNavigator);
