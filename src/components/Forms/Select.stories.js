import React from 'react';
import { storiesOf } from '@storybook/react';
import Select from './Select'
   storiesOf('Select', module)
   .add('Select-small', () => <Select
       placeholder = 'Select'
       type = 'select'
       small
       options = {['choose', 'select', 'pick']}
   />)
   .add('Select-medium', () => <Select
   placeholder = 'select'
   type = 'select'
   medium
   options = {['choose', 'select', 'pick']}
   />)

   