import React, { Component } from 'react'
import uuid from 'uuid/v1'
import { phonecall, text } from 'react-native-communications'

import {
  Body,
  Button,
  Container,
  Content,
  Header,
  Icon,
  List,
  ListItem,
  Text,
  Right,
  View
} from 'native-base'

class ContactList extends Component {
  constructor(props) {
    super(props)

    this.state = {
      contacts: [
        {
          id: uuid(),
          name: 'Mikko GLOBE',
          number: '09772475405',
          email: 'mikko@proudcloud.io',
          company: 'Proudcloud'
        },
        {
          id: uuid(),
          name: 'Mikko SMART',
          number: '09399352926',
          email: 'mikko@proudcloud.io',
          company: 'Proudcloud'
        },
        {
          id: uuid(),
          name: 'John Cena',
          number: '09312234456',
          email: 'johncena@yahoo.com',
          company: 'WWE'
        },
        {
          id: uuid(),
          name: 'Kurt Angle',
          number: '09774561123',
          email: 'anglelock@gmail.com',
          company: 'WWE Smackdown'
        }
      ]
    }
  }

  openRecord(contact) {
    const { navigate } = this.props.navigation
    navigate('View', {
      contact,
      actions: {
        call: this.call,
        message: this.message
      }
    })
  }

  deleteContact(contact) {
    const { contacts } = this.state

    this.setState({
      contacts: contacts.filter((c) => c.id !== contact.id)
    })
  }

  call(number) {
    phonecall(number, false)
  }

  message(number) {
    text(number, false)
  }

  render() {
    const { contacts } = this.state

    return (
      <Container>
        <Header />
        <Content>
          <List>
            {contacts.map((c, i) => (
              <ListItem key={i} onPress={()=> this.openRecord(c)}>
                <Body>
                  <Text>{c.name}</Text>
                  <Text note>{c.number}</Text>
                </Body>
                <Right>
                  <View style={{flexDirection: 'row'}}>
                    <Button onPress={() => this.message(c.number)}>
                      <Icon type="FontAwesome" name='envelope' />
                    </Button>
                    <Button onPress={() => this.call(c.number)}>
                      <Icon type="FontAwesome" name='phone' />
                    </Button>
                    <Button onPress={() => this.deleteContact(c)}>
                      <Icon type="FontAwesome" name='trash' />
                    </Button>
                  </View>
                </Right>
              </ListItem>
            ))}
          </List>
        </Content>
      </Container>
    )
  }
}

export default ContactList