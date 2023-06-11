import React, { useState } from 'react';
import { Input, Form, Button } from 'components/contactForm/ContactForm.styled';

export function ContactForm({ onSubmit }) {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');


  const handleChange = event => {
    const { name, value } = event.target;

    switch (name) {
      case 'name':
        setName(value);
        break;
      case 'number':
        setNumber(value);
        break;
      default:
        return;
    }
  };

  handleSubmit = event => {
    event.preventDefault();
    this.props.onSubmit(this.state.name, this.state.number);

    this.setState({ name: '', number: '' });
  };

  render() {
    return (
      <>
        <Form onSubmit={this.handleSubmit}>
          <label htmlFor="inputName">Name</label>
          <Input
            type="text"
            name="name"
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
            id="inputName"
            value={this.state.name}
            onChange={this.handleChange}
          />
          <label htmlFor="inputNumber">Number</label>
          <Input
            type="tel"
            name="number"
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            required
            id="inputNumber"
            value={this.state.number}
            onChange={this.handleChange}
          />
          <Button type="submit">Add contact</Button>
        </Form>
      </>
    );
  }
}