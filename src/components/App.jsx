import FeedbackOptions from 'components/FeedbackOptions/FeedbackOptions';
import Statistics from 'components/Statistics/Statistics';
import React, { useState } from 'react';
import Notification from './Notification/Notification';
import Section from './Section/Section';
import { nanoid } from 'nanoid';

export const App = props => {
  const reviews = ['good', 'neutral', 'bad'];
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);
  const [options, setOptions] = useState(['good', 'neutral', 'bad']);

  // const reviews = ['good', 'neutral', 'bad'];
  // const [good, setGood] = useState(0);
  // const [neutral, setNeutral] = useState(0);
  // const [bad, setBad] = useState(0);
  const update = val => {
    switch (val) {
      case 'good':
        setGood(good + 1);
        break;
      case 'bad':
        setBad(bad + 1);
        break;
      default:
        setNeutral(neutral + 1);
    }
  };

  let total = good + bad + neutral;
  return (
    <div>
      <Section
        title="Please leave feedback"
        children={[
          <FeedbackOptions
            key={nanoid()}
            onLeaveFeedback={update}
            options={options}
          />,
        ]}
      ></Section>
      <Section
        title="Statistics"
        children={[
          total === 0 ? (
            <Notification
              key={nanoid()}
              message="There is no feedback"
            ></Notification>
          ) : (
            <Statistics
              key={nanoid()}
              good={good}
              neutral={neutral}
              bad={bad}
              total={total}
              positivePercentage={Math.round((good / total) * 100)}
            />
          ),
        ]}
      ></Section>
    </div>
  );
};
