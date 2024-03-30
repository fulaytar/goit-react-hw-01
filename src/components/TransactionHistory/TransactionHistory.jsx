import css from './TransactionHistory.module.css'

export default function TransactionHistory(props) {
    return (
        <table className={css.table}>
  <thead className={css.thead}>
    <tr className={css.namesHistory}>
      <th className={css.namesHistoryItem}>Type</th>
      <th className={css.namesHistoryItem}>Amount</th>
      <th className={css.namesHistoryItem}>Currency</th>
    </tr>
  </thead>

  <tbody className={css.tbody}>
    {
        props.items.map(element => {
            return (
      <tr className={css.tr} key={element.id}>
      <td className={css.tdType}>{element.type}</td>
      <td className={css.tdAmount}>{element.amount}</td>
      <td className={css.tdCurrency}>{element.currency}</td>
     </tr>
        );
        })
    }           
  </tbody>
</table>
    );
}