import React from 'react';
import PropTypes from 'prop-types';

import './page.css';

const SlideWrapper = ({ slide: Slide }) => (
  <article>
      <section>
        <Slide />
      </section>
  </article>
);
SlideWrapper.propTypes = {
  slide: PropTypes.elementType,
};

export default SlideWrapper
