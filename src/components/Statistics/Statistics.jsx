import PropTypes from 'prop-types';
import {
  Item,
  Label,
  Percentage,
  Statistics,
  StatList,
  Title,
} from './Statistics.styled';

export const Statistic = ({ title, dataArr }) => {
  return (
    <Statistics>
      {title && <Title>{title}</Title>}

      <StatList>
        {dataArr.map(({ id, label, percentage }) => {
          return (
            <Item key={id}>
              <Label>{label}</Label>
              <Percentage>{percentage}%</Percentage>
            </Item>
          );
        })}
      </StatList>
    </Statistics>
  );
};

Statistic.propTypes = {
  title: PropTypes.string,
  dataArr: PropTypes.arrayOf(
    PropTypes.exact({
      id: PropTypes.string,
      label: PropTypes.string,
      percentage: PropTypes.number,
    })
  ),
};
