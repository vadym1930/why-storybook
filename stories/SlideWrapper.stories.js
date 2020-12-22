import React from 'react';
import SlideHow from './SlideHow';
import SlideMotivation from './SlideMotivation';
import SlideWhat from './SlideWhat';
import SlideWhy from './SlideWhy';
import SlideWrapper from './SlideWrapper';

export default {
    title: 'Presentation/Slides',
    component: SlideWrapper
};

const Template = args => <SlideWrapper {...args} />;

export const Why = Template.bind({});
Why.args = {
    slide: SlideWhy
}

export const What = Template.bind({});
What.args = {
    slide: SlideWhat
}

export const How = Template.bind({});
How.args = {
    slide: SlideHow
}

export const Motivation = Template.bind({});
Motivation.args = {
    slide: SlideMotivation
}
