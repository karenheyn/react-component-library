import React from 'react';
import { storiesOf } from '@storybook/react';
import Form from './Form'




storiesOf('Form', module)
    .add('Email', () => <Form
    label = "Email"
    type = "email"
    />)
    .add('Email-medium', () => <Form
    label = 'Email'
    type = 'email'
    medium
    />)
   .add('Email-large', () => <Form
    label = 'Email'
    type = 'email'
    large
    />)
    .add('Submit', () => <Form
    type = 'submit'
    label = 'redeem'
    value = 'voucher'
    submit
    handleSubmit = { evt => {
    evt.preventDefault();
  }}
    />)
    .add('Submit-small', () => <Form
    type = 'submit'
    label = 'redeem'
    value = 'voucher'
    small
    handleSubmit = { evt => {
    evt.preventDefault();
  }}
    />)

