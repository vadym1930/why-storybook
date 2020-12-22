import React from 'react';
import CallToAction from './cta-button';

export default {
    component: CallToAction,
    title: 'Atoms/CallToAction',
    argTypes: {
        onClick: {
            action: 'cta-clicked'
        },
    },
};

const Template = args => <CallToAction {...args} />;

export const Default = Template.bind({});
Default.args = {
    label: 'call to action button'
};
