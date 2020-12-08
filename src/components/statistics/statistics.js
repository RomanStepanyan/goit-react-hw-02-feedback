import PropTypes from 'prop-types';
import Notification from '../notification/notification';
import s from './statistics.module.css';

const FeedbackStatistics = ({
  good,
  neutral,
  bad,
  countTotalFeedback,
  countPositiveFeedbackPercentage,
}) => {
  return (
    <div>
      {countTotalFeedback > 0 && (
        <>
          <p className={s.good}>
            Good :<span className={s.good_value}> {good}</span>
          </p>
          <p className={s.neutral}>
            Neutral :<span className={s.neutral_value}> {neutral}</span>
          </p>
          <p className={s.bad}>
            Bad :<span className={s.bad_value}> {bad}</span>
          </p>
          <p className={s.total}>
            Total :<span className={s.total_value}> {countTotalFeedback}</span>
          </p>
          <p className={s.positive}>
            Positive feedback :
            <span className={s.positive_value}>
              {' '}
              {countPositiveFeedbackPercentage}%
            </span>
          </p>
        </>
      )}
      {countTotalFeedback === 0 && (
        <>
          <Notification message="No feedback given" />
        </>
      )}
    </div>
  );
};

FeedbackStatistics.propTypes = {
  good: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
  countTotalFeedback: PropTypes.number.isRequired,
  countPositiveFeedbackPercentage: PropTypes.number.isRequired,
};

export default FeedbackStatistics;
