import React from 'react'
import { phonecall, text } from 'react-native-communications'
import {
  Button,
  Card,
  CardItem,
  Container,
  Content,
  Icon,
  Text,
  View
} from 'native-base'

class ContactView extends React.Component {
  doCall(number) {
    phonecall(number, false)
  }

  doText(number) {
    text(number, false)
  }

  render() {
    const { name, number, company, email } = this.props.navigation.state.params
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

          <Button full primary onPress={() => this.doCall(number)}>
            <Text>CALL</Text>
          </Button>
          <Button full success onPress={() => this.doText(number)}>
            <Text>Text</Text>
          </Button>

        </Content>
      </Container>
    )
  }
}

export default ContactView
