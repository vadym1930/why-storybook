import React from 'react';
import Button from './button';

export default {
    component: Button,
    title: 'Atoms/Button'
}

const Template = args => <Button {...args} />;

export const Default = Template.bind({});
Default.args = {
    label: 'Default button'
};

