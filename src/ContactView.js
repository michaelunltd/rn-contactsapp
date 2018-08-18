import React from 'react'
import {
  Button,
  Card,
  CardItem,
  Container,
  Content,
  Icon,
  Text,
} from 'native-base'

const ContactView = ({ navigation }) => {
  const { actions, contact } = navigation.state.params
  return (
    <Container>
      <Content padder>
        <Card>
          <CardItem header bordered>
            <Text>
              {contact.name}
            </Text>
          </CardItem>
          <CardItem bordered>
            <Icon active name="ios-phone-portrait" />
            <Text>{contact.number}</Text>
          </CardItem>
          <CardItem bordered>
            <Icon active name="ios-briefcase" />
            <Text>{contact.company}</Text>
          </CardItem>
          <CardItem bordered>
            <Icon active name="ios-contact" />
            <Text>{contact.email}</Text>
          </CardItem>
        </Card>
        <Button full primary onPress={() => actions.call(contact.number)}>
          <Text>Call</Text>
        </Button>
        <Button full success onPress={() => actions.message(contact.number)}>
          <Text>Text</Text>
        </Button>
      </Content>
    </Container>
  )
}

export default ContactView
