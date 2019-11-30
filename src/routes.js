import { createSwitchNavigator, createAppContainer } from 'react-navigation'
import { createStackNavigator } from 'react-navigation-stack'

import Welcome from './pages/Welcome'
import Home from './pages/Home'
import AuthLoadingScreen from './pages/AuthLoadingScreen'

const StackNavigator = createStackNavigator(
	{
		Home: { screen: Home }
	},
	{
		initialRouteName: 'Home',
		headerMode: 'none',
		header: null
	}
);

const AuthStack = createStackNavigator(
	{
		SignIn: Welcome,
		App: StackNavigator
		// SignUp: RegisterUser
	},
	{
		initialRouteName: 'SignIn',
		headerMode: 'none',
		header: null
	}
);

const RootStack = createSwitchNavigator(
	{
		AuthLoading: AuthLoadingScreen,
		Auth: AuthStack,
		App: StackNavigator,
		// Auth: AuthStack
	},
	{
		initialRouteName: 'AuthLoading',
		headerMode: 'none',
		navigationOptions: {
			header: null
		}
	}
);

const RootStackContainer = createAppContainer(RootStack);

export default RootStackContainer
