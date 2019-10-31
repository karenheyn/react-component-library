import React from 'react';
import { storiesOf } from '@storybook/react';

import Button from './Button';


storiesOf('Button', module)
    .add('Primary', () => <Button
        label = "Primary"
        type = "primary"
    />)
    .add('Primary-hover', () => <Button
    label = "Primary"
    type = "primary"
    hover
/>)
    .add('Primary-hollow', () => <Button
    label = "Primary2"
    type = "primary"
    hollow
    />)
    .add('Primary-transparent', () => <Button
    label = "Primary"
    type = "primary"
    transparent
    />)
    .add('Primary-large', () => <Button
        label = "Primary"
        type = "primary"
        large
    />)
    .add('Primary-hollow-large', () => <Button
    label = "Primary2"
    type = "primary"
    hollow
    large
    />)
    .add('Primary-transparent-large', () => <Button
    label = "Primary"
    type = "primary"
    transparent
    large
    />)
    .add('Danger', () => <Button 
    label = 'Danger'
    type = 'danger'
    />)
    .add('Danger-hover', () => <Button
    label = "Danger"
    type = "danger"
    hover
/>)
    .add('Danger-hollow', () => <Button 
    label = 'Danger'
    type = 'danger'
    hollow
    />)
    .add('Danger-transparent', () => <Button 
    label = 'Danger'
    type = 'danger'
    transparent
    />)
    .add('Danger-large', () => <Button 
    label = 'Danger'
    type = 'danger'
    large
    />)
    .add('Danger-hollow-large', () => <Button 
    label = 'Danger'
    type = 'danger'
    hollow
    large
    />)
    .add('Danger-transparent-large', () => <Button 
    label = 'Danger'
    type = 'danger'
    transparent
    large
    />)

    .add('Success', () => <Button
    label = 'Success'
    type = 'success'
    />)
    .add('Success-hover', () => <Button
    label = "Success"
    type = "success"
    hover
    />)

    .add('Success-hollow', () => <Button
    label = 'Success2'
    type = 'success'
    hollow
    />)

    .add('Success-transparent', () => <Button
    label = 'Success3'
    type = 'success'
    transparent
    />)
    .add('Success-large', () => <Button
    label = 'Success'
    type = 'success'
    large
    />)

    .add('Success-hollow-large', () => <Button
    label = 'Success2'
    type = 'success'
    hollow
    large
    />)

    .add('Success-transparent-large', () => <Button
    label = 'Success3'
    type = 'success'
    transparent
    large
    />)
    
    .add('Warning', () => <Button
    label = 'Warning'
    type = 'warning'
    />)
    .add('Warning-hover', () => <Button
    label = "Warning"
    type = "warning"
    hover
/>)
    .add('Warning-hollow', () => <Button
    label = 'Warning2'
    type = 'warning'
    hollow
    />)
    .add('Warning-transparent', () => <Button
    label = 'Warning3'
    type = 'warning'
    transparent
    />)

    .add('Warning-large', () => <Button
    label = 'Warning'
    type = 'warning'
    large
    />)
    .add('Warning-hollow-large', () => <Button
    label = 'Warning2'
    type = 'warning'
    hollow
    large
    />)
    .add('Warning-transparent-large', () => <Button
    label = 'Warning3'
    type = 'warning'
    transparent
    large
    />)

    .add('Default', () => <Button
    label = 'Default'
    type = 'default'
    />)
    .add('Default-hover', () => <Button
    label = "Default"
    type = "default"
    hover
/>)

    .add('Default-hollow', () => <Button
    label = 'Default'
    type = 'default'
    hollow
    />)

    .add('Default-transparent', () => <Button
    label = 'Default'
    type = 'default'
    transparent
    />)

    .add('Default-large', () => <Button
    label = 'Default'
    type = 'default'
    large
    />)

    .add('Default-hollow-large', () => <Button
    label = 'Default'
    type = 'default'
    hollow
    large

    />)

    .add('Default-transparent-large', () => <Button
    label = 'Default'
    type = 'default'
    transparent
    large
    />)

    
