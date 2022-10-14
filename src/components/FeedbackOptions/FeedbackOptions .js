import PropTypes from 'prop-types';
import { Button } from './FeedbackOptions.styled';

export const FeedbackOptions = ({ good,bad,neutral, onGoodFeedback,onNeutralFeedback, onBadFeedback}) => {
  return (  
    <div>
  <Button type='button' onClick={()=>onGoodFeedback(good)}>{good}</Button>  
  <Button type='button' onClick={()=>onNeutralFeedback(neutral)}>{neutral}</Button> 
  <Button type='button' onClick={()=>onBadFeedback(bad)}>{bad}</Button>       
 
  </div>
    )
  
};

FeedbackOptions.propTypes = {
  good: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  onGoodFeedback: PropTypes.func.isRequired,
  onNeutralFeedback: PropTypes.func.isRequired,
  onBadFeedback: PropTypes.func.isRequired,

}

