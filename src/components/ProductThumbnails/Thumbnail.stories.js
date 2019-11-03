import React from 'react';
import Thumbnail from './Thumbnail'
import { storiesOf } from '@storybook/react';

storiesOf('Thumbnail', module)
    .add('Thumbnail-block', () => <Thumbnail
    blue
    />)
    .add('Thumbnail-block-whiteicons', () => <Thumbnail
    label = "Email"
    white
    />)