import PropTypes from 'prop-types';
import { StatisticsList } from './StatisticsList';
import css from './Statistics.module.css';

export const Statistics = ({stats, title="Upload stats"}) => {
    return (
        <section className={css.statistics}>

            {title && <h2 className={css.title}>{title}</h2>}
            
            <ul className={css.statList}>
                {stats.map(item => (
                    
                    <li key={item.id} className={css.item}>
                        <StatisticsList
                            label={item.label}
                            percentage={item.percentage}
                        />
                    </li>
                ))}
            </ul>
        </section>

    )
}

Statistics.propTypes = {
    stats: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.string.isRequired,
        label: PropTypes.string.isRequired,
    percentage: PropTypes.number.isRequired
    })),
    title: PropTypes.string
}