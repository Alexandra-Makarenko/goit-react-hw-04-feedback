import PropTypes from 'prop-types';

export const Section = ({ title, children }) => (
  <section>
    <h2>{title}</h2>
    {children}
  </section>
);

Notification.propTypes = {
  title: PropTypes.string.isRequired,
  children:PropTypes.element,
}

