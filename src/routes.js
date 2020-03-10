import React from 'react';
import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import Main from './pages/Main';
import {Title} from './styles';

const Routes = createAppContainer(
  createStackNavigator(
    {
      Main: {screen: Main},
    },
    {
      defaultNavigationOptions: {
        headerTitleAlign: 'center',
        headerTitle: () => <Title>Todolist App</Title>,
        headerStyle: {
          backgroundColor: '#212121',
          height: 0,
          opacity: 0,
        },
      },
    },
  ),
);

export default Routes;
