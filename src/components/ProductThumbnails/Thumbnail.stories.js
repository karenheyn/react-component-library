import React from 'react';
import Thumbnail from './Thumbnail'
import { storiesOf } from '@storybook/react';

storiesOf('Thumbnail', module)
    .add('Thumbnail-block', () => <Thumbnail
    blue
    />)
    .add('Thumbnail-block-whiteicons', () => <Thumbnail
    white
    />)
    .add('Thumbnail-inline', () => <Thumbnail
    inline
    />)
    .add('Thumbnail-headphones-inline', () => <Thumbnail
    headphones
    />)