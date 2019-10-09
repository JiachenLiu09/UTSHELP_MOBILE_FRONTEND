import Login from './components/Login';
import { createStackNavigator, createAppContainer } from 'react-navigation';
import HomePage from './components/HomePage';

const AppNavigator = createStackNavigator(
  {
    Home: { screen: Login },
    HomePage: { screen : HomePage }
  },
  {
    defaultNavigationOptions: 
    {
      header: null
    }
  }
)

export default createAppContainer(AppNavigator);
