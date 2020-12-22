import React from 'react';
import './page.css';

const SlideWhat = () => (
  <>
    <h2>What is a story book!</h2>

    <ul>
        <li>
            <strong>
             A living style guide or a component library? — Not really
            </strong>
        </li>
        <li>
            <p>
               — Storybook is an open-source tool for developing UI components in isolation for React, Vue, and Angular
            </p>
        </li>
        <li>
            <p>
               — Storybook is a sandbox to build UI components in isolation so that you can develop hard-to-reach states and edge cases
            </p>
        </li>
        <li>
            <p>
               — What both of these descriptions are highlighting is that Storybook is a tool.
            </p>
        </li>
        <li>
            <p>
               — The output of that tool might be something you'd call a guide or a component library.
            </p>
        </li>
        <li>
            <p>
               — its framework agnostic. React, including React Native, Vue, Angular, Ember, HTML, and several more, including new ones like Svelte, Mithril, and Riot.
            </p>
        </li>
    </ul>

    <div className="tip-wrapper">
        <span className="tip">Note</span>
        Storybook itself is not a design system, but it can be used to help with your design system.
    </div>
  </>
);

export default SlideWhat;
