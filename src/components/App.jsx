import { useState } from 'react';
import FeedbackOptions from './FeedbackOptions/FeedbackOptions';
import Statistics from './Statistics/Statistics';
import Section from './Section/Section';
import Notification from './Notification/Notification';

export function App() {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const leaveFeedBack = option => {
    switch (option) {
      case 'good':
        setGood(() => good + 1);
        break;
      case 'neutral':
        setNeutral(() => neutral + 1);
        break;
      case 'bad':
        setBad(() => bad + 1);
        break;

      default:
        break;
    }
  };

  const countTotalFeedback = () => {
    return good + neutral + bad;
  };

  const positivePercentage = () => {
    return Math.round((good / countTotalFeedback()) * 100);
  };

  return (
    <div
      style={{
        height: '450px',
        width: '500px',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'top',
        alignItems: 'center',
        padding: '30px',
        margin: 'auto',
        marginTop: '50px',
        fontSize: 30,
        color: 'aliceblue',
        backgroundColor: 'darkslateblue',
        borderRadius: '10px',
      }}
    >
      <Section title="Please leave feedback">
        <FeedbackOptions
          options={['good', 'neutral', 'bad']}
          onLeaveFeedback={leaveFeedBack}
        />
      </Section>
      <Section>
        {countTotalFeedback() ? (
          <Statistics
            good={good}
            neutral={neutral}
            bad={bad}
            total={countTotalFeedback}
            positivePercentage={positivePercentage}
          />
        ) : (
          <Notification message="There is no feedback" />
        )}
      </Section>
    </div>
  );
}
