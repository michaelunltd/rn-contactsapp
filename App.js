import React, { Component } from 'react'
import Expo from 'expo'
import { StackNavigator } from 'react-navigation'

import ContactList from './src/ContactList'
import ContactView from './src/ContactView'

const AppStack = StackNavigator(
  {
    Home: { screen: ContactList },
    View: { screen: ContactView }
  },
  {
    initialScreen: 'Home'
  }
)

class App extends Component {
  async componentWillMount() {
    await Expo.Font.loadAsync({
      'Roboto': require('native-base/Fonts/Roboto.ttf'),
      'Roboto_medium': require('native-base/Fonts/Roboto_medium.ttf'),
    })
  }

  render() {
    return (
      <AppStack />
    )
  }
}

export default App
