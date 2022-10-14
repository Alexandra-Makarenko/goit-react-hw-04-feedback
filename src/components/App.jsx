import { useState, useEffect } from 'react';
import { FeedbackOptions } from './FeedbackOptions/FeedbackOptions ';
import { Statistics } from './Statistics/Statistics';
import { Section } from './Section/Section';
import { Notification } from './Notification/Notification';

export const App = () => {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);
  const [totalFeedback, setTotalFeedback] = useState(0);
  const [positiveFeedbackPercentage, setPositiveFeedbackPercentage] = useState(0);

      const onGoodFeedback = () => {
        setGood(state => state + 1);
      };
    
      const onNeutralFeedback = () => {
        setNeutral(state => state + 1);
      };
      const onBadFeedback = () => {
        setBad(state => state + 1);
      };
 
      useEffect(() => {
       
        if (!(good===0) || !(neutral===0) || !(bad===0)) {
          setTotalFeedback(state => state + 1)
         
        }
         }, [good, neutral,bad]);
         useEffect(() => {
       
          if (totalFeedback>0) {
            setPositiveFeedbackPercentage(Math.round(good/totalFeedback*100))
          }
           }, [good,totalFeedback]);

      
      
  return (
    <>
      <Section title="Please, leave feedback">
          <FeedbackOptions good={good} neutral={neutral} bad={bad} onGoodFeedback={onGoodFeedback} onNeutralFeedback={onNeutralFeedback} onBadFeedback={onBadFeedback} /></Section>
       
        <Section title="Statistics">
        {/* <Statistics good={good} neutral={neutral} bad={bad} total={totalFeedback}/> */}
           { totalFeedback>0 ? <Statistics good={good} neutral={neutral} bad={bad} total={totalFeedback} positivePercentage={positiveFeedbackPercentage}/>:
        <Notification message="There is no feedback" />}
          
   </Section>
    </>
  );
};

