import React, { Component } from 'react'
import { Container, Header, Content, List, ListItem, Text, Body, Right, Button, Icon } from 'native-base'
import { phonecall } from 'react-native-communications'
import uuid from 'uuid/v1'

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
    navigate('View', { ...contact })
  }

  deleteContact(contact) {
    const { contacts } = this.state

    this.setState({
      contacts: contacts.filter((c) => c.id !== contact.id)
    })
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
                  <Button onPress={() => this.deleteContact(c)}>
                    <Icon name='trash'/>
                  </Button>
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