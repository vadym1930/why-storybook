import React from 'react';
import './page.css';

const SlideWhy = () => (
  <>
    <h2>Why use!</h2>

    <ul>
        <li>
            <strong>
                for developers:
            </strong>
        </li>
        <li>
            <p>
               — maximize your efficiency in creating these components
            </p>
        </li>
        <li>
            <p>
               — makes it easy to see, at a glance, what components already exist so you can easily find the right component to use for your screen
            </p>
        </li>
        <li>
            <p>
               — provide guidance in the form of when and why a specific component should be used
            </p>
        </li>
        <li>
            <p>
               — can provide ways to more easily test various components.
            </p>
        </li>
    </ul>

    <ul>
        <li>
            <strong>
                for designers:
            </strong>
        </li>
        <li>
            <p>
               — designers and developers can work together in a sandbox environment to quickly create a component.
            </p>
        </li>
        <li>
            <p>
               — verify that the component that the designer has designed was accurately created by the developers  inside of an application
            </p>
        </li>
        <li>
            <p>
               — can quickly and easily QA a component to make sure that it's looking and behaving like it should
            </p>
        </li>
        <li>
            <p>
               — the central repository to store the information how the component should be used
            </p>
        </li>
    </ul>

    <ul>
        <li>
            <strong>
                for CTOs, directors, managers, and others who are leading a software team:
            </strong>
        </li>
        <li>
            <p>
               — team to increase communication and collaboration
            </p>
        </li>
        <li>
            <p>
               — This can lead to increased productivity. Since documentation in place. Incomers speeding up
            </p>
        </li>
        <li>
            <p>
               — basement for the discussion and keeping everyone eye to eye
            </p>
        </li>
    </ul>

    <div className="tip-wrapper">
        <span className="tip">Tip</span>
        It's not a magic though and depends on how storybook is actually using
    </div>
  </>
);

export default SlideWhy;
