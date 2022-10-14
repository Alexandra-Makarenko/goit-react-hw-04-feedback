import { Component } from 'react';
import { FeedbackOptions } from './FeedbackOptions/FeedbackOptions ';
import { Statistics } from './Statistics/Statistics';
import { Section } from './Section/Section';
import { Notification } from './Notification/Notification';



export class App extends Component  {
  state = {
  good: 0,
  neutral: 0,
  bad: 0
}

  constructor() {
    super();
    this.onLeaveFeedback = this.onLeaveFeedback.bind(this);

  }
  onLeaveFeedback(option) {
    this.setState((prevState) => { return { [option]: prevState[option]+1} })
   
  }

  countTotalFeedback() {
  return  this.state.good+this.state.neutral+this.state.bad;
  }
   
  countPositiveFeedbackPercentage() {
  return Math.round(this.state.good/this.countTotalFeedback()*100)
}


    render() {
    return (
      <>      
 <Section title="Please, leave feedback">
          <FeedbackOptions options={Object.keys(this.state)} onLeaveFeedback={this.onLeaveFeedback} /></Section>
       
        <Section title="Statistics">
           
         {this.countTotalFeedback()>0 ? <Statistics good={this.state.good} neutral={this.state.neutral} bad={this.state.bad} total={this.countTotalFeedback()} positivePercentage={this.countPositiveFeedbackPercentage()} />:
          <Notification message="There is no feedback" />}
   </Section>
        </>
    );
  }
};