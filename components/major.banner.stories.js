import React from 'react';
import MajorBanner from './major.banner';

export default {
    component: MajorBanner,
    title: 'Molecules/MajorBanner'
};

const Template = args => <MajorBanner {...args} ></MajorBanner>;

export const Default = Template.bind({});
Default.args = {
    body: 'Common in',
    title: 'Shout out! Sales!',
}

export const WithPhoto = Template.bind({});
WithPhoto.args = {
    ...Default.args,
    photo: 'People outdoors/shutterstock_115800856.jpg',
};

