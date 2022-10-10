import PropTypes from 'prop-types';
import css from './Transaction.module.css';


export const TransactionItems = ({ type, amount, currency }) => {
    
    return (<>
                <td className={css.transactionLineTable}>{type}</td>
                <td className={css.transactionLineTable}>{amount}</td>
                <td className={css.transactionLineTable}>{currency}</td>
            </>

    )
}


TransactionItems.propTypes = {
    type: PropTypes.string.isRequired,
    amount: PropTypes.string.isRequired,
    currency: PropTypes.string.isRequired
}