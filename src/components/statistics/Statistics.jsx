import PropTypes from 'prop-types';
import { StatisticsList } from './StatisticsList';
import css from './Statistics.module.css';

export const Statistics = ({ title, stats }) => {
    return (
      <section className={css.statistics}>
        {title && <h2 className={css.title}>{title}</h2>}
  
        <ul className={css.stat_list}>
          {stats.map(stat => (
            <StatisticsList
              key={stat.id}
              label={stat.label}
              percentage={stat.percentage}
            />
          ))}
        </ul>
      </section>
    );
  };
  
  Statistics.propTypes = {
    title: PropTypes.string.isRequired,
    stats: PropTypes.arrayOf(
      PropTypes.exact({
        id: PropTypes.string.isRequired,
        label: PropTypes.string.isRequired,
        percentage: PropTypes.number.isRequired,
      })
    ),
  };