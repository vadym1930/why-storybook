import React from 'react';
import './page.css';

const SlideHow = () => (
  <>
    <h2>How does it work!</h2>

    <ul>
        <li>
            <strong>
                Renders the same exact components which are gonna be rendered in your app.
            </strong>
        </li>
        <li>
            <p>
               — Instead of describing how things should be, Storybook is showing you exactly what they are. It does this by rendering your components in an iframe.in isolation for React, Vue, and Angular
            </p>
        </li>
        <li>
            <p>
               — It truly is running inside of a sandbox.
            </p>
        </li>
        <li>
            <p>
               — Real time components props values update,
               It does this by updating the parameters that are passed into the component and then rerendering the component.
            </p>
        </li>
    </ul>

    <div className="tip-wrapper">
        <span className="tip">Takeaway</span>
        There really is no magic here. Storybook is simply a second application that's using your components.
    </div>
  </>
);

export default SlideHow;
