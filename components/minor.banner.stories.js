import React from 'react';
import MinorBanner from './minor.banner';

export default {
    component: MinorBanner,
    title: 'Molecules/MinorBanner',
    parameters: {
        seeAlso: [
            {
                name: '/story/molecules-majorbanner--default',
                label: 'MajorBanner'
            },
        ]
    }
};

const Template = args => <MinorBanner {...args} />;

export const Default = Template.bind({});
Default.args = {
    body: 'Need hikers?',
    title: 'Let\'s gooo!',
};

export const WithLeftPhoto = Template.bind({});

WithLeftPhoto.args = {
    ...Default.args,
    leftPhoto: 'Products/boots/shutterstock_66842440.jpg'
}
