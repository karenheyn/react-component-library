import React from 'react';
import { storiesOf } from '@storybook/react';
import Counter from './Counter'

storiesOf('Counter', module)
.add ('Counter', ()=> <Counter 
count={0}
step={1} 
/>)