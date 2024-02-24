import PropTypes from 'prop-types';
import css from './FeedbackOptions.module.css';

export default function FeedbackOptions({ options, onLeaveFeedback }) {
  return (
    <ul className={css.optionList}>
      {options.map(item => (
        <li key={item} className={css.optionItem}>
          <button
            type="button"
            name={item}
            className={css.optionBTN}
            onClick={() => onLeaveFeedback(item)}
          >
            {item}
          </button>
        </li>
      ))}
    </ul>
  );
}

FeedbackOptions.propTypes = {
  options: PropTypes.arrayOf(PropTypes.string.isRequired),
  onLeaveFeedback: PropTypes.func.isRequired,
};
