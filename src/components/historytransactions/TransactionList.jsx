import PropTypes from 'prop-types';
import { TransactionItems } from './TransactionItems';
import css from './Transaction.module.css';


export const TransactionList = ({items}) => {

    return (<table className={css.transactionHistory}>
                <thead className={css.transactionHistoryHead}>
                    <tr>
                        <th className={css.transactionTitleColoum}>Type</th>
                        <th className={css.transactionTitleColoum}>Amount</th>
                        <th className={css.transactionTitleColoum}>Currency</th>
                    </tr>
                </thead>

                <tbody>
                        {items.map(item => (
                    <tr className={css.transactionHistoryList} key={item.id}>
                                <TransactionItems
                                    type={item.type}
                                    amount={item.amount}
                                    currency={item.currency}
                                />
                    </tr>
                        ))}
                </tbody>
            </table>
    )
                
}

TransactionList.propTypes = {
    items: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.string.isRequired
    }),)
}