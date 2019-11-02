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
