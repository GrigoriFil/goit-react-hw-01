import PropTypes from 'prop-types';
import css from './TransactionHistory.module.css';

const capitalizeFirstLetter = (string) => {
  if (!string) return string;
  return string.charAt(0).toUpperCase() + string.slice(1);
};

const TransactionHistory = ({ items }) => {
  return (
    <table className={css.transactionHistory}>
      <thead>
        <tr>
          <th>Type</th>
          <th>Amount</th>
          <th>Currency</th>
        </tr>
      </thead>
      <tbody>
        {items.map(({ id, type, amount, currency }) => (
          <tr key={id}>
            <td>{capitalizeFirstLetter(type)}</td>
            <td>{amount}</td>
            <td>{currency}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

TransactionHistory.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      type: PropTypes.string.isRequired,
      amount: PropTypes.string.isRequired, // Зверніть увагу, що amount у вас рядок
      currency: PropTypes.string.isRequired,
    })
  ).isRequired,
};

export default TransactionHistory;