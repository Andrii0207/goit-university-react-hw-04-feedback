import PropTypes from 'prop-types';
import css from './Statistics.module.css';

export default function Statistics({
  good,
  neutral,
  bad,
  total,
  positivePercentage,
}) {
  return (
    <>
      <li>
        Good: <span className={css.statisticsData}>{good}</span>
      </li>
      <li>
        Neutral: <span className={css.statisticsData}>{neutral}</span>
      </li>
      <li>
        Bad: <span className={css.statisticsData}>{bad}</span>
      </li>
      <br />
      <li>
        Total: <span className={css.statisticsData}>{total()}</span>{' '}
      </li>
      <li>
        Positive feedback:{' '}
        <span className={css.statisticsData}>{positivePercentage()}%</span>
      </li>
    </>
  );
}

Statistics.propTypes = {
  good: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
  total: PropTypes.func.isRequired,
  positivePercentage: PropTypes.func.isRequired,
};
