import React, { Component } from 'react'
import {
  Button,
  Container,
  Content,
  Form,
  Item,
  Input,
  Label,
  Text,
} from 'native-base';

class ContactForm extends Component {
  constructor(props) {
    super(props)

    this.state = {
      name: '',
      number: '',
      company: '',
      email: ''
    }
  }

  handleAddContact(contact) {
    const { pop, state } = this.props.navigation
    const { addContact } = state.params

    addContact(contact)
    this.setState({
      name: '',
      number: '',
      company: '',
      email: ''
    })
    pop()
  }

  render() {
    return (
      <Container>
        <Content padder>
          <Form>
            <Item stackedLabel>
              <Label>Name</Label>
              <Input onChangeText={name => this.setState({ name })} />
            </Item>
            <Item stackedLabel>
              <Label>Mobile Number</Label>
              <Input onChangeText={number => this.setState({ number })} />
            </Item>
            <Item stackedLabel>
              <Label>Company</Label>
              <Input onChangeText={company => this.setState({ company })} />
            </Item>
            <Item stackedLabel>
              <Label>Email</Label>
              <Input onChangeText={email => this.setState({ email })} />
            </Item>
          </Form>
          <Button full primary onPress={() => this.handleAddContact(this.state)}>
            <Text>Save</Text>
          </Button>
        </Content>
      </Container>
    )
  }
}

export default ContactForm
