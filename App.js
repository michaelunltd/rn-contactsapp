import React, { Component } from 'react'
import Expo from 'expo'
import { createStackNavigator } from 'react-navigation'

import ContactList from './src/ContactList'
import ContactView from './src/ContactView'
import ContactForm from './src/ContactForm'

const AppStack = createStackNavigator(
  {
    Home: {
      screen: ContactList,
      navigationOptions: () => ({
        title: 'Contacts App'
      })
    },
    View: {
      screen: ContactView,
      navigationOptions: ({ navigation }) => ({
        title: `${navigation.state.params.contact.name} Details`
      })
    },
    Form: {
      screen: ContactForm,
      navigationOptions: ({ navigation }) => ({
        title: navigation.state.params.title
      })
    }
  },
  {
    initialRouteName: 'Home'
  }
)

class App extends Component {
  constructor() {
    super()
    this.state = { loading: true }
  }
  async componentWillMount() {
    await Expo.Font.loadAsync({
      'Roboto': require('native-base/Fonts/Roboto.ttf'),
      'Roboto_medium': require('native-base/Fonts/Roboto_medium.ttf'),
    })
    this.setState({ loading: false })
  }

  render() {
    if (this.state.loading) {
      return <Expo.AppLoading />
    }

    return (
      <AppStack />
    )
  }
}

export default App
