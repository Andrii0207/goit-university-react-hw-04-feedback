import PropTypes from 'prop-types';
import css from './Section.module.css';

export default function Section({ title, children }) {
  return (
    <ul className={css.sectionList}>
      {title && title}
      {children}
    </ul>
  );
}

Section.propTypes = {
  title: PropTypes.string,
  children: PropTypes.any,
};
