import React, { Component } from 'react'
import {
  Button,
  Card,
  CardItem,
  Container,
  Content,
  Icon,
  Text
} from 'native-base'

class ContactView extends Component {
  render() {
    console.log(this.props)
    debugger
    const {
      contacts: {
        company,
        email,
        name,
        number
      },
      actions: {
        call,
        message
      }
    } = this.props.navigation.state.params

    return (
      <Container>
        <Content padder>
          <Card>
            <CardItem header bordered>
              <Text>
                {name}
              </Text>
            </CardItem>
            <CardItem bordered>
              <Icon active name="ios-phone-portrait" />
              <Text>{number}</Text>
            </CardItem>
            <CardItem bordered>
              <Icon active name="ios-briefcase" />
              <Text>{company}</Text>
            </CardItem>
            <CardItem bordered>
              <Icon active name="ios-contact" />
              <Text>{email}</Text>
            </CardItem>
          </Card>
          <Button full primary onPress={() => call(number)}>
            <Text>CALL</Text>
          </Button>
          <Button full success onPress={() => message(number)}>
            <Text>Text</Text>
          </Button>
        </Content>
      </Container>
    )
  }
}

export default ContactView
