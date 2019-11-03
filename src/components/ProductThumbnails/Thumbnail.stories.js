import React from 'react';
import Thumbnail from './Thumbnail'
import { storiesOf } from '@storybook/react';

storiesOf('Thumbnail', module)
    .add('Thumbnail-block', () => <Thumbnail
    label = "Email"
    type = "email"
    />)