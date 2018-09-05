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
    const { contact } = props.navigation.state.params

    this.state = {
      id: contact && contact.id || '',
      name: contact && contact.name || '',
      number: contact && contact.number || '',
      company: contact && contact.company || '',
      email: contact && contact.email || ''
    }
  }

  handleSubmit(contact) {
    const { pop, state } = this.props.navigation
    const { action } = state.params

    action(contact)
    this.setState({
      name: '',
      number: '',
      company: '',
      email: ''
    })
    pop()
  }

  render() {
    const { name, number, company, email } = this.state;
    return (
      <Container>
        <Content padder>
          <Form>
            <Item stackedLabel>
              <Label>Name</Label>
              <Input onChangeText={name => this.setState({ name })} value={name} />
            </Item>
            <Item stackedLabel>
              <Label>Mobile Number</Label>
              <Input onChangeText={number => this.setState({ number })} value={number} />
            </Item>
            <Item stackedLabel>
              <Label>Company</Label>
              <Input onChangeText={company => this.setState({ company })} value={company} />
            </Item>
            <Item stackedLabel>
              <Label>Email</Label>
              <Input onChangeText={email => this.setState({ email })} value={email} />
            </Item>
          </Form>
          <Button full primary onPress={() => this.handleSubmit(this.state)}>
            <Text>Save</Text>
          </Button>
        </Content>
      </Container>
    )
  }
}

export default ContactForm
