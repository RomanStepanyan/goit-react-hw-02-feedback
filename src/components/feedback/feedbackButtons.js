import PropTypes from 'prop-types';
// import s from './feedbackButtons.module.css';

const OneButton = ({ feedback, onLeaveFeedback }) => {
  return (
    <button type="button" data-feedback={feedback} onClick={onLeaveFeedback}>
      {feedback}
    </button>
  );
};

const FeedbackButtons = ({ options, onLeaveFeedback }) => {
  // return options.map((option) => OneButton({feedback:option,onLeaveFeedback}));
  return options.map(option => (
    <OneButton feedback={option} onLeaveFeedback={onLeaveFeedback} />
  ));
};

FeedbackButtons.propTypes = {
  options: PropTypes.arrayOf(PropTypes.string).isRequired,
  onLeaveFeedback: PropTypes.func.isRequired,
};
export default FeedbackButtons;
