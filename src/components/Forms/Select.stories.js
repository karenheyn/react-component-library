import React from 'react';
import { storiesOf } from '@storybook/react';
import Select from './Select'
   storiesOf('Select', module)
   .add('Select-large', () => <Select
    placeholder = 'Select'
    type = 'select'
    options = {['choose', 'select', 'pick']}
   />)
   .add('Select-medium', () => <Select
    placeholder = 'select'
    type = 'select'
    medium
    options = {['choose', 'select', 'pick']}
   />)
   .add('Select-small', () => <Select 
    placeholder = 'select'
    type = 'select'
    small
    options = {['choose', 'select', 'pick']}
   />)
    .add('Select-large-filled', () => <Select
    placeholder = 'Select'
    type = 'select'
    filled
    options = {['choose', 'select', 'pick']}
   />)
   .add('Select-medium-filled', () => <Select
    placeholder = 'select'
    type = 'select'
    medium
    filled
    options = {['choose', 'select', 'pick']}
   />)
   .add('Select-small-filled', () => <Select 
    placeholder = 'select'
    type = 'select'
    small
    filled
    options = {['choose', 'select', 'pick']}
   />)


   