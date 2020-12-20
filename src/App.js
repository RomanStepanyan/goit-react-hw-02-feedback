import { Component } from 'react';
import Section from './components/section/section';
import FeedbackButtons from './components/feedback/feedbackButtons';
import FeedbackStatistics from './components/statistics/statistics';
import FEEDBACK_OPTIONS from './data/feedbackOptions';
import s from './App.module.css';

class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  handleFeedback = ({ target }) => {
    const { feedback } = target.dataset;
    this.setState(prevState => ({ [feedback]: prevState[feedback] + 1 }));
  };

  countTotalFeedback = () => {
    const { good, neutral, bad } = this.state;
    const totalFeedback = good + neutral + bad;
    return totalFeedback;
  };
  countPositiveFeedbackPercentage = () => {
    const { good } = this.state;
    const positiveFeedbackPercentage =
      Math.round((good / this.countTotalFeedback()) * 100) || 0;
    return positiveFeedbackPercentage;
  };

  render() {
    return (
      <div className={s.App}>
        <Section title="Please leave feedback">
          <FeedbackButtons
            options={FEEDBACK_OPTIONS}
            onLeaveFeedback={this.handleFeedback}
          />
        </Section>

        <Section title="Statistics">
          <FeedbackStatistics
            good={this.state.good}
            neutral={this.state.neutral}
            bad={this.state.bad}
            countTotalFeedback={this.countTotalFeedback()}
            countPositiveFeedbackPercentage={this.countPositiveFeedbackPercentage()}
          />
        </Section>
      </div>
    );
  }
}

export default App;
