import PropTypes from 'prop-types';
import css from './Statistics.module.css';
import getRandomHexColor from './colors';


export const StatisticsList = ({ id, label, percentage }) => {

    return (
            <li
                className={css.item}
                key={id}
                style={{
                    backgroundColor: `${getRandomHexColor()}`,
                }}
            >

                <span className={css.label}> {label} </span>
                <span className={css.percentage}>{percentage}%</span>
            </li>                     
            )
}

StatisticsList.propTypes = {
    stats: PropTypes.arrayOf(
      PropTypes.exact({
        id: PropTypes.string.isRequired,
        label: PropTypes.string.isRequired,
        percentage: PropTypes.number.isRequired,
      })
    ),
  };