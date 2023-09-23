// import { useState } from 'react';
import { useReducer } from 'react';
import PropTypes from 'prop-types';
import FeedbackOptions from './Feedbackoption/Feedbackoption';
import Statistics from './Statistics/Statistics';
import { MainTitle } from './Section.styled';

// const Section = ({ title }) => {
//   const [good, setGood] = useState(0);
//   const [neutral, setNeutral] = useState(0);
//   const [bad, setBad] = useState(0);

//   const onLeaveFeedback = option => {
//     switch (option) {
//       case 'good':
//         setGood(prev => prev + 1);
//         break;

//       case 'neutral':
//         setNeutral(prev => prev + 1);
//         break;

//       case 'bad':
//         setBad(prev => prev + 1);
//         break;

//       // no default
//     }
//   };

//   const options = { good, neutral, bad };

//   const countTotalFeedback = () => {
//     return good + neutral + bad;
//   };

//   const countPositiveFeedbackPercentage = () => {
//     return Math.round(good / ((good + neutral + bad) / 100));
//   };

//   return (
//     <section>
//       <MainTitle>{title}</MainTitle>

//       <FeedbackOptions
//         options={Object.keys(options)}
//         onLeaveFeedback={onLeaveFeedback}
//       />

//       <Statistics
//         good={good}
//         neutral={neutral}
//         bad={bad}
//         total={countTotalFeedback()}
//         positivePercentage={countPositiveFeedbackPercentage()}
//       ></Statistics>
//     </section>
//   );
// };

function reducer(prev, action) {
  if (action.type === 'good') {
    return { ...prev, [action.type]: prev[action.type] + action.payload };
  } else if (action.type === 'neutral') {
    return { ...prev, [action.type]: prev[action.type] + action.payload };
  } else if (action.type === 'bad') {
    return { ...prev, [action.type]: prev[action.type] + action.payload };
  }
}

const Section = ({ title }) => {
  const [state, dispatch] = useReducer(reducer, {
    good: 0,
    neutral: 0,
    bad: 0,
  });

  const { good, neutral, bad } = state;

  const onLeaveFeedback = option => {
    dispatch({ type: option, payload: 1 });
  };

  const countTotalFeedback = () => {
    return good + neutral + bad;
  };

  const countPositiveFeedbackPercentage = () => {
    return Math.round(good / ((good + neutral + bad) / 100));
  };

  return (
    <section>
      <MainTitle>{title}</MainTitle>

      <FeedbackOptions
        options={Object.keys(state)}
        onLeaveFeedback={onLeaveFeedback}
      />

      <Statistics
        good={good}
        neutral={neutral}
        bad={bad}
        total={countTotalFeedback()}
        positivePercentage={countPositiveFeedbackPercentage()}
      ></Statistics>
    </section>
  );
};

Section.propTypes = {
  title: PropTypes.string.isRequired,
};

export default Section;
