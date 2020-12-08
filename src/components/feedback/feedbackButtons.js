import PropTypes from 'prop-types';
import s from './feedbackButtons.module.css';

const FeedbackButtons = ({ onGood, onNeutral, onBad }) => {
  return (
    <div className={s.button_wrapper}>
      <button type="button" className={s.button_good} onClick={onGood}>
        Good
      </button>
      <button type="button" className={s.button_neutral} onClick={onNeutral}>
        Neutral
      </button>
      <button type="button" className={s.button_bad} onClick={onBad}>
        Bad
      </button>
    </div>
  );
};

FeedbackButtons.propTypes = {
  onGood: PropTypes.func.isRequired,
  onNeutral: PropTypes.func.isRequired,
  onBad: PropTypes.func.isRequired,
};
export default FeedbackButtons;
