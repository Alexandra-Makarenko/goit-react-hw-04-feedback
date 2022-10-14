import PropTypes from 'prop-types';
import { List} from './Statistics.styled';

export const Statistics = ({ good,neutral,bad,total,positivePercentage }) => {
 return ( <List>
    
    <li>good:{good}</li>
    <li>neutral:{neutral}</li>
    <li>bad:{bad}</li>
    <li>total:{total}</li>
     {positivePercentage>0? <li>positivePercentage:{positivePercentage}%</li>:<li>positivePercentage:0%</li>}
      
    </List>)
};

Statistics.propTypes = {
    good: PropTypes.number.isRequired,
    neutral: PropTypes.number.isRequired,
    bad: PropTypes.number.isRequired,
    total: PropTypes.number.isRequired,
    positivePercentage: PropTypes.number.isRequired,
}