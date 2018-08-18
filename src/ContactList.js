import React, { Component } from 'react'
import uuid from 'uuid/v1'
import { phonecall, text } from 'react-native-communications'

import {
  Body,
  Button,
  Container,
  Content,
  Fab,
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

    this.addContact = this.addContact.bind(this)
  }

  navigateToContact(contact) {
    const { navigate } = this.props.navigation
    navigate('View', {
      contact,
      actions: {
        call: this.call,
        message: this.message
      }
    })
  }

  navigateToForm() {
    const { navigate } = this.props.navigation

    navigate('Form', { addContact: this.addContact })
  }

  deleteContact(contact) {
    const { contacts } = this.state

    this.setState({
      contacts: contacts.filter((c) => c.id !== contact.id)
    })
  }

  addContact(contact) {
    const { contacts } = this.state

    this.setState({
      contacts: [
        ...contacts,
        {
          id: uuid(),
          ...contact
        }
      ]
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
        <Content>
          <List>
            {contacts.map((c, i) => (
              <ListItem key={i} onPress={()=> this.navigateToContact(c)}>
                <Body>
                  <Text>{c.name}</Text>
                  <Text note>{c.number}</Text>
                </Body>
                <Right>
                  <View style={{flexDirection: 'row'}}>
                    <Button transparent onPress={() => this.message(c.number)}>
                      <Icon
                        type="FontAwesome"
                        name="envelope"
                      />
                    </Button>
                    <Button transparent onPress={() => this.call(c.number)}>
                      <Icon
                        type="FontAwesome"
                        name="phone"
                      />
                    </Button>
                    <Button transparent onPress={() => this.deleteContact(c)}>
                      <Icon
                        type="FontAwesome"
                        name="trash"
                        style={{ color: 'red' }}
                      />
                    </Button>
                  </View>
                </Right>
              </ListItem>
            ))}
          </List>
        </Content>
        <Fab position="bottomRight" onPress={() => this.navigateToForm()}>
          <Icon name="md-add" />
        </Fab>
      </Container>
    )
  }
}

export default ContactList