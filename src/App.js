import { Component } from 'react';
import Section from './components/section/section';
import FeedbackButtons from './components/feedback/feedbackButtons';
import FeedbackStatistics from './components/statistics/statistics';
import s from './App.module.css';

class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };
  goodHandler = () => {
    return this.setState(prevState => ({ good: prevState.good + 1 }));
  };
  neutralHandler = () => {
    return this.setState(prevState => ({ neutral: prevState.neutral + 1 }));
  };
  badHandler = () => {
    return this.setState(prevState => ({ bad: prevState.bad + 1 }));
  };

  render() {
    const { good, neutral, bad } = this.state;
    function countTotalFeedback() {
      const totalFeedback = good + neutral + bad;
      return totalFeedback;
    }
    function countPositiveFeedbackPercentage() {
      const positiveFeedbackPercentage =
        Math.round((good / countTotalFeedback()) * 100) || 0;
      return positiveFeedbackPercentage;
    }

    return (
      <div className={s.App}>
        <Section title="Please leave feedback">
          <FeedbackButtons
            onGood={this.goodHandler}
            onNeutral={this.neutralHandler}
            onBad={this.badHandler}
          />
        </Section>
        <Section title="Statistics">
          <FeedbackStatistics
            good={this.state.good}
            neutral={this.state.neutral}
            bad={this.state.bad}
            countTotalFeedback={countTotalFeedback()}
            countPositiveFeedbackPercentage={countPositiveFeedbackPercentage()}
          />
        </Section>
      </div>
    );
  }
}

export default App;
