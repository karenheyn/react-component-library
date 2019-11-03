import React from 'react';
import Checkbox from './Checkbox'
import { storiesOf } from '@storybook/react';

storiesOf('Checkbox', module)
    .add('Checkbox-black', () => <Checkbox
    name = 'black'
    text ="helo"

    />)