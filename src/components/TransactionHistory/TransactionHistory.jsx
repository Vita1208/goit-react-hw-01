import css from './TransactionHistory.module.css';

const TransactionHistory = ({ items }) => {
    return (
      <table className={css.table}>
            <thead className={css.thead}>
                <tr>
                    <th className={css.tableTitle}>Type</th>
                    <th className={css.tableTitle}>Amount</th>
                    <th className={css.tableTitle}>Currency</th>
                </tr>
            </thead>

            <tbody className={css.body}>{items.map(item =>
                <tr key={item.id}>
                    <td className={css.tableCel}>{item.type}</td>
                    <td className={css.tableCel}>{item.amount}</td>
                    <td className={css.tableCel}>{item.currency}</td>
                </tr>
            )}
            </tbody>
        </table>
    );
};

export default TransactionHistory;




